import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SVGICONSComponent } from './svg-icons.component';

describe('SVGICONSComponent', () => {
  let component: SVGICONSComponent;
  let fixture: ComponentFixture<SVGICONSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SVGICONSComponent]
    });
    fixture = TestBed.createComponent(SVGICONSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
