import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoAppComponent } from './corpo-app.component';

describe('CorpoAppComponent', () => {
  let component: CorpoAppComponent;
  let fixture: ComponentFixture<CorpoAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorpoAppComponent]
    });
    fixture = TestBed.createComponent(CorpoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
