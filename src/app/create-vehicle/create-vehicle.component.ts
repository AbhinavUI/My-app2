import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.scss']
})
export class CreateVehicleComponent {

  public vehicleForm:FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    image: new FormControl()
  });

  public id:any = "";

  constructor(private _activatedRoute: ActivatedRoute ,private _vehicleService:VehicleService){

    _activatedRoute.params.subscribe(
      (data:any)=>{
        this.id = data.id;
        if(this.id){
          _vehicleService.getVehicle(data.id).subscribe(
            (data:any)=>{
              this.vehicleForm.patchValue(data);
            },
            (err:any)=>{
              alert("Internal server error");
            }
          )
        }
      }
    )
  }

  submit(){
    console.log(this.vehicleForm.value);

    if(this.id){
      // to edit
      this._vehicleService.editVehicle(this.id,this.vehicleForm.value).subscribe(
        (data:any)=>{
          alert("User updated successfully");
        },
        (err:any)=>{
          alert("Internal server error");
        }
      )
    }
    else{
      // to create
      this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
        (data:any)=>{
          alert("User created successfully");
        },
        (err:any)=>{
          alert("Internal server error");
        }
      )
    }

    
  }
}
