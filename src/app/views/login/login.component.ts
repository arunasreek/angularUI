import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 

  
  constructor(
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
        this.router.navigate(['/']);
    }
}

  ngOnInit() {
  }

  onSubmit(userName:string, passWord:string) {
    console.log
   if(userName || passWord)
   {
    this.authenticationService.login(userName, passWord)
        .pipe(first())
        .subscribe(
            data => {
                    this.router.navigate([`/dashboard`]);
            },
            error => {
              console.log(error);
              this.toastr.error(error.error.error_description,'Error');
            });
    }
    else{
      this.toastr.error('All fields required.','Error');
    }
    }
  
}
