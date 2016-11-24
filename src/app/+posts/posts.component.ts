import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { PostsService } from './posts.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
    posts: Array<Object>;
    errorMessage: string;

    constructor(private postService: PostsService, private titleService: Title) { }

    ngOnInit() {
        this.titleService.setTitle('Post List');
        this.getPosts();
    }

    getPosts() {
        this.postService.getPosts()
        .subscribe(
        posts => {
            this.posts = posts;
        },
        error => this.errorMessage = error);
    }
}
