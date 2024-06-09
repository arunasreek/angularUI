import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IEmployeePost, IEmployeeDelete, IEmployeeEdit, IEmployeeWorkPermit } from 'src/app/models';
import { ToastrService } from 'ngx-toastr';
import { UoMmodel } from 'src/app/models/UOM.model';
import { UOMService } from 'src/app/services/uom.services';
declare var $:any;
@Component({
  selector: 'app-uom',
  templateUrl: './uom.component.html',
  styleUrls: ['./uom.component.css']
})
export class UOMComponent implements OnInit {

  Isupdate:boolean;
  Isrenew:boolean;
  IsActive:boolean;
  IsInactive:boolean;
  Isedit:number;
  IsJBupdate:boolean;
  http: any;
  p: number=1;
  UOMList:any;
  UnitId:number;
  uomForm:FormGroup;
  constructor( private UOMservive : UOMService,
    private fromBuilder:FormBuilder,public toaster:ToastrService) { }

  ngOnInit(): void {
    this.UOMAPIcall();
    this.UOMFormSetUp();
  }
  UOMFormSetUp(){
    this.uomForm = this.fromBuilder.group({
      UnitId: [''],
      UnitOfMeasure: [''],
      Status:['']
    });
  }
  
    UOMAPIcall() {
      this.UOMservive.getUOMList().subscribe((data: any) => {
        this.UOMList = data;
        console.log(data);
      });
    }
    onSubmitUOM(){
      let jobcategory:UoMmodel={
          UnitId:this.UnitId > 0 ? this.UnitId : 0,
          UnitOfMeasure:this.uomForm.value.UnitOfMeasure,
          Status : this.uomForm.value.Status
      }
      console.log(jobcategory);
      this.UOMservive.onSubmitUOM(jobcategory).subscribe((data)=>{
        if(data){
         this.toaster.success("Successfully Created.","Success");
         this.UOMAPIcall();
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
    GetUOMById(ID:number){
        this.UOMList.forEach((value,index)=>{
          if(value.unitId == ID){
            this.UnitId = value.unitId;
            this.uomForm.setValue({
              UnitId:value.unitId,
              UnitOfMeasure: value.unitOfMeasure,
              Status: value.status,
            })
            this.IsJBupdate=true;
            this.Isedit=1;
          } 
          $(document).ready(function() {
            $("#tab_1").click();
          });
        });
    }
  }
  
  