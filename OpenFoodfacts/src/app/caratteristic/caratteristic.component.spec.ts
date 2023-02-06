import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaratteristicComponent } from './caratteristic.component';

describe('CaratteristicComponent', () => {
  let component: CaratteristicComponent;
  let fixture: ComponentFixture<CaratteristicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaratteristicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaratteristicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
