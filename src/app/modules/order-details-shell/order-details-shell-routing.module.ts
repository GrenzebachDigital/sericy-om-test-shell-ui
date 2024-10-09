import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailsShellComponent } from "./order-details-shell.component";

const routes: Routes = [
  { path: '', component: OrderDetailsShellComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderDetailsShellRoutingModule {}
