import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import { AuthenticationService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  customerName:string;

  constructor(private authenticationService: AuthenticationService, private router: Router,){

  }
  ngOnInit(){
    this.customerName=this.authenticationService.currentUserValue.email
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
}
