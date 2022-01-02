import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {concat, fromEvent, interval, noop, Observable, of, timer} from 'rxjs';
import {environment} from '../../environments/environment';
import {CoursesService} from '../services/courses.service';
import {Course} from '../model/course';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  constructor(private coursesService: CoursesService) {

  }

  ngOnInit() {
    const observer1$ = of(1, 2, 3);
    const observer2$ = of(4, 5, 6);

    const result$ = concat(observer1$, observer2$);

    result$.subscribe(
      console.log
    );


  }


}
