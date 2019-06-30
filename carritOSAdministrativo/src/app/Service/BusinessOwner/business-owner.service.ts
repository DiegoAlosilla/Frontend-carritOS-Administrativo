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

  getBusinessOwner(id:number):Observable<Object>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  postBusinessOwner(bussineOwner:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,bussineOwner);
  }

  putBusinessOwner(id:number,value:any):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,value);
  }
  deleteBusinessOwner(id:number):Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
  }
  getAllBusinessOwner(){
    return this.http.get<BusinessOwner[]>(`${this.baseUrl}`);
  }
}
