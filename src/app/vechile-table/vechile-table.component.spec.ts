import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VechileTableComponent } from './vechile-table.component';

describe('VechileTableComponent', () => {
  let component: VechileTableComponent;
  let fixture: ComponentFixture<VechileTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VechileTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VechileTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
