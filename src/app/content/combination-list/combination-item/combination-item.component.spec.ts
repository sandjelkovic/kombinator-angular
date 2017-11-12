import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinationItemComponent } from './combination-item.component';

describe('CombinationItemComponent', () => {
  let component: CombinationItemComponent;
  let fixture: ComponentFixture<CombinationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombinationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
