import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from 'ng2-translate';

import { HighlightDirective } from './highlight.directive';
import { OccInObjectPipe } from './occ-in-object.pipe';

@NgModule({
    imports: [
    ],
    exports: [
        HighlightDirective,
        OccInObjectPipe,
        CommonModule,
        FormsModule,
        TranslateModule
    ],
    declarations: [
        HighlightDirective,
        OccInObjectPipe
    ],
    providers: []
})
export class SharedModule { }
