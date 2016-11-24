import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';
import { TodosComponent } from './user/todos/todos.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/users' },
    { path: 'users', component: UsersComponent },
    { path: 'user/:id', component: UserComponent },
    { path: 'user/:id/todos', component: TodosComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UsersRoutingModule { }

export const routedComponents = [UsersComponent, UserComponent, TodosComponent];
