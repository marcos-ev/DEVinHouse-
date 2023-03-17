import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutfullScreenComponent } from './layoutfull-screen.component';

describe('LayoutfullScreenComponent', () => {
  let component: LayoutfullScreenComponent;
  let fixture: ComponentFixture<LayoutfullScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutfullScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutfullScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
