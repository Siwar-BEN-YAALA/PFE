import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheDeScolariteComponent } from './fiche-de-scolarite.component';

describe('FicheDeScolariteComponent', () => {
  let component: FicheDeScolariteComponent;
  let fixture: ComponentFixture<FicheDeScolariteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheDeScolariteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheDeScolariteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
