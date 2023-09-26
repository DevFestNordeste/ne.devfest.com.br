import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParceriasComponent } from './parcerias.component';

describe('ParceriasComponent', () => {
  let component: ParceriasComponent;
  let fixture: ComponentFixture<ParceriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParceriasComponent]
    });
    fixture = TestBed.createComponent(ParceriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
