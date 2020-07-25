import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotLoggedHomepageComponent } from './not-logged-homepage.component';

describe('NotloggedhomepageComponent', () => {
  let component: NotLoggedHomepageComponent;
  let fixture: ComponentFixture<NotLoggedHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotLoggedHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotLoggedHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
