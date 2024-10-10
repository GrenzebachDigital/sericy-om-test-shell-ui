import { Component, EventEmitter } from '@angular/core';
import {
  DynamicFederationLoaderModel
} from "@grenzebachdigital/visu-compose/core";

@Component({
  selector: 'app-combined-order-list-loader-shell',
  templateUrl: './combined-order-list-loader-shell.component.html'
})
export class CombinedOrderListLoaderShellComponent {
  private orderNameEmitter = new EventEmitter<string>();

  public moduleFederationLoaderConfiguration = {
    //have relative URL here instead, or for testing point to correct env
    remoteEntryUrl: `http://localhost:4200/sericy-om-orders-manager-ui/remoteEntryExposedCombinedTableModule.js`,
    moduleClassName: 'ExposedCombinedOrderListModule',
    componentClassName: 'combinedOrderList',
  } as DynamicFederationLoaderModel;
}
