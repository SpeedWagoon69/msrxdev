import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLn } from './app-ln';

describe('AppLn', () => {
  let component: AppLn;
  let fixture: ComponentFixture<AppLn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppLn],
    }).compileComponents();

    fixture = TestBed.createComponent(AppLn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
