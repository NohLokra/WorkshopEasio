import { Component, OnInit } from '@angular/core';
import { SidebarItem } from '../../../models/sidebar-item.model';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    isVisible = false;
    sidebarItems: SidebarItem[] = [{
        label: 'Proffessionnel',
        href: [
            '/'
        ],
        icon: 'fal fa-home'
    }, {
        label: 'Connectivité',
        href: [
            '/connectivite'
        ]
    }, {
        label: 'Communication',
        href: [
            '/communication'
        ]
    }, {
        label: 'Finance',
        href: [
            '/finance'
        ]
    }, {
        label: 'Photographie',
        href: [
            '/photographie'
        ]
    }, {
        label: 'Bureautique',
        href: [
            '/bureautique'
        ]
    }, {
        label: 'Réseaux sociaux',
        href: [
            '/reseaux-sociaux'
        ]
    }, {
        label: 'Connexion / inscription',
        href: [
            '/connexion'
        ]
    }];

    constructor() { }

    ngOnInit() {
    }

}
