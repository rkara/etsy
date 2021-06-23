import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCallbackComponent } from './callback.component';

describe('AppCallbackComponent', () => {
  let component: AppCallbackComponent;
  let fixture: ComponentFixture<AppCallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCallbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
