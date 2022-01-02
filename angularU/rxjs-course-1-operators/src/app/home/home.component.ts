import {Component, OnInit} from '@angular/core';
import {Course} from '../model/course';
import {interval, Observable, of, timer} from 'rxjs';
import {catchError, delayWhen, map, retryWhen, shareReplay, tap} from 'rxjs/operators';
import {CoursesService} from '../services/courses.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  beginnerCourses$: Observable<Course[]>;
  advancedCourse$: Observable<Course[]>;

  constructor(private courseService: CoursesService) {

  }

  ngOnInit() {

    const courses$ = this.courseService.loadAllCourses();
    this.beginnerCourses$ = courses$
      .pipe(
        map((resp: Course[]) => {
          return resp.filter(
            (course: Course) => course.category === 'BEGINNER');
        })
      );

    this.advancedCourse$ = courses$
      .pipe(
        map((resp: Course[]) => {
          return resp.filter(
            (course: Course) => course.category === 'ADVANCED');
        })
      );
  }

}
