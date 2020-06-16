import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './view/employee/employee.component';
import { EnterpriseComponent } from './view/enterprise/enterprise.component';
import { EmployerComponent } from './view/employer/employer.component';
import { EmpbranchComponent } from './view/empbranch/empbranch.component';
import { OrganizationComponent } from './view/organization/organization.component';
import { ProjectComponent } from './view/project/project.component';


const routes: Routes = [
  { path: 'enterprise', component: EnterpriseComponent },
  { path: 'employer', component: EmployerComponent },
  { path: 'empbranch', component: EmpbranchComponent },
  { path: 'organization', component: OrganizationComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'project', component: ProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
