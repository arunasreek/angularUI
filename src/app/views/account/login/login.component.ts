import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { AlertService, AuthenticationService, BrandLevelService } from '../../../services';
import { MessageService } from 'primeng/api';



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})

export class LoginComponent {
    public loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    options = [{
        text: 'Item 1',
        value: 1
    },
    {
        text: 'Item 2',
        value: 2
    }, {
        text: 'Item 3',
        value: 3
    }];

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private brandLevelService: BrandLevelService,
        private alertService: AlertService,
        private cookieService: CookieService,
        private messageService: MessageService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            rememberMe: [this.cookieService.get('remember') === "Y" ? 'checked' : '']
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        // Prefill user details if stored in cookie
        if (this.cookieService.get('remember') === "Y") {
            this.loginForm.controls['username'].setValue(this.cookieService.get('username'));
            this.loginForm.controls['password'].setValue(this.cookieService.get('password'));
        }
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    rememberMe(event: Event) {
        const target = event.target as HTMLInputElement;

        // Save useremail/username and password 
        if (target.checked) {
            this.cookieService.set('username', this.f.username.value);
            this.cookieService.set('password', this.f.password.value);
            this.cookieService.set('remember', 'Y'); // Y for Yes to remember
            return;
        }
        // Remove username/useremail and password from storage
        this.cookieService.delete('username');
        this.cookieService.delete('password');
        this.cookieService.set('remember', 'N'); // N for Don't remember
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

       // this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    if (data.roles.split(',').indexOf('SuperAdmin') > -1) {
                        this.router.navigate([`/dashboard`]);
                    } else {
                        this.router.navigate([`/user/dashboard`]);
                    }
                    // this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.messageService.add({ severity: 'error', summary: "Username or password is incorrect" });
                    //this.alertService.error(error);
                    this.loading = false;
                });
    }

    forgotPassword() {
        
    }

}