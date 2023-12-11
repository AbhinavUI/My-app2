import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent {

  public studentForm:FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    class: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(100)]),
    fatherName: new FormControl(),
    email: new FormControl(null, [Validators.required, Validators.email]),
    dob: new FormControl(),
    address: new FormGroup({
      addressLine: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      pincode: new FormControl(null, [Validators.required, Validators.min(100000), Validators.max(999999)]),
    }),
    marks: new FormArray([]),
    type: new FormControl(),
    busFee: new FormControl(null, [Validators.required, Validators.min(100), Validators.max(20000)]),
    hostelFee: new FormControl(null, [Validators.required, Validators.min(100), Validators.max(30000)])
  })

  get marksFormArray(){
    return this.studentForm.get('marks') as FormArray;
  }

  add(){
    this.marksFormArray.push(
      new FormGroup({
        class: new FormControl(),
        year: new FormControl(),
        percentage: new FormControl(null, [Validators.required])
      })
    )
  }

  delete(i:number){
    this.marksFormArray.removeAt(i);
  }

  submit(){
    console.log(this.studentForm);
  }
}
