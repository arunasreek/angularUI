import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { MustMatch } from '../../helpers/must-match.validator';
import { UsersService } from '../../services';
import { IUserProfile } from '../../models';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, 
    private userService: UsersService,
    private toastr: ToastrService,) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        country: ['', Validators.required],
        mobileno: ['', [Validators.required, Validators.minLength(10)]],
       
    }, {
      validator: MustMatch('password', 'confirmPassword')
     });
}

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        let postUser: IUserProfile = {
         Email:this.registerForm.value.email,
         Password:this.registerForm.value.password,
         ConfirmPassword:this.registerForm.value.confirmPassword
        };

        this.userService.saveUser(postUser).subscribe(
          data => {
            this.toastr.success('Registration Successfull','success')
            this.submitted = false;
            this.registerForm.reset();
          },
          err => this.toastr.error(this.getError(err.error.modelState),'error') 
        
        );
      }

      getError(error:any){
        console.log(Object.values(error));
        return Object.values(error)[0].toString();
      }

}
