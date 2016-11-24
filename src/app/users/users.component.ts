import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { UsersService } from './users.service';

@Component({
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    people: Array<Object>; // Object[]
    errorMessage: string;

    constructor(private usersService: UsersService, private titleService: Title) { }

    ngOnInit() {
        this.titleService.setTitle('User List');
        this.getPeople();
    }

    getPeople() {
        this.usersService.getPeople()
            .subscribe(
            people => {
                this.people = people;
            },
            error => this.errorMessage = error);
    }

    trackByUser(index, user) {
        return user.id;
    }
    // only for dev test
    // get diagnostic() { return JSON.stringify(this.people)};
}
