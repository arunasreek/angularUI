import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../services';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';


@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html'
})

export class ForgotPasswordComponent {
    public forgotPasswordForm: FormGroup;
    public changePasswordForm: FormGroup;
    public currentView: string;
    public routeEmailId: string;
    public routeScreen: string;
    public routeToken: string;

    constructor(private formBuilder: FormBuilder, private usersService: UsersService,
        private messageService: MessageService, private activatedRoute: ActivatedRoute, private router: Router
    ) {
        // this.emailId = this
        //     .activatedRoute
        //     .snapshot
        //     .paramMap
        //     .get("emailId");

        // this.token = this
        //     .activatedRoute
        //     .snapshot
        //     .paramMap
        //     .get("token");

        // this.screen = this
        //     .activatedRoute
        //     .snapshot
        //     .paramMap
        //     .get("screen");

    }

    ngOnInit() {
        this.forgotPasswordForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
        });

        this.changePasswordForm = this.formBuilder.group({
            NewPassword: ['', Validators.required],
            ConfirmPassword: ['', Validators.required],
        });

        this.setView('forgotPassword');

        //To get values from url
        this.routeEmailId = this.activatedRoute.snapshot.queryParamMap.get('emailId');
        this.routeScreen = this.activatedRoute.snapshot.queryParamMap.get('screen');
        this.routeToken = this.activatedRoute.snapshot.queryParamMap.get('token');

        if (this.routeEmailId && this.routeToken && !this.routeScreen) {
            this.usersService.tokenValidCheck(this.routeToken, this.routeEmailId).subscribe((res: any) => {
                if (res.success) {
                    this.setView('changePassword');
                } else {
                    this.messageService.add({ severity: 'error', summary: res.error });
                    this.router.navigate(['/']);
                }
            });
        }

        if (this.routeScreen) {
            this.usersService.tokenValidCheck(this.routeToken, this.routeEmailId).subscribe((res: any) => {
                if (res.success) {
                    this.setView('changePassword');
                } else {
                    this.messageService.add({ severity: 'error', summary: res.error });
                    this.router.navigate(['/'])
                }
            });
        }
    }



    onSubmit() {
        // const formData = new FormData();
        this.usersService.forgotPassword(this.forgotPasswordForm.value).subscribe((res: any) => {
            if (res.success) {
                this.messageService.add({ severity: 'success', summary: 'Check your mail' });
                setTimeout(() => {
                    this.router.navigate(['/login']);
                }, 2000);
            } else {
                this.messageService.add({ severity: 'error', summary: res.error });
                // setTimeout(() => {
                //     this.router.navigate(['/login']);
                // }, 2000);

                // this.router.navigate(['/'])

            }
        });
    }

    onChangePasswordSubmit() {
        if (this.changePasswordForm.value.NewPassword != this.changePasswordForm.value.ConfirmPassword) {
            this.messageService.add({ severity: 'error', summary: 'Passwords don’t match.' });
        } else {
            this.usersService.resetPassword(this.routeToken, this.routeEmailId, this.changePasswordForm.value.NewPassword).subscribe((res: any) => {
                if (res.success) {
                    //   this.setView('changePassword');
                    this.messageService.add({ severity: 'success', summary: 'Password changed successfully.' });
                    setTimeout(() => {
                        this.router.navigate(['/login']);
                    }, 2000);
                } else {
                    this.messageService.add({ severity: 'error', summary: res.error });
                }
            });
        }
    }

    setView(view) {
        /** Change page view */
        this.currentView = view;
    }
}