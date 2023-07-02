import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodapeAppComponent } from './rodape-app.component';

describe('RodapeAppComponent', () => {
  let component: RodapeAppComponent;
  let fixture: ComponentFixture<RodapeAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RodapeAppComponent]
    });
    fixture = TestBed.createComponent(RodapeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
