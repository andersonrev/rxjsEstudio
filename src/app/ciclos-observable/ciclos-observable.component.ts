import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ciclos-observable',
  templateUrl: './ciclos-observable.component.html',
  styleUrls: ['./ciclos-observable.component.scss']
})
export class CiclosObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const myObservable = Observable.create(
      (obs)=>{

        obs.next(1);
        obs.next(2);
        obs.next('Hola Mundo');
        obs.error('Error N1');
        obs.complete();
    });


    const subs = myObservable.subscribe(
      {
        next: x => console.log('El siguiente valor es ' + x),
        error: err => console.error('Error' + err),
        complete: ()=> console.log('Subscripcion Completada'),
      });

    subs.unsubscribe();
  }

}
