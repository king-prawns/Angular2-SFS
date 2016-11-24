import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/core';

import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
  animations: [
      trigger('visibilityChanged', [
          state('show' , style({
              opacity: 1,
              transform: 'scale(1.0)'
          })), // true
          state('hide', style({
              opacity: 0,
              transform: 'scale(0.0)'
          })), // false
          transition('show => hide', animate('300ms')), // 1 => 0
          transition('hide => show', animate('400ms')) // 0 => 1
      ]),
    ]
})
export class TopnavComponent implements OnInit {
    isVisibleLang: string = 'hide'; // boolean = false;
    
    constructor(
        private translate: TranslateService) {}

    ngOnInit() {
    }
    
    changeLang(lang) {
        this.translate.use(lang);
    }
    
    toggleVisibility() {
        this.isVisibleLang = this.isVisibleLang === 'hide' ? 'show' : 'hide'; // !this.isVisibleLang;
    }
}
