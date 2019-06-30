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
  ListBusinessOwner(){
    this.router.navigate(["listBusinessOwner"]);
  }
  RegisterBusinessOwner(){
    this.router.navigate(["registerBusinessOwner"]);
  }
}
