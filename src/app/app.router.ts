import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './ui/pages/home-page/home-page.component';
import { SocialNetworksPageComponent } from './ui/pages/social-networks-page/social-networks-page.component';
import { ConnectivityPageComponent } from './ui/pages/connectivity-page/connectivity-page.component';
import { CommunicationPageComponent } from './ui/pages/communication-page/communication-page.component';
import { PhotographyPageComponent } from './ui/pages/photography-page/photography-page.component';
import { OfficePageComponent } from './ui/pages/office-page/office-page.component';
import { FinancesPageComponent } from './ui/pages/finances-page/finances-page.component';
import { LoginPageComponent } from './ui/pages/login-page/login-page.component';
import { ProfilePageComponent } from './ui/pages/profile-page/profile-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'professionnel', component: HomePageComponent },
    { path: 'reseaux-sociaux', component: SocialNetworksPageComponent },
    { path: 'connectivite/telephone', component: ConnectivityPageComponent },
    { path: 'communication', component: CommunicationPageComponent },
    { path: 'finance', component: FinancesPageComponent },
    { path: 'photographie', component: PhotographyPageComponent },
    { path: 'bureautique', component: OfficePageComponent },
    { path: 'connexion', component: LoginPageComponent },
    { path: 'profil', component: ProfilePageComponent },
    { path: '**', component: HomePageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }
