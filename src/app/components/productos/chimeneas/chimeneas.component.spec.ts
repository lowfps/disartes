import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChimeneasComponent } from './chimeneas.component';

describe('ChimeneasComponent', () => {
  let component: ChimeneasComponent;
  let fixture: ComponentFixture<ChimeneasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChimeneasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChimeneasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
