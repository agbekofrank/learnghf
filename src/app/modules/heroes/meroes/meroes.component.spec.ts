import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeroesComponent } from './meroes.component';

describe('MeroesComponent', () => {
  let component: MeroesComponent;
  let fixture: ComponentFixture<MeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
