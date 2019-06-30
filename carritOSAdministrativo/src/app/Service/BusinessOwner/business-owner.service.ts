import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { BusinessOwner } from 'src/app/model/business-owner';
@Injectable({
  providedIn: 'root'
})
export class BusinessOwnerService {

  
  private baseUrl ='https://carritos-backend.herokuapp.com/buisnessOwners'


  constructor(private http:HttpClient) { }

  getBusinessOwnerId(id:number){
    return this.http.get<BusinessOwner>(`${this.baseUrl}/${id}`);
  }

  postBusinessOwner(bussineOwner:BusinessOwner):Observable<Object>{
    return this.http.post<BusinessOwner>(`${this.baseUrl}`,bussineOwner);
  }

  putBusinessOwner(bussineOwner:BusinessOwner){
    return this.http.put<BusinessOwner>(this.baseUrl+"/"+bussineOwner.id,bussineOwner);
  }
  deleteBusinessOwner(id:number):Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
  }
  getAllBusinessOwner(){
    return this.http.get<BusinessOwner[]>(`${this.baseUrl}`);
  }
}
