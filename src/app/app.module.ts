import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { RoutingModule } from './app.router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './ui/pages/home-page/home-page.component';
import { NavbarComponent } from './ui/components/navbar/navbar.component';
import { SidebarItemComponent } from './ui/components/sidebar-item/sidebar-item.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { SocialNetworksPageComponent } from './ui/pages/social-networks-page/social-networks-page.component';
import { ConnectivityPageComponent } from './ui/pages/connectivity-page/connectivity-page.component';
import { CommunicationPageComponent } from './ui/pages/communication-page/communication-page.component';
import { FinancesPageComponent } from './ui/pages/finances-page/finances-page.component';
import { PhotographyPageComponent } from './ui/pages/photography-page/photography-page.component';
import { OfficePageComponent } from './ui/pages/office-page/office-page.component';
import { ProfilePageComponent } from './ui/pages/profile-page/profile-page.component';
import { LoginPageComponent } from './ui/pages/login-page/login-page.component';
import { LabeledIconComponent } from './ui/components/labeled-icon/labeled-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    SidebarItemComponent,
    SocialNetworksPageComponent,
    ConnectivityPageComponent,
    CommunicationPageComponent,
    FinancesPageComponent,
    PhotographyPageComponent,
    OfficePageComponent,
    ProfilePageComponent,
    LoginPageComponent,
    LabeledIconComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
