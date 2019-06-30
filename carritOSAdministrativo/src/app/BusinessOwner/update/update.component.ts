import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessOwnerService } from 'src/app/Service/BusinessOwner/business-owner.service';
import { BusinessOwner } from 'src/app/model/business-owner';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  businessOwner:BusinessOwner=new BusinessOwner();
  constructor(private router:Router, private service:BusinessOwnerService) { }

  ngOnInit() {
    this.Update();
  }

  Update()
  {
    let id=localStorage.getItem("id");
    this.service.getBusinessOwnerId(+id)
    .subscribe(data=>{
      this.businessOwner=data;
    });
  }
}
