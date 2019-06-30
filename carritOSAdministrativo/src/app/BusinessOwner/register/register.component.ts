import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessOwnerService } from 'src/app/Service/BusinessOwner/business-owner.service';
import { BusinessOwner } from 'src/app/model/business-owner';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router, private service:BusinessOwnerService) { }

  ngOnInit() {
  }

  Register(businessOwner:BusinessOwner)
  {
    this.service.postBusinessOwner(businessOwner)
    .subscribe(data=>{
      alert("Register successfully");
      this.router.navigate(["listBusinessOwner"])
    })
  }
}
