import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockAreaSpecialComponent } from './block-area-special.component';

describe('BlockAreaSpecialComponent', () => {
  let component: BlockAreaSpecialComponent;
  let fixture: ComponentFixture<BlockAreaSpecialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockAreaSpecialComponent]
    });
    fixture = TestBed.createComponent(BlockAreaSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
