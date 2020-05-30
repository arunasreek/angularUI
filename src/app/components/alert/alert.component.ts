import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';

import { AlertService } from '../../services';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    message: any;
    staticAlertClosed = false;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.subscription = this.alertService.getMessage().subscribe(message => {
            this.message = message;
            if (this.message) {
                setTimeout(() => this.message = null, 13000);
            }
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}