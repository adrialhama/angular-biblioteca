import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarLibroComponent } from './borrar-libro.component';

describe('BorrarLibroComponent', () => {
  let component: BorrarLibroComponent;
  let fixture: ComponentFixture<BorrarLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarLibroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
