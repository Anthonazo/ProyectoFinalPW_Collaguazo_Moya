import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenCompletadaComponent } from './orden-completada.component';

describe('OrdenCompletadaComponent', () => {
  let component: OrdenCompletadaComponent;
  let fixture: ComponentFixture<OrdenCompletadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdenCompletadaComponent]
    });
    fixture = TestBed.createComponent(OrdenCompletadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
