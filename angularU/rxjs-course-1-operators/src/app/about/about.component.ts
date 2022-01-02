import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {concat, fromEvent, interval, noop, Observable, of, timer} from 'rxjs';
import {environment} from '../../environments/environment';
import {CoursesService} from '../services/courses.service';
import {Course} from '../model/course';
import {filter, map, mergeMap, tap} from 'rxjs/operators';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  cursosPros: any;
  valorChunkNorris: any;
  idCourses: any;

  totales: number;

  constructor(private coursesService: CoursesService) {

  }

  ngOnInit() {

    // this.coursesService.getChukNorris().subscribe(console.log);
    // this.coursesService.loadAllCourses().subscribe(console.log);
    this.coursesService.loadAllCourses().pipe(
      tap((result) => this.cursosPros = result),
      mergeMap(() =>
        this.coursesService.getChukNorris()
      ),
      // mergeMap(() => this.coursesService.getChukNorris()),
      mergeMap(() => this.coursesService.loadAllCourses().pipe(
        map((resul) => resul.map((value) => value.id))
      ))
    ).subscribe(console.log);

  }


}
