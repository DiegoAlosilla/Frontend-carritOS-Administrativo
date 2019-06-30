import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {BusinessOwnerService}from '../../Service/BusinessOwner/business-owner.service'
import { BusinessOwner } from 'src/app/model/business-owner';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  businessOwners: BusinessOwner[];

  constructor(private service:BusinessOwnerService,private router:Router) { }

  ngOnInit() {
    this.service.getAllBusinessOwner()
    .subscribe(data=>{
      this.businessOwners=data;
    })
  }
  Update(businnessOwner:BusinessOwner):void{
    localStorage.setItem("id",businnessOwner.id.toString());
    this.router.navigate(["updateBusinessOwner"])
  }

}
