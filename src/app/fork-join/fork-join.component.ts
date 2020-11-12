import { Component, OnInit } from '@angular/core';
import { forkJoin, of, interval } from 'rxjs';
import {delay, take} from 'rxjs/operators'



@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss']
})
export class ForkJoinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const fork = forkJoin(
      of('Hola'),
      of('Mundo').pipe(delay(1000)),
      interval(1000).pipe(take(10)),    
      );

      // despues de 10 segundos se va a subscribir
      fork.subscribe(
        val => console.log(val)
      );


  }

}
