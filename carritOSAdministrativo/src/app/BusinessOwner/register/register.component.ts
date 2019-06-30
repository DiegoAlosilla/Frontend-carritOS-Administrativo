import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuisnessOwnerService } from 'src/app/Service/BuisnessOwner/buisness-owner.service';
import { BuisnessOwner } from 'src/app/model/buisness-owner';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  buisnessOwner:BuisnessOwner=new BuisnessOwner();
  constructor(private router:Router, private service:BuisnessOwnerService) { }

  ngOnInit() {
  }

  save()
  {
    this.service.postBuisnessOwner(this.buisnessOwner)
    .subscribe(data=>console.log(data),error=>console.log(error));
    this.buisnessOwner=new BuisnessOwner();
  }
  onSumit()
  {
    this.save();
  }
}
