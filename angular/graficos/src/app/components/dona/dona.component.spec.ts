import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonaComponent } from './dona.component';

describe('DonaComponent', () => {
  let component: DonaComponent;
  let fixture: ComponentFixture<DonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
