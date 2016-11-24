import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { CoreService } from '../core/core.service';

@Injectable()
export class PostsService {
    constructor(private http: Http, private hS: CoreService) { }

    getPosts() {
        return this.http.get(this.hS.baseUrl + '/posts')
            .map(this.hS.extractData)
            .catch(this.hS.handleError);
    }
}
