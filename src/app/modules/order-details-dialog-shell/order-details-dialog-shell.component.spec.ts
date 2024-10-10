import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsDialogShellComponent } from './order-details-dialog-shell.component';

describe('OrderDetailsDialogShellComponent', () => {
  let component: OrderDetailsDialogShellComponent;
  let fixture: ComponentFixture<OrderDetailsDialogShellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderDetailsDialogShellComponent]
    });
    fixture = TestBed.createComponent(OrderDetailsDialogShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
