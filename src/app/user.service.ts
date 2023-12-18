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

  // This is to get data from "API"
  getUsers():Observable<any>{
    return this._httpClient.get(this.baseUrl);
  }

  // This is to view full details of a user in separate component/page. That will be identified by using "ID"
  getUser(id:number):Observable<any>{
    return this._httpClient.get(this.baseUrl+"/"+id);
  }

  // This is for "search bar"
  getFilteredUsers(term:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?filter="+term);
  }

  // Sorting method
  getSortedUsers(column:string,order:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?sortBy="+column+"&order="+order);
  }

  // This is for "Pagination"
  getPagedUsers(pageno:number):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?limit=10&page="+pageno);
  }

  // getByID(iD:any):Observable<any>{
  //   return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student"+iD);
  // }

  // This is for "deleting" an user with the reference of ID
  deleteUsers(id:string):Observable<any>{
    return this._httpClient.delete(this.baseUrl+"/"+id);
  }


  createUser(data:any):Observable<any>{
    return this._httpClient.post(this.baseUrl+"/",data);
  }

  // This is to edit an user by using its "ID"
  editUser(id:number,data:any):Observable<any>{
    return this._httpClient.put(this.baseUrl+"/"+id,data);
  }
}
