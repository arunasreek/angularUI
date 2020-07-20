import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services';
import { IErealtorsPost } from 'src/app/models/enterprise.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-erealtors',
  templateUrl: './erealtors.component.html',
  styleUrls: ['./erealtors.component.css']
})
export class ErealtorsComponent implements OnInit {

  constructor(public commonservice :CommonService,
              public toastr:ToastrService) { }

  ngOnInit(): void {
  }

  saveData(CustName : string,refId : string){
    var numb = refId.replace(/[^0-9]/g,'');
    console.log(numb);
    let erealtorsPost : IErealtorsPost={
      name: CustName,
      refId : parseInt(numb.toString())
    };
    this.commonservice.setErealtors(erealtorsPost).subscribe((data:any)=>{
      this.toastr.success("Successfully Created.","Success");
    });
  }

}
