import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import {
  DynamicComponentInputs,
  DynamicComponentOutputs,
  DynamicFederationLoaderModel
} from "@grenzebachdigital/visu-compose/core";
import { Subject, takeUntil } from "rxjs";

/*
* This is a sample shell component that can act as reference for teams who want to use exposed order details component in their project.
* This component showcases the loading of order details via routing use case.
* NOTE: it is left to the users of the exposed order details component whether to show it as window dialog OR normal page, therefore, the implementation of
* the template will differ a little. For using it within a window dialog use commented code instead.
* */

@Component({
  selector: 'om-order-details-shell',
  templateUrl: './order-details-shell.component.html'
})
export class OrderDetailsShellComponent implements OnInit, OnDestroy {
  public inputs: DynamicComponentInputs = {
    //sample order ID, replace with correct one
    orderId: 316
  };

  private orderNameEmitter = new EventEmitter<string>();
  private unsubscribe$ = new Subject<void>();
  orderName = 'Order Details';

  public outputHandlers: DynamicComponentOutputs = {
    orderNameEmitter: this.orderNameEmitter
  };

  public moduleFederationLoaderConfiguration = {
    //have relative URL here instead, or for testing point to correct env
    remoteEntryUrl: 'http://localhost:4200/sericy-om-orders-manager-ui/remoteEntryExposedOrderDetailsModule.js',
    moduleClassName: 'ExposedOrderDetailsModule',
    componentClassName: 'exposedOrderDetailsComponent',
  } as DynamicFederationLoaderModel;

  ngOnInit() {
    this.orderNameEmitter.pipe(takeUntil(this.unsubscribe$)).subscribe(orderName => {
      if (orderName) {
        this.orderName = orderName;
      }
      else {
        // The consumers of this component may want to show hard coded static string e.g. "Order details" that is translated on user language selection change
        // in case order name is null or undefined. This can happen in error scenarios such as OM API not reachable OR order not found.
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
