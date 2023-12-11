import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // We can store an API in this variable and can use all over the file with "baseUrl"
  private baseUrl:string = "https://6128991386a213001729f9df.mockapi.io/test/v1/student";

  constructor(private _httpClient:HttpClient) { }

  getUsers():Observable<any>{
    return this._httpClient.get(this.baseUrl);
  }

  getFilteredUsers(term:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?filter="+term);
  }

  getSortedUsers(column:string,order:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?sortBy="+column+"&order="+order);
  }

  getPagedUsers(pageno:number):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?limit=10&page="+pageno);
  }

  // getByID(iD:any):Observable<any>{
  //   return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student"+iD);
  // }

  deleteUsers(id:string):Observable<any>{
    return this._httpClient.delete(this.baseUrl+"/"+id);
  }

  createUser(data:any):Observable<any>{
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/student/",data);
  }
}
