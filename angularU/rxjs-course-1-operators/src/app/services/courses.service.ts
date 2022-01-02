import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, shareReplay} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Course} from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  constructor(private http: HttpClient) {
  }

  loadAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('/api/courses')
      .pipe(
        map((respuesta: any) => respuesta.payload),
        shareReplay()
      );
  }

  updateCourse(id: number, objeto: Partial<Course>): Observable<any> {
    return this.http.put(`/api/courses/${id}`, objeto);
  }

  getChukNorris() {
     return this.http.get('https://api.chucknorris.io/jokes/random');
  }
}
