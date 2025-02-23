import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HirdeteskezelesComponent } from './hirdeteskezeles.component';

describe('HirdeteskezelesComponent', () => {
  let component: HirdeteskezelesComponent;
  let fixture: ComponentFixture<HirdeteskezelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HirdeteskezelesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HirdeteskezelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
