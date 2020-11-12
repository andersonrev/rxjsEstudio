import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const clicks = fromEvent(document, 'click');

    const positios = clicks
      .pipe(
        tap(
          ev => console.log('Procesado' + ev),
          error => console.error(error),
          () => console.log('completado'),
        )
      )
  }

}
