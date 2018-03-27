import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectivityPageComponent } from './connectivity-page.component';

describe('ConnectivityPageComponent', () => {
  let component: ConnectivityPageComponent;
  let fixture: ComponentFixture<ConnectivityPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectivityPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectivityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
