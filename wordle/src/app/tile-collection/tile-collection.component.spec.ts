import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileCollectionComponent } from './tile-collection.component';

describe('TileCollectionComponent', () => {
  let component: TileCollectionComponent;
  let fixture: ComponentFixture<TileCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
