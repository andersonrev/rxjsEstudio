import { Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs'

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit {


  // @ViewChild("elemento") elemento;

  constructor() { }

  ngOnInit(): void {


    const elemento = document.getElementById("elemento");

    const mouseMove$ = fromEvent(elemento, 'mousemove');

    const subs = mouseMove$.subscribe(
      (evento: MouseEvent) => {
        console.log(`x:  ${evento.clientX},  y: ${evento.clientY}`);


        // se desuscribe cuando x && y estan en el rango.

        if (evento.clientX < 40 && evento.clientY < 500) {
          console.log('desubcripcion');
          subs.unsubscribe();
        }

      });

  }



}
