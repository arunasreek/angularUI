import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IEmployeePost, IEmployeeDelete, IEmployeeEdit, IEmployeeWorkPermit } from 'src/app/models';
import { ToastrService } from 'ngx-toastr';
import { jobClassModel } from 'src/app/models/jobClass.model';
import { JobClassService } from 'src/app/services/jobclass.service';
declare var $:any;
@Component({
  selector: 'app-jobclass',
  templateUrl: './jobclass.component.html',
  styleUrls: ['./jobclass.component.css']
})
export class JobclassComponent implements OnInit {

  Isupdate:boolean;
  Isrenew:boolean;
  IsActive:boolean;
  IsInactive:boolean;
  Isedit:number;
  IsJBupdate:boolean;
  http: any;
  p: number=1;
  jobClassList:any;
  jobClassId:number;
  jobClassForm:FormGroup;
  constructor(private jobclassService : JobClassService,
    private fromBuilder:FormBuilder,public toaster:ToastrService) { }

  ngOnInit(): void {
    this.jobAPIcall();
    this.jobClassFormSetUp();
  }
  jobClassFormSetUp(){
    this.jobClassForm = this.fromBuilder.group({
      JbclassId: [''],
      Jbclassdesc: [''],
    });
  }

  jobAPIcall() {
    this.jobclassService.getJobClassList().subscribe((data: any) => {
      this.jobClassList = data;
      console.log(data);
    });
  }

  onSubmitJobclassDetails(){
    let jobClass:jobClassModel={
      JobclassId:this.jobClassId > 0 ? this.jobClassId : 0,
      JobClassId1:this.jobClassForm.value.JbclassId,
      JobClassDescription : this.jobClassForm.value.Jbclassdesc
    }
    console.log(jobClass);
    this.jobclassService.setJobClass(jobClass).subscribe((data)=>{
      if(data){
       this.toaster.success("Successfully Created.","Success");
       this.jobAPIcall();
       $(document).ready(function() {
         $("#afirsttab").click();
       });
      }
     
   },
   (error) => {
     console.log('POST request failed', error);
   }
   );
  }

  GetJobCategoryById(ID:string){
    this.jobClassList.forEach((value,index)=>{
      if(value.jobCategoryId == ID){
        this.jobClassId = value.JobclassId;
        alert(this.jobClassId);
        this.jobClassForm.setValue({
          Jbcatid:value.jobCategoryId,
          Jbcatdesc: value.jobCategoryDescription,
        })
        this.IsJBupdate=true;
        this.Isedit=1;
      } 
      $(document).ready(function() {
        $("#asecondtab").click();
      });
    });
}
}
