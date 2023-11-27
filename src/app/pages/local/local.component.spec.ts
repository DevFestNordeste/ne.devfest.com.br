import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalComponent } from './local.component';

describe('LocalComponent', () => {
  let component: LocalComponent;
  let fixture: ComponentFixture<LocalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalComponent]
    });
    fixture = TestBed.createComponent(LocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
