import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* App Root */
import { AppComponent } from './app.component';
/* Features Modules */
import { UsersModule } from './users/users.module';
import { CoreModule } from './core/core.module';
/* Routing Modules */
import { AppRoutingModule, routedComponents } from './app.routing';

@NgModule({
    imports: [ // is used to import supporting modules
        BrowserModule,
        UsersModule,
        CoreModule,
        AppRoutingModule,
    ],
    declarations: [ // is used to declare components
        // Everything inside declarations knows each other
        AppComponent,
        routedComponents
    ],
    providers: [], // is used to inject the services required by components, directives, pipes in our module.
    bootstrap: [AppComponent]
})
export class AppModule { }
