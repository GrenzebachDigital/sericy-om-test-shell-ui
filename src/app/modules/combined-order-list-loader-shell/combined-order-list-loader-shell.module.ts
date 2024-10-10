import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";
import { DynamicFederationLoaderModule } from "@grenzebachdigital/visu-compose/module-federation";
import { CombinedOrderListLoaderShellRoutingModule } from "./combined-order-list-loader-shell-routing.module";
import { CombinedOrderListLoaderShellComponent } from "./combined-order-list-loader-shell.component";



@NgModule({
  declarations: [CombinedOrderListLoaderShellComponent],
  imports: [
    CommonModule,
    CombinedOrderListLoaderShellRoutingModule,
    TranslateModule,
    DynamicFederationLoaderModule
  ]
})
export class CombinedOrderListLoaderShellModule { }
