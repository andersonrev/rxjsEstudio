import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { scan, delay } from 'rxjs/operators';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const src = of(1, 2, 3, 4, 5);

    const obsScan = src.pipe(
      scan((x, y) =>  [...x , y], [])
    );

    obsScan.subscribe(
      (val) => {
        console.log(val);
      }
    );

  }

}
