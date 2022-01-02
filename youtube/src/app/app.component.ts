import { Component, OnInit } from '@angular/core';
import { Observable, interval, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'reactivex';
  observable: any;

  ngOnInit() {
    this.observable = new Observable(
      subscriber => {
        subscriber.next(1);
        subscriber.next(2);
        subscriber.next(3);
        setTimeout(() => {
          subscriber.next(4);
          subscriber.complete();
        }, 1000);
      });

  }

  rxjsFuncion() {
    console.log('just before subscribe');
    this.observable.subscribe(
      {
        next(x) {
          console.log('got value ' + x);
        },
        error(err) {
          console.error('something wrong occurred: ' + err);
        },
        complete() { console.log('done'); }
      });
    console.log('just after subscribe');

  }

}
