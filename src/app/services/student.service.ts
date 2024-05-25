import { Injectable } from '@angular/core';
import { IStudent } from '../models/IStudent';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

const STUDENT_API = "http://3.137.220.117:8080/api/student"


@Injectable({
  providedIn: 'root'
})
export class StudentService {

constructor(private http:HttpClient) { }

  getAllStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(STUDENT_API);
  }

  addStudent(object: any){
    this.http.post(STUDENT_API, object).subscribe();
  }

  deleteStudent(id:number) : void {
    this.http.delete(`${STUDENT_API}/${id}`).subscribe();
  };

  updateStudent (id: number, newStudent: IStudent) {
    this.http.put(`${STUDENT_API}/${id}`, newStudent).subscribe();
  }

}
