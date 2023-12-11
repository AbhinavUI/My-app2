import { Component } from '@angular/core';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent {
  
  public activities:any = { };

  constructor(private _activitiesService:ActivityService){
    _activitiesService.getActivities().subscribe(
      (data:any)=>{
        this.activities = data;
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )
  }

  refresh(){
    this._activitiesService.getActivities().subscribe(
      (data:any)=>{
        this.activities = data;
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )
  }
}
