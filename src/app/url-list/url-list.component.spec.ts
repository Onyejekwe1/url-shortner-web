import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlListComponent as UrlListComponent } from './url-list.component';

describe('EmployeeListComponent', () => {
  let component: UrlListComponent;
  let fixture: ComponentFixture<UrlListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
