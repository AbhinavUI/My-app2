import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpiPaymentComponent } from './upi-payment/upi-payment.component';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { NetBankingComponent } from './net-banking/net-banking.component';

const routes: Routes = [
  {path: '', component: UpiPaymentComponent},
  {path: 'upi-payment', component: UpiPaymentComponent},
  {path: 'card-payment', component: CardPaymentComponent},
  {path: 'net-banking', component: NetBankingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
