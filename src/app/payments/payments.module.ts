import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { UpiPaymentComponent } from './upi-payment/upi-payment.component';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { NetBankingComponent } from './net-banking/net-banking.component';


@NgModule({
  declarations: [
    UpiPaymentComponent,
    CardPaymentComponent,
    NetBankingComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
