import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { OrderDetailsDialogLoaderShellComponent } from "./order-details-dialog-loader-shell.component";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OrderDetailsDialogLoaderShellRoutingModule } from "./order-details-dialog-loader-shell-routing.module";
import { WindowDialogModule, WindowDialogService } from "@grenzebachdigital/visu-compose/window-dialog";
import { OrderDetailsDialogShellComponent } from "../order-details-dialog-shell/order-details-dialog-shell.component";
import { DynamicFederationLoaderModule } from "@grenzebachdigital/visu-compose/module-federation";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [OrderDetailsDialogLoaderShellComponent, OrderDetailsDialogShellComponent],
  imports: [
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    CommonModule,
    OrderDetailsDialogLoaderShellRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    WindowDialogModule,
    DynamicFederationLoaderModule,
    TranslateModule
  ],
  providers: [WindowDialogService]
})
export class OrderDetailsDialogLoaderShellModule { }
