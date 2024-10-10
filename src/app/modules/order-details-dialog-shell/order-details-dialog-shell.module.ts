import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  OrderDetailsDialogShellRoutingModule
} from "./order-details-dialog-shell-routing.module";
import { WindowDialogModule, WindowDialogService } from "@grenzebachdigital/visu-compose/window-dialog";
import { TranslateModule } from "@ngx-translate/core";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { DynamicFederationLoaderModule } from "@grenzebachdigital/visu-compose/module-federation";

@NgModule({
  declarations: [],
  imports: [
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    CommonModule,
    OrderDetailsDialogShellRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    MatProgressBarModule,
    WindowDialogModule,
    DynamicFederationLoaderModule
  ],
  providers: [WindowDialogService]
})
export class OrderDetailsDialogShellModule { }
