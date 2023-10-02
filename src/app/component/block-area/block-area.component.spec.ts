import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockAreaComponent } from './block-area.component';

describe('BlockAreaComponent', () => {
  let component: BlockAreaComponent;
  let fixture: ComponentFixture<BlockAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockAreaComponent]
    });
    fixture = TestBed.createComponent(BlockAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
