import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {PoliciesService } from 'src/app/services';
import { IItemCategoryPost } from 'src/app/models/item.model';

@Component({
  selector: 'app-item-category',
  templateUrl: './item-category.component.html',
  styleUrls: ['./item-category.component.css']
})
export class ItemCategoryComponent implements OnInit {
  itemcategoryList: any;
 
  ItemCategoryForm: FormGroup;

  constructor(public policiesService:PoliciesService,
    private formBuilder: FormBuilder,public toastr:ToastrService) { }

  ngOnInit(): void {
    this.itemCategoryAPICall();
    this.ItemCategoryFormSetup();
  }
  ItemCategoryFormSetup(){
    this.ItemCategoryForm = this.formBuilder.group({
      ItemCategoryId:[''],
      ItemCategorydesc:[''],
     
    });
  }

  get f() { return this.ItemCategoryForm.controls; }


  onSubmitPrimary(){
    let ItemcatPostData:IItemCategoryPost={
      itemcat_id:0,
      ItemCategoryID: this.ItemCategoryForm.value.ItemCategoryId,
      ItemCategoryDescription: this.ItemCategoryForm.value.ItemCategorydesc,
     
    }

    this.policiesService.SetItemCategory(ItemcatPostData).subscribe((data:any)=>{
        if(data.ResponseMsg){
         
            this.toastr.success("Item Category Successfully Created.","Success");
            this.policiesService.GetItemCategoryList().subscribe((data: any) => {
              this.itemcategoryList=data
            });
      //       this.staticTabs.tabs[0].active = true;
      
      //  this.submitted=false;
        }
    });
  }
  itemCategoryAPICall(){
    this.policiesService.GetItemCategoryList().subscribe((data: any) => {
      this.itemcategoryList=data
    });
  }

}
