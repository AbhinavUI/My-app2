import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MarksComponent } from './marks/marks.component';
import { PipesComponent } from './pipes/pipes.component';
import { EventsComponent } from './events/events.component';
import { CarsComponent } from './cars/cars.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
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
import { AuthenticationGuard } from './authentication.guard';
import { UserViewComponent } from './user-view/user-view.component';
import { AccountViewComponent } from './account-view/account-view.component';
import { VehicleViewComponent } from './vehicle-view/vehicle-view.component';
import { ParentComponent } from './parent/parent.component';
import { ItemsComponent } from './items/items.component';
import { CartComponent } from './cart/cart.component';
import { NavComponent } from './nav/nav.component';
import { RatingParentComponent } from './rating-parent/rating-parent.component';
import { AboutCompanyComponent } from './about/about-company/about-company.component';

const routes: Routes = [
  // General routing
  {path: 'login',component:LoginComponent},
  // Child routing
  {path: 'dashboard',canActivate:[AuthenticationGuard], component:DashboardComponent, children:[
      {path: 'structuraldirectives',component: StructuraldirectivesComponent},
      {path: 'marks', component: MarksComponent},
      {path: 'pipes', component: PipesComponent},
      {path: 'events', component: EventsComponent},
      {path: 'cars', component: CarsComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'users', component: UsersComponent},
      {path: 'accounts', component: AccountsComponent},
      {path: 'vehicles', component: VehiclesComponent},
      {path: 'flipkart', component: FlipkartComponent},
      {path: 'email', component: EmailsComponent},
      {path: 'activity', component: ActivitiesComponent},
      {path: 'photo', component: PhotosComponent},
      {path: 'userdetail', component: UserdetailsComponent},
      {path: 'create-user', component: CreateUserComponent},
      {path: 'create-account', component: CreateAccountComponent},
      {path: 'create-vehicle', component: CreateVehicleComponent},
      {path: 'user-form', component: UserFormComponent},
      {path: 'student-form', component: StudentFormComponent},
      {path: 'user-view/:id', component: UserViewComponent},
      {path: 'edit-user/:id', component: CreateUserComponent},
      {path: 'account-view/:id', component: AccountViewComponent},
      {path: 'edit-account/:id', component: CreateAccountComponent},
      {path: 'vehicle-view/:id', component: VehicleViewComponent},
      {path: 'edit-vehicle/:id', component: CreateVehicleComponent},
      {path: 'parent', component: ParentComponent},
      {path: 'items', component: ItemsComponent},
      {path: 'cart', component: CartComponent},
      {path: 'nav', component: NavComponent},
      {path: 'rating', component: RatingParentComponent},
      {path: 'about-company', component: AboutCompanyComponent},
      {path: 'payments',
        loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule)
      },
    ]},
  // Empty routing
  {path: '',component: LoginComponent},
  // Wildcard routing
  {path: '**',component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
