import { Component, OnInit } from '@angular/core';
import { tap, mapTo, share } from 'rxjs/operators';
import { timer } from 'rxjs';
@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  constructor() { }
/*
Share: sirve para ejecutar una sola vez un obs cuando se ejecutan en varias situaciones.
*/
  ngOnInit(): void {
    const time = timer(1000);

    const obs = time.pipe(
      tap(
        () => {
          console.log('TAP ON');
        }
      ),
      mapTo('END OBS')
    );

    // const sub1 = obs.subscribe(
    //   val => console.log(val)
    // );

    // const sub2 = obs.subscribe(
    //   val => console.log(val)
    // );

    const shareObs = obs.pipe(share());
    console.log('SHARE ON .....');

    const sub3 = shareObs
    .subscribe(val => console.log(val));

    const sub4 = shareObs
    .subscribe(val => console.log(val));

  }

}
