import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetworksPageComponent } from './social-networks-page.component';

describe('SocialNetworksPageComponent', () => {
  let component: SocialNetworksPageComponent;
  let fixture: ComponentFixture<SocialNetworksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialNetworksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialNetworksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
