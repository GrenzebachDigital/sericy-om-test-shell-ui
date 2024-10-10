import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailsDialogShellComponent } from "./order-details-dialog-shell.component";

const routes: Routes = [
  { path: '', component: OrderDetailsDialogShellComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderDetailsDialogShellRoutingModule {}
