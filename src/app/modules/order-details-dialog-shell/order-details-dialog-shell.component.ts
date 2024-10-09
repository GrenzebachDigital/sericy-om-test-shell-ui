import { Component, EventEmitter, Inject, NgZone, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { CommonModule } from "@angular/common";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { WindowDialogComponent, WindowDialogModule } from "@grenzebachdigital/visu-compose/window-dialog";
import { DynamicFederationLoaderModule } from "@grenzebachdigital/visu-compose/module-federation";
import {
  DynamicComponentInputs,
  DynamicComponentOutputs,
  DynamicFederationLoaderModel
} from "@grenzebachdigital/visu-compose/core";
import { Subject, takeUntil } from "rxjs";

/*
* This is a sample shell component that can act as reference for teams who want to use exposed order details component in their project.
* NOTE: it is left to the users of the exposed order details component whether to show it as window dialog OR normal page, therefore, the implementation of
* the template will differ a little. For using it within a window dialog use commented code instead.
* */

@Component({
  selector: 'om-order-details-dialog-shell',
  templateUrl: './order-details-dialog-shell.component.html',
  styleUrls: ['./order-details-dialog-shell.component.scss'],
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    MatProgressBarModule,
    MatDialogModule,
    MatButtonModule,
    WindowDialogModule,
    DynamicFederationLoaderModule
  ]
})
export class OrderDetailsDialogShellComponent extends WindowDialogComponent implements OnInit, OnDestroy {
  public inputs: DynamicComponentInputs = {};

  private orderNameEmitter = new EventEmitter<string>();
  private unsubscribe$ = new Subject<void>();
  orderName = 'Order Details';

  public outputHandlers: DynamicComponentOutputs = {
    orderNameEmitter: this.orderNameEmitter
  };

  public moduleFederationLoaderConfiguration = {
    remoteEntryUrl: `http://localhost:4200/sericy-om-orders-manager-ui/remoteEntryExposedOrderDetailsModule.js`,
    moduleClassName: 'ExposedOrderDetailsModule',
    componentClassName: 'exposedOrderDetailsComponent',
  } as DynamicFederationLoaderModel;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { orderId: number },
    renderer: Renderer2,
    ngZone: NgZone,
    dialogRef: MatDialogRef<OrderDetailsDialogShellComponent>) {
    super(renderer, ngZone, dialogRef);
    this.inputs = { orderId : data.orderId };
  }

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
