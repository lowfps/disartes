import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YeseriaComponent } from './yeseria.component';

describe('YeseriaComponent', () => {
  let component: YeseriaComponent;
  let fixture: ComponentFixture<YeseriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YeseriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YeseriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
