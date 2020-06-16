import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IToken, ICommonResult } from '../models';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<IToken>;
    public currentUser: Observable<IToken>;

    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {
        this.currentUserSubject = new BehaviorSubject<IToken>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): IToken {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        let body = `UserName=${username}&Password=${password}&grant_type=password`;
        let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post<any>(`${this.config.apiEndpoint}/token`, body, { headers: headers })
            .pipe(map((user: IToken) => {
                // login successful if there's a jwt token in the response
                if (user && user.access_token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }

    getOrgDetails(orgId: number) {
        return this.http.get<ICommonResult>(`${this.config.apiEndpoint}/Organisation/${orgId}`).pipe(map((data: any) => {
            return data;
        }));
    }


    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('orgId');
        this.currentUserSubject.next(null);
    }
}