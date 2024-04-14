import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankloginComponent } from './banklogin.component';

describe('BankloginComponent', () => {
  let component: BankloginComponent;
  let fixture: ComponentFixture<BankloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankloginComponent]
    });
    fixture = TestBed.createComponent(BankloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
