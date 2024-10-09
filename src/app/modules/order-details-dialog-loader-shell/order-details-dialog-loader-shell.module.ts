import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { OrderDetailsDialogLoaderShellComponent } from "./order-details-dialog-loader-shell.component";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OrderDetailsDialogLoaderShellRoutingModule } from "./order-details-dialog-loader-shell-routing.module";
import { WindowDialogService } from "@grenzebachdigital/visu-compose/window-dialog";
import { OrderDetailsDialogShellComponent } from "../order-details-dialog-shell/order-details-dialog-shell.component";

@NgModule({
  declarations: [OrderDetailsDialogLoaderShellComponent],
  imports: [
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    CommonModule,
    OrderDetailsDialogLoaderShellRoutingModule,
    OrderDetailsDialogShellComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WindowDialogService]
})
export class OrderDetailsDialogLoaderShellModule { }
