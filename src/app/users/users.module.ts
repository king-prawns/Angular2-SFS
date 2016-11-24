import { NgModule } from '@angular/core';

import { UsersRoutingModule, routedComponents } from './users.routing';
import { SharedModule } from '../shared/shared.module';
import { UsersService } from './users.service';

@NgModule({
    imports: [
        UsersRoutingModule,
        SharedModule
    ],
    declarations: [routedComponents],
    providers: [UsersService]
})
export class UsersModule { }
