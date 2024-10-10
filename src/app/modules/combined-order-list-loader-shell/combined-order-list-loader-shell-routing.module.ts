import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombinedOrderListLoaderShellComponent } from "./combined-order-list-loader-shell.component";

const routes: Routes = [
  { path: '', component: CombinedOrderListLoaderShellComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CombinedOrderListLoaderShellRoutingModule {}
