import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CascadasComponent } from './cascadas.component';

describe('CascadasComponent', () => {
  let component: CascadasComponent;
  let fixture: ComponentFixture<CascadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CascadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CascadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
