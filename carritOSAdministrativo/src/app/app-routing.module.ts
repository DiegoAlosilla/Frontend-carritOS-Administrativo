import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './BusinessOwner/list/list.component';
import { RegisterComponent } from './BusinessOwner/register/register.component';
import { UpdateComponent } from './BusinessOwner/update/update.component';


const routes: Routes = [
  {path: 'listBuisnessOwner',component:ListComponent},
  {path: 'registerBuisnessOwner',component:RegisterComponent},
  {path: 'updateBuisnessOwner',component:UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
