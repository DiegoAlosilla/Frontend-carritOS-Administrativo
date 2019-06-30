import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuisnessOwnerService } from 'src/app/Service/BuisnessOwner/buisness-owner.service';
import { BuisnessOwner } from 'src/app/model/buisness-owner';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  buisnessOwner:BuisnessOwner=new BuisnessOwner();
  constructor(private router:Router, private service:BuisnessOwnerService) { }

  ngOnInit() {
    this.Get();
  }

  Get()
  {
    let id=localStorage.getItem("id");
    this.service.getBuisnessOwnerId(+id)
    .subscribe(data=>{
      this.buisnessOwner=data;
    });
  }

  Update(buisnessOwner:BuisnessOwner){
    this.service.putBuisnessOwner(buisnessOwner)
    .subscribe(data=>{
      this.buisnessOwner=data;
      alert("update successfully");
      this.router.navigate(["listBuisnessOwner"]);
    })
  }
}
