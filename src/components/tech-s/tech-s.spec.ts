import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechS } from './tech-s';

describe('TechS', () => {
  let component: TechS;
  let fixture: ComponentFixture<TechS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechS],
    }).compileComponents();

    fixture = TestBed.createComponent(TechS);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
