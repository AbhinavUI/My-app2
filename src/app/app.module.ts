import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarksComponent } from './marks/marks.component';
import { PipesComponent } from './pipes/pipes.component';
import { EventsComponent } from './events/events.component';
import { CarsComponent } from './cars/cars.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountsComponent } from './accounts/accounts.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { EmailsComponent } from './emails/emails.component';
import { ActivitiesComponent } from './activities/activities.component';
import { PhotosComponent } from './photos/photos.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { UserFormComponent } from './user-form/user-form.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { UserViewComponent } from './user-view/user-view.component';
import { AccountViewComponent } from './account-view/account-view.component';
import { VehicleViewComponent } from './vehicle-view/vehicle-view.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ItemsComponent } from './items/items.component';
import { CartComponent } from './cart/cart.component';
import { NavComponent } from './nav/nav.component';
import { RatingParentComponent } from './rating-parent/rating-parent.component';
import { RatingChildComponent } from './rating-child/rating-child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutModule } from './about/about.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    StructuraldirectivesComponent,
    PagenotfoundComponent,
    MarksComponent,
    PipesComponent,
    EventsComponent,
    CarsComponent,
    ProductsComponent,
    UsersComponent,
    AccountsComponent,
    VehiclesComponent,
    FlipkartComponent,
    EmailsComponent,
    ActivitiesComponent,
    PhotosComponent,
    UserdetailsComponent,
    CreateUserComponent,
    CreateAccountComponent,
    CreateVehicleComponent,
    UserFormComponent,
    StudentFormComponent,
    UserViewComponent,
    AccountViewComponent,
    VehicleViewComponent,
    ParentComponent,
    ChildComponent,
    ItemsComponent,
    CartComponent,
    NavComponent,
    RatingParentComponent,
    RatingChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AboutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 };
