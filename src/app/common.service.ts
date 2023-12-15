import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  public count:number = 0;
  // For the common service we will use "SUBJECT" feature instead of "Observable"
  public countSub: BehaviorSubject<any> = new BehaviorSubject(0);

  getValue(){
    return this.countSub.asObservable();
  }

  setValue(){
    this.count++;
    this.countSub.next(this.count);
  }
}
