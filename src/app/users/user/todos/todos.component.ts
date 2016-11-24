import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../../users.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {
    todos: Array<Object> = [];
    userId: number;
    errorMessage: string;

    constructor(private usersService: UsersService, private router: ActivatedRoute, private titleService: Title) { }

    ngOnInit() {
        this.titleService.setTitle('User\'s Todo');
        this.router.params.forEach(
            (params) => {
                this.userId = +params['id'];
            }
        );
        this.getTodos(this.userId);
    }

    getTodos(id) {
        this.usersService.getTodos(id)
        .subscribe(
            todos => this.todos = todos,
            error => this.errorMessage = error
        );
    }
}
