import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  interval: number;
  saludo: string;

  constructor() { }

  ngOnInit(): void {
    const contador = interval(1000); // esto se convierte en una variable observable
    const contadorDos = timer(2000);
    contador.subscribe(
      (respuesta) => {
        console.log(`Cada ${respuesta} segundos`);
        this.interval = respuesta;
      },
      () => { }
    );

    contadorDos.subscribe(
      (respuesta) => {
        this.saludo = 'Hola Timer';
       }
    );


  }

}
