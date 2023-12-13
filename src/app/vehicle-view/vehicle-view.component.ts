import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-view',
  templateUrl: './vehicle-view.component.html',
  styleUrls: ['./vehicle-view.component.scss']
})
export class VehicleViewComponent {

  public vehicle:any = {};

  constructor(private _activatedRoute: ActivatedRoute, private _vehicleService: VehicleService){

    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        _vehicleService.getVehicles().subscribe(
          (data:any)=>{
            this.vehicle = data;
          },
          (err:any)=>{
            alert("Internal server error");
          }
        )
      }
    )
  }
}
