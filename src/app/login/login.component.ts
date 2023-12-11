import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })

  // "_router" is used to navigate to dashboard after login page was successfull.
  constructor(private _loginService: LoginService, private _router:Router){}

  login(){
    console.log(this.loginForm);

    this._loginService.login(this.loginForm.value).subscribe(
      (data:any)=>{
        alert('Login Successfully');
        // Go to dashboard
        this._router.navigateByUrl('/dashboard');
        // Store
        localStorage.setItem("token",data.token);
      },
      (err:any)=>{
        alert('Invalid credentials');
      }
    )
  }

  // INTERPOLATION BINDING(Sending data from typescript to html)
  // public hello = 'Angular';


  // PROPERTY BINDING(Sending data from html to typescript)
  // public courseID = 123;


  // For BUTTON action
  // public alert = ' ';
  // onClick(){
  //   this.alert = 'Welcome';
  // }


  // To appear data typed in input, shows in the below line
  // public data = ' ';


  // Adding of two numbers
  // public num1 : number = 0;
  // public num2 : number = 0;
  // public result : number = 0;

  // sum(){
  //   this.result = this.num1 + this.num2
  // }
  

  // Rectangle Area & Perimeter
  // public num1 : number = 0;
  // public num2 : number = 0;
  // public result : number = 0

  // area(){
  //     this.result = this.num1*this.num2
  //    }

  // peri(){
  //     this.result = 2*(this.num1+this.num2)
  //     }   

  // Circle Area & Perimeter
  // public num1 : number = 0;
  // public result : number = 0

  // area(){
  //   this.result = 2*(this.num1*this.num1)
  //  }

  // peri(){
  //   this.result = 2*(3.14)*(this.num1)
  //   }   

  // BMI
  // public num1 : number = 0;
  // public num2 : number = 0;
  // public result : number = 0;

  // cal(){
  //   this.result = (this.num1)/((this.num2/100)*(this.num2/100));
  // }
}
