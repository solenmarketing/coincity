import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoincityComponent } from './coincity.component';

describe('CoincityComponent', () => {
  let component: CoincityComponent;
  let fixture: ComponentFixture<CoincityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoincityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoincityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
