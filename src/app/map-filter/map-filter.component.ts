import { Component, OnInit } from '@angular/core';
import { of, pipe } from 'rxjs'
import { map, filter } from 'rxjs/operators'
@Component({
  selector: 'app-map-filter',
  templateUrl: './map-filter.component.html',
  styleUrls: ['./map-filter.component.scss']
})
export class MapFilterComponent implements OnInit {

  numeros: number[] = [];

  constructor() { }

  ngOnInit(): void {

    const arreglo$ = of(1, 2, 3, 4, 5);

    //console.log(typeof arreglo, arreglo);


    const cuadrado = pipe(
      filter((n: number) => n % 2 === 0),
      map(n => n * 2)
    );


    const numerosAlCuadrado$ = cuadrado(arreglo$);
    numerosAlCuadrado$
      .subscribe((n: number) => {
        this.numeros.unshift(n)
      });

  }

}
