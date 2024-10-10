import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsShellComponent } from "./order-details-shell.component";
import { DynamicFederationLoaderModule } from "@grenzebachdigital/visu-compose/module-federation";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { TranslateModule } from "@ngx-translate/core";
import { OrderDetailsShellRoutingModule } from "./order-details-shell-routing.module";

@NgModule({
  declarations: [OrderDetailsShellComponent],
  imports: [
    DynamicFederationLoaderModule,
    MatButtonModule,
    MatDialogModule,
    TranslateModule,
    CommonModule,
    OrderDetailsShellRoutingModule
  ]
})
export class OrderDetailsShellModule { }
