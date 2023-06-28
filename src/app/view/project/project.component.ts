import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../../services";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IProjectPost } from 'src/app/models/project.model';
import { ToastrService } from 'ngx-toastr';
declare var $:any;

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  
  projectList: any;
  private gridApi;
  private gridColumnApi;
public rowData:[any];

  submitted: boolean;
  projectForm: FormGroup;
  organizationList: any;
  p:number=1;

  constructor(public projectService: ProjectService,
    private formBuilder: FormBuilder,public toastr:ToastrService) { }

  ngOnInit(): void {
    this.projectAPIcall();
    this.projectFormSetup();
  }

  projectFormSetup(){
    this.projectForm = this.formBuilder.group({
      project_id :0,
      P_id: [''],
      Project_name: [''],
      projectr_cost_center: [''],
      Risk_desc: [''],
      Reporting_org: [''],
      Address: [''],
      p_manager: [''],
      pl_str: [''],
      pl_end: [''],
      Al_str: [''],
      Al_end: [''],
      client: [''],
      cNumber: [''],
      cDescription: [''],
      cntctstr: [''],
      cntctend: [''],
      p_ref_number: [''],
     

    });
  }

  get f() { return this.projectForm.controls; }
 

  onSubmitPrimary() {

    this.submitted = true;
    console.log(this.projectForm.value)
    // stop here if form is invalid
    if (this.projectForm.invalid) {
        return;
    }
   
  
    let projectData: IProjectPost = {
                
      project_id :0,
      ProjectID: this.projectForm.value.P_id,
      ProjectName: this.projectForm.value.Project_name,
      CostCenter: this.projectForm.value.projectr_cost_center,
      //"LocalName": $scope.P_L_name,
      Risk_Description: this.projectForm.value.Risk_desc,
      o_id:this.projectForm.value.Reporting_org,
      //"TypeID": $scope.type,
      Address: this.projectForm.value.Address,
      //"Location": $scope.Location,
      Project_Manager: this.projectForm.value.p_manager,
      Plan_startdt:this.projectForm.value.pl_str,
      Plan_Enddt:this.projectForm.value.pl_end,
      Actual_startdt:this.projectForm.value.Al_str,
      Actual_Enddt: this.projectForm.value.Al_end,
      Client:this.projectForm.value.client,
      Contact_no: this.projectForm.value.cNumber,
      Contact_Description: this.projectForm.value.cDescription,
      Contact_StartDt: this.projectForm.value.cntctstr,
      Contact_EndDt:this.projectForm.value.cntctend,
      Project_RefNo: this.projectForm.value.p_ref_number,     

    }
  
    this.projectService.SetprojctList(projectData).subscribe((data: any) => {
      if(data.ResponseMsg){
        this.toastr.success("Project Successfully Created.","Success");
        this.projectService.GetprojctList().subscribe((data: any) => {
          this.projectList = data;
          
        });
      
        $(document).ready(function() {
          $("#tabfirst").click();
        });
      }
  
  
  
    });
  
  
  }
  columnDefs = [
    {headerName: 'ID',field:'ProjectID'},
    {headerName: 'Name', field: 'ProjectName'},
    {headerName: ' Project Manager', field: 'Project_Manager' },
    {headerName: 'Client', field: 'Client' },
    { headerName: "Actions",
    suppressMenu: true,
    suppressSorting: true,
    width:150,
    template:
      `<button type="button" data-action-type="view"  class="fa fa-eye" style="border:none;background:none;color:#102f66;margin-left:-10px">
         
      </button>
      
      <button type="button" data-action-type="view"  class="fa fa-edit" style="border:none;background:none;color:#102f66">
         
       </button>

      <button type="button" data-action-type="remove" class="fa fa-trash" style="border:none;background:none;color:#102f66">
        
      </button>`
  }
    
];

onGridReady(params) {
  this.gridApi = params.api;
  this.gridColumnApi = params.columnApi;
 
  this.projectService.GetprojctList().subscribe(data => {
    params.api.setRowData(data);
    });
  

}
  projectAPIcall() {
    this.projectService.GetprojctList().subscribe((data: any) => {
      this.projectList = data;
      
    });

    this.projectService.getOrganizationList().subscribe((data: any) => {
      this.organizationList = data;
      
    });

    // this.employeeService.getEmployeedetList().subscribe((data: any) => {
    //   this.employeedetList = data;
    // });

    
  }
}
