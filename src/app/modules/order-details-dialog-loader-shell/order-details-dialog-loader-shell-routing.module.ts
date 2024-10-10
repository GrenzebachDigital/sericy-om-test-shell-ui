import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailsDialogLoaderShellComponent } from "./order-details-dialog-loader-shell.component";

const routes: Routes = [
  { path: '', component: OrderDetailsDialogLoaderShellComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderDetailsDialogLoaderShellRoutingModule {}
