import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetAuthentificationComponent } from './set-authentification.component';

describe('SetAuthentificationComponent', () => {
  let component: SetAuthentificationComponent;
  let fixture: ComponentFixture<SetAuthentificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetAuthentificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetAuthentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
