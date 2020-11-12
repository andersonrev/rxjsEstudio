import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { GitHubRestService } from '../servicios/github.rest.service';

@Component({
  selector: 'app-multiples-obs',
  templateUrl: './multiples-obs.component.html',
  styleUrls: ['./multiples-obs.component.scss']
})
export class MultiplesObsComponent implements OnInit {

  constructor(public gitHubRestService: GitHubRestService) { }

  // Observables en paralelo => ForkJoin
  ngOnInit(): void {
    // this.gitHubRestService.getGitHub('ctmil')
    //   .subscribe((res: any) => {
    //     console.log(res);    

    //   });


    forkJoin(
      this.gitHubRestService.getGitHub('ctmil'),
      this.gitHubRestService.getGitHub('andersonrev'),
    ).subscribe(
      (res) => {
        console.log(res);
      }
    );

    // hacer que en ua siubscripcion necesita los datos de otra subscripcion

    this.gitHubRestService.getGitHub('ctmil').pipe(
      mergeMap(
        (res: any) => {
          return ajax(res.blog);
        },
      
      )
    ).subscribe(
      (final: any) => {
        console.log(final.status);
      }
    )
  }

}
