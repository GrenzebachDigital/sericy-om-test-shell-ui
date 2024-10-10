import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsDialogLoaderShellComponent } from './order-details-dialog-loader-shell.component';

describe('OrderDetailsDialogLoaderShellComponent', () => {
  let component: OrderDetailsDialogLoaderShellComponent;
  let fixture: ComponentFixture<OrderDetailsDialogLoaderShellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderDetailsDialogLoaderShellComponent]
    });
    fixture = TestBed.createComponent(OrderDetailsDialogLoaderShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
