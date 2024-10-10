import { Component, Injector } from '@angular/core';
import { MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { WindowDialogService } from "@grenzebachdigital/visu-compose/window-dialog";
import { OrderDetailsDialogShellComponent } from "../order-details-dialog-shell/order-details-dialog-shell.component";

@Component({
  selector: 'om-order-details-dialog-loader-shell',
  templateUrl: './order-details-dialog-loader-shell.component.html',
  styleUrls: ['./order-details-dialog-loader-shell.component.scss']
})
export class OrderDetailsDialogLoaderShellComponent {
  orderId: number;
  readonly dialogWidth = '968px';
  readonly dialogHeight = '600px';
  readonly dialogMinWidth = '968px';
  readonly dialogMinHeight = '500px';

  constructor(private windowDialog: WindowDialogService, public hostInjector: Injector) {
    this.orderId = 1;
  }

  onSubmit() {
    const dialogRef: MatDialogRef<OrderDetailsDialogShellComponent> = this.windowDialog.open<OrderDetailsDialogShellComponent>(OrderDetailsDialogShellComponent, {
      width: this.dialogWidth,
      height: this.dialogHeight,
      minWidth: this.dialogMinWidth,
      minHeight: this.dialogMinHeight,
      data: {
        orderId: this.orderId
      }
    } as MatDialogConfig,
      this.hostInjector);
    dialogRef.afterClosed().subscribe({
      next: () => {
        console.log('Dialog closed');
      }
    });
  }
}
