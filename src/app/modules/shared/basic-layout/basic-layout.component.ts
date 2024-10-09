import { Component } from '@angular/core';
import { MAINMENUITEMS } from './mock-main-menu-items';

@Component({
    templateUrl: './basic-layout.template.html'
})

export class BasicLayoutComponent {
    menu = MAINMENUITEMS;
}
