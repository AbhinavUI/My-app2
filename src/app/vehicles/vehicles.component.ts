import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent {

  public vehicles:any = [];

  // Filter Method
  public term:string = "";

  // Sorting
  public column:string = "";
  public order:string = "";

  // Pagination
  public pageno:number = 0;

  constructor(private _vehiclesService:VehicleService){
    _vehiclesService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )
  }

  getFilteredVehicles(){
    this._vehiclesService.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  sort(){
    this._vehiclesService.getSortedVehicles(this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  pagination(){
    this._vehiclesService.getPagedVehicles(this.pageno).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  delete(id:string){
    this._vehiclesService.deleteVehicles(id).subscribe(
      (data:any)=>{
        alert("deleted successfully");
        location.reload();
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

}
