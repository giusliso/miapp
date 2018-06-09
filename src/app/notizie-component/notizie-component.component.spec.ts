import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotizieComponentComponent } from './notizie-component.component';

describe('NotizieComponentComponent', () => {
  let component: NotizieComponentComponent;
  let fixture: ComponentFixture<NotizieComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotizieComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotizieComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
