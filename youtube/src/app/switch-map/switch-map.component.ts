import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, empty, merge } from 'rxjs';
import { switchMap, scan, mapTo, startWith, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

  numero: number = 0;

  constructor() { }

  ngOnInit(): void {
      // fromEvent(document, 'click').pipe(
      //   switchMap(
      //     ()=> interval(1000) 
      //   )
      // ).subscribe(console.log);


    const remainingLabel = document.getElementById('remaining');
    const pauseBoton = document.getElementById('pause');
    const resumeBoton = document.getElementById('resume');

    const obsInterval = interval(1000).pipe(
      mapTo(-1)
    );

    const pause = fromEvent(pauseBoton, 'click').pipe(
      mapTo(false)
    );

    const resume = fromEvent(resumeBoton, 'click').pipe(
      mapTo(true)
    );

    const timer = merge(pause,resume)
      .pipe(
        startWith(true),
        switchMap(val => (val ? obsInterval : empty())),
        scan((acc, curr) => (curr ? curr + acc : acc), 10),
        takeWhile(v => v >= 0)
      )
      .subscribe(
        (val: any) => {
          this.numero = val;
          console.log('XXX',val);
          remainingLabel.innerHTML = val}
      );

  }

}
