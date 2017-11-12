import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotEntryComponent } from './slot-entry.component';

describe('SlotEntryComponent', () => {
  let component: SlotEntryComponent;
  let fixture: ComponentFixture<SlotEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
