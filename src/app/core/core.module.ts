import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Http } from '@angular/http';

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from '../layout/header/header.component';
import { TopnavComponent } from '../layout/topnav/topnav.component';
import { CoreService } from './core.service';

export function translateFactory(http: Http) {
  return  new TranslateStaticLoader(http, '/assets/i18n', '.json');
}

@NgModule({
    imports: [
        RouterModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: translateFactory,
            deps: [Http]
        }),
        NgbModule.forRoot()
    ],
    exports: [
        HeaderComponent,
        TopnavComponent
    ],
    declarations: [
        HeaderComponent,
        TopnavComponent
    ],
    providers: [CoreService],
})
export class CoreModule {
    // prevent reimport of the CoreModule
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
            'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
