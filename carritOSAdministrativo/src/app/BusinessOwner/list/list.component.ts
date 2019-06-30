import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {BuisnessOwnerService}from '../../Service/BuisnessOwner/buisness-owner.service'
import { BuisnessOwner } from 'src/app/model/buisness-owner';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  buisnessOwners: BuisnessOwner[];

  constructor(private service:BuisnessOwnerService,private router:Router) { }

  ngOnInit() {
    this.service.getAllBuisnessOwner()
    .subscribe(data=>{
      this.buisnessOwners=data;
    })
  }
  Update(buisnnessOwner:BuisnessOwner):void{
    localStorage.setItem("id",buisnnessOwner.id.toString());
    this.router.navigate(["updateBuisnessOwner"]);
  }

}
