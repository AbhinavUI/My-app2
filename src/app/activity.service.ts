import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private _httpClient:HttpClient) { }

  getActivities():Observable<any>{
    return this._httpClient.get("https://www.boredapi.com/api/activity");
  }
}
