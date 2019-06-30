import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carritOSAdministrativo';

  constructor(private router:Router){}
  ListBuisnessOwner(){
    this.router.navigate(["listBuisnessOwner"]);
  }
  RegisterBuisnessOwner(){
    this.router.navigate(["registerBuisnessOwner"]);
  }
}
