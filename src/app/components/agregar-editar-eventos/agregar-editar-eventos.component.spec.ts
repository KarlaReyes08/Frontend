import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarEventosComponent } from './agregar-editar-eventos.component';

describe('AgregarEditarEventosComponent', () => {
  let component: AgregarEditarEventosComponent;
  let fixture: ComponentFixture<AgregarEditarEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarEditarEventosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
