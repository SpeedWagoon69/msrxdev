import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPreview } from './dashboard-preview';

describe('DashboardPreview', () => {
  let component: DashboardPreview;
  let fixture: ComponentFixture<DashboardPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPreview],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardPreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
