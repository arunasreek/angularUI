    import { Injectable } from '@angular/core';
    import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
    import { Observable, throwError } from 'rxjs';
    import { catchError } from 'rxjs/operators';

    import { AuthenticationService } from '../services';
    import { Router } from "@angular/router"
    import * as HttpStatus from 'http-status-codes'

    import { CustomHTTPStatus } from "../enum/commonEnum";


    @Injectable()
    export class ErrorInterceptor implements HttpInterceptor {
        public globalMessage: string;
        constructor(private authenticationService: AuthenticationService,
            private router: Router ) { }

        intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            return next.handle(request).pipe(catchError(err => {
                let error = '';
                if (err.status) {
                    error = err.error.message || err.statusText;
                    if (err.status === HttpStatus.UNAUTHORIZED) {
                        // auto logout if 401 response returned from api
                        //this.authenticationService.logout();
                        //location.reload(true);
                        this.router.navigate(['/user/dashboard']);
                        // this.alertService.error(error);
                        return throwError(error);
                    } else if (err.status === HttpStatus.BAD_REQUEST) {
                        if (err.error.error === CustomHTTPStatus.Invalid_Grant) {
                            // this.alertService.error(err.error.error_description);
                            //  location.reload(true);
                        } else {
                            // this.alertService.error(error);
                        }
                    } else if (err.status === CustomHTTPStatus.TOKEN_EXPIRE) {
                        this.authenticationService.logout();
                        this.router.navigate(['/login']);
                        //this.alertService.error(error);
                    } else {

                        // this.alertService.error(error);
                        //this.authenticationService.logout();
                        //location.reload(true);
                    }
                    window.scroll(0, 0);
                }

            }))
        }
    }