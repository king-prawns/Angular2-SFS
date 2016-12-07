import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
// tslint:disable-next-line:no-unused-variable
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class CoreService {
    baseUrl: string = 'http://localhost:3000';

    constructor() {}

    extractData(res: Response) {
        return res.json() || {};
    }

    handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            let err = error.json();
            err = Object.keys(err).length === 0 ? '' : JSON.stringify(err);
            errMsg = `${error.status} - ${error.statusText || ''} ${err || ''}`;
        } else {
            errMsg = error.toString();
        }
        console.error(errMsg);
        return ErrorObservable.throw(errMsg);
    }
}
