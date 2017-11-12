import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinationListComponent } from './combination-list.component';

describe('CombinationListComponent', () => {
  let component: CombinationListComponent;
  let fixture: ComponentFixture<CombinationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombinationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
