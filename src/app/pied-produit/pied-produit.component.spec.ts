import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedProduitComponent } from './pied-produit.component';

describe('PiedProduitComponent', () => {
  let component: PiedProduitComponent;
  let fixture: ComponentFixture<PiedProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiedProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiedProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
