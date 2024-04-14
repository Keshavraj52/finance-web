import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankdashComponent } from './bankdash.component';

describe('BankdashComponent', () => {
  let component: BankdashComponent;
  let fixture: ComponentFixture<BankdashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankdashComponent]
    });
    fixture = TestBed.createComponent(BankdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
