import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../users.service';

declare var customWidget: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    user: Object = {};
    userId: number;
    errorMessage: string;

    constructor(private usersService: UsersService, private router: ActivatedRoute, private titleService: Title) { }

    ngOnInit() {
        this.titleService.setTitle('User Detail');
        this.router.params.forEach(
            (params) => {
                this.userId = +params['id'];
            }
        );
        this.getUser(this.userId);
    }

    onSubmit() {
        this.updateUser();
    }

    getUser(id) {
        this.usersService.getUser(id)
        .subscribe(
            user => this.user = user,
            error => this.errorMessage = error
        );
    }

    updateUser() {
        this.usersService.updateUser(this.userId, this.user)
        .subscribe(
            user => console.log('user updated!'),
            error => this.errorMessage = error
        );
    }

    sayName(name: string, username: string) {
        customWidget.fullName(name, username);
    }
}
