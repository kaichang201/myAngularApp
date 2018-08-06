import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartsearchComponent } from './smartsearch.component';

describe('SmartsearchComponent', () => {
  let component: SmartsearchComponent;
  let fixture: ComponentFixture<SmartsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
