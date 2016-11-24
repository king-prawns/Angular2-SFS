import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable

import { CoreService } from '../core/core.service';

@Injectable()
export class UsersService {
    constructor(private http: Http, private hS: CoreService) { }

    getPeople() {
        return this.http.get(this.hS.baseUrl + '/users')
            .retry(1) // just for example
            // .flatMap((response) => response.json())        
            // .filter((user) => {return user["id"] < 5})
            // .toArray()
            .map(this.hS.extractData)
            .catch(this.hS.handleError);
    }

    getUser(userID) {
        return this.http.get(this.hS.baseUrl + '/users/' + userID)
            .map(this.hS.extractData)
            .catch(this.hS.handleError);
    }

    updateUser(userID, user) {
        return this.http.put(this.hS.baseUrl + '/users/' + userID, user)
            .map(this.hS.extractData)
            .catch(this.hS.handleError);
    }

    getTodos(userID) {
        return this.http.get(this.hS.baseUrl + '/todos?userId=' + userID)
            .map(this.hS.extractData)
            .catch(this.hS.handleError);
    }
}
