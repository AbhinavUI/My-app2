import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdetailService {

  constructor(private _httpClient:HttpClient) { }

  getUserdetails():Observable<any>{
    return this._httpClient.get("https://dummyjson.com/users");
  }
}
