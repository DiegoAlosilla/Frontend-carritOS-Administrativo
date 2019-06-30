import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { BuisnessOwner } from 'src/app/model/buisness-owner';

@Injectable({
  providedIn: 'root'
})
export class BuisnessOwnerService {

  
  private baseUrl ='http://localhost:8080/buisnessOwners'


  constructor(private http:HttpClient) { }

  getBuisnessOwnerId(id:number){
    return this.http.get<BuisnessOwner>(`${this.baseUrl}/${id}`);
  }

  postBuisnessOwner(bussineOwner:Object):Observable<Object>{
    return this.http.post(this.baseUrl,bussineOwner);
  }

  putBuisnessOwner(bussineOwner:BuisnessOwner){
    return this.http.put<BuisnessOwner>(this.baseUrl+"/"+bussineOwner.id,bussineOwner);
  }
  deleteBuisnessOwner(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
  }
  getAllBuisnessOwner(){
    return this.http.get<BuisnessOwner[]>(`${this.baseUrl}`);
  }
}
