import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import {delay, concatMap} from 'rxjs/operators'

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // conca hace respetar el ordener con datos mapeados

    // Diferencias entre concat y concatMap es que concat concatena observable y concatMap concatena datos 

    const source = of(2000, 1000, 3000);
    const obsConcatMap = source.pipe(
      concatMap(val => of(`Valor: ${val}`).pipe(delay(val)))
    );

    obsConcatMap.subscribe(
      dato => console.log(dato)
    );

    
  }

}
