import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './BusinessOwner/list/list.component';
import { RegisterComponent } from './BusinessOwner/register/register.component';
import { UpdateComponent } from './BusinessOwner/update/update.component';


const routes: Routes = [
  {path: 'listBusinessOwner',component:ListComponent},
  {path: 'registerBusinessOwner',component:RegisterComponent},
  {path: 'updateBusinessOwner',component:UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
