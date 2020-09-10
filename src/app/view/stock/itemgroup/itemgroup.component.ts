import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {PoliciesService } from 'src/app/services';
import { IItemGroupPost } from 'src/app/models/item.model';

@Component({
  selector: 'app-itemgroup',
  templateUrl: './itemgroup.component.html',
  styleUrls: ['./itemgroup.component.css']
})
export class ItemgroupComponent implements OnInit {
  itemgroupList: any;
  ItemGroupForm: FormGroup;

  constructor(public policiesService:PoliciesService,
    private formBuilder: FormBuilder,public toastr:ToastrService) { }

  ngOnInit(): void {
    this.itemGroupAPICall();
    this.ItemGroupFormSetup();
  }
  ItemGroupFormSetup(){
    this.ItemGroupForm = this.formBuilder.group({
      ItemGroupId:[''],
      ItemGroupdesc:[''],
     
    });
  }

  get f() { return this.ItemGroupForm.controls; }


  onSubmitPrimary(){
    let itemGroupPostData:IItemGroupPost={
      itemgroup_id:0,
      ItemGroupID: this.ItemGroupForm.value.ItemGroupId,
      ItemGroupDescription: this.ItemGroupForm.value.ItemGroupdesc,
     
    }

    this.policiesService.SetItemGroup(itemGroupPostData).subscribe((data:any)=>{
        if(data.ResponseMsg){
         
            this.toastr.success("Item Group Successfully Created.","Success");
            this.policiesService.GetItemGroupList().subscribe((data: any) => {
              this.itemgroupList=data
            });
      //       this.staticTabs.tabs[0].active = true;
      
      //  this.submitted=false;
        }
    });
  }
  itemGroupAPICall(){
    this.policiesService.GetItemGroupList().subscribe((data: any) => {
      this.itemgroupList=data
    });
  }
}
