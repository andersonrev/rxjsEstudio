import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Injectable({
    providedIn: 'root'
})
export class GitHubRestService {

    constructor() { }

    public getGitHub(url: string): any {
        const gh = ajax.getJSON('https://api.github.com/users/'+ url);

        const data$ = new Observable(
            observer => {
                gh.subscribe(
                    (res)=> {
                        observer.next(res);
                        observer.complete();
                    },
                    (error)=> {
                        observer.error(error);
                    }
                )
            });

            return data$;


    }
}