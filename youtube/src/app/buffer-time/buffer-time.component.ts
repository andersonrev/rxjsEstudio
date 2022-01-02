import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { bufferTime } from 'rxjs/operators';

@Component({
  selector: 'app-buffer-time',
  templateUrl: './buffer-time.component.html',
  styleUrls: ['./buffer-time.component.scss']
})
export class BufferTimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const timer = interval(500);

    const buffer = timer.pipe(
      bufferTime(2000,1000)
    );

    const subs = buffer.subscribe(
      val => console.log('Buffer: ', val)
    );
  }

}
