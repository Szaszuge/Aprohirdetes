import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KijelentkezesComponent } from './kijelentkezes.component';

describe('KijelentkezesComponent', () => {
  let component: KijelentkezesComponent;
  let fixture: ComponentFixture<KijelentkezesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KijelentkezesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KijelentkezesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
