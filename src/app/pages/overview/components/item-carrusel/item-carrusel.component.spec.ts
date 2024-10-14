import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCarruselComponent } from './item-carrusel.component';

describe('ItemCarruselComponent', () => {
  let component: ItemCarruselComponent;
  let fixture: ComponentFixture<ItemCarruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCarruselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
