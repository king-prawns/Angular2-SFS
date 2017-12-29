import { Component, OnInit } from '@angular/core';
import { trigger, state, style } from '@angular/core';

import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit() {}

  changeLang(lang) {
    this.translate.use(lang);
  }
}
