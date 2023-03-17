import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutwithMenuComponent } from './layoutwith-menu.component';

describe('LayoutwithMenuComponent', () => {
  let component: LayoutwithMenuComponent;
  let fixture: ComponentFixture<LayoutwithMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutwithMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutwithMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
