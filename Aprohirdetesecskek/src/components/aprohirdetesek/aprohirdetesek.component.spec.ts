import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprohirdetesekComponent } from './aprohirdetesek.component';

describe('AprohirdetesekComponent', () => {
  let component: AprohirdetesekComponent;
  let fixture: ComponentFixture<AprohirdetesekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AprohirdetesekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprohirdetesekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
