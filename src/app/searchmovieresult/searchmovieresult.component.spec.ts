import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchmovieresultComponent } from './searchmovieresult.component';

describe('SearchmovieresultComponent', () => {
  let component: SearchmovieresultComponent;
  let fixture: ComponentFixture<SearchmovieresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchmovieresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchmovieresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
