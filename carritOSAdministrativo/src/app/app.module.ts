import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ListComponent } from './BusinessOwner/list/list.component';
import { RegisterComponent } from './BusinessOwner/register/register.component';
import { DeleteComponent } from './BusinessOwner/delete/delete.component';
import { UpdateComponent } from './BusinessOwner/update/update.component'
import {BusinessOwnerService} from '../app/Service/BusinessOwner/business-owner.service'
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    RegisterComponent,
    DeleteComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BusinessOwnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
