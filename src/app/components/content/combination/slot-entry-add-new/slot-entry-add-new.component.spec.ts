import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotEntryAddNewComponent } from './slot-entry-add-new.component';

describe('SlotEntryAddNewComponent', () => {
  let component: SlotEntryAddNewComponent;
  let fixture: ComponentFixture<SlotEntryAddNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotEntryAddNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotEntryAddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
