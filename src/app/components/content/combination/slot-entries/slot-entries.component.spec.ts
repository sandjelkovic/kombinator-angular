import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotEntriesComponent } from './slot-entries.component';

describe('SlotEntriesComponent', () => {
  let component: SlotEntriesComponent;
  let fixture: ComponentFixture<SlotEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
