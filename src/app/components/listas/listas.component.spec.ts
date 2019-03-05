import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasPage } from './listas.page';

describe('ListasPage', () => {
  let component: ListasPage;
  let fixture: ComponentFixture<ListasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
