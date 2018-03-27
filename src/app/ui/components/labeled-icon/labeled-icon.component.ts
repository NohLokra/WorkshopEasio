import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-labeled-icon',
    templateUrl: './labeled-icon.component.html',
    styleUrls: ['./labeled-icon.component.scss']
})
export class LabeledIconComponent implements OnInit {
    @Input()
    icon: String;

    @Input()
    label: String;

    constructor() {

    }

    ngOnInit() {
        
    }

}
