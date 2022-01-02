import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay, concatMap, mergeMap } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // Ejemplo vida real
    const source2 = of(
      ajax.getJSON('http:///'),
      ajax.getJSON('http:///')

    );

    const obsMergeMapVidaReal = source2.pipe(
      mergeMap(v => v)
    );

    obsMergeMapVidaReal.subscribe(
      v => console.log(v)
    );

    const source = of(2000, 1000, 3000);
    const obsMergeMap = source.pipe(
      concatMap(val => of(`Valor: ${val}`).pipe(delay(val)))
    );

    obsMergeMap.subscribe(
      dato => console.log(dato)
    );

  }

}
