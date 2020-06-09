import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 
  
  constructor(
  
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

  onSubmit() {
   
   // this.loading = true;
    this.authenticationService.login('raj4491@hotmail.com', '!!Raj@619')
        .pipe(first())
        .subscribe(
            data => {
                    this.router.navigate([`/dashboard`]);
            },
            error => {
              
            });
}
  
}
