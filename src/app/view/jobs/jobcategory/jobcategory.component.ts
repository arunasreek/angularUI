import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IEmployeePost, IEmployeeDelete, IEmployeeEdit, IEmployeeWorkPermit } from 'src/app/models';
import { ToastrService } from 'ngx-toastr';
import { jobcategoryModel } from 'src/app/models/jobcategory.model';
import { JobCategoryService } from 'src/app/services/jobcategory.service';
declare var $:any;

@Component({
  selector: 'app-jobcategory',
  templateUrl: './jobcategory.component.html',
  styleUrls: ['./jobcategory.component.css']
})
export class JobcategoryComponent implements OnInit {

  Isupdate:boolean;
  Isrenew:boolean;
  IsActive:boolean;
  IsInactive:boolean;
  Isedit:number;
  IsJBupdate:boolean;
  http: any;
  p: number=1;
  jobCatList:any;
  jobcatId:number;
  jobCategoryForm:FormGroup;
  constructor( private jobcategoryServive : JobCategoryService,
    private fromBuilder:FormBuilder,public toaster:ToastrService) { }

  ngOnInit(): void {
    this.jobAPIcall();
    this.jobCategoryFormSetUp();
  }
jobCategoryFormSetUp(){
  this.jobCategoryForm = this.fromBuilder.group({
    Jbcatid: [''],
    Jbcatdesc: [''],
  });
}

  jobAPIcall() {
    this.jobcategoryServive.getJobCategoryList().subscribe((data: any) => {
      this.jobCatList = data;
      console.log(data);
    });
  }
  onSubmitJobcategoryDetails(){
    let jobcategory:jobcategoryModel={
      JobcatId:this.jobcatId > 0 ? this.jobcatId : 0,
      JobCategoryId:this.jobCategoryForm.value.Jbcatid,
    JobCategoryDescription : this.jobCategoryForm.value.Jbcatdesc
    }
    console.log(jobcategory);
    this.jobcategoryServive.setJobCategory(jobcategory).subscribe((data)=>{
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
      this.jobCatList.forEach((value,index)=>{
        if(value.jobCategoryId == ID){
          this.jobcatId = value.jobcatId;
          alert(this.jobcatId);
          this.jobCategoryForm.setValue({
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
