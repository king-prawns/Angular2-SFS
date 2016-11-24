import { NgModule } from '@angular/core';

import { PostsRoutingModule, routedComponents } from './posts.routing';
import { PostsService } from './posts.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        PostsRoutingModule,
        SharedModule
    ],
    declarations: [routedComponents],
    providers: [PostsService]
})
export class PostsModule { }
