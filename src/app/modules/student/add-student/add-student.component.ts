import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IStudent } from 'src/app/models/IStudent';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  @Output()
  studentAddEmitter: EventEmitter<boolean> = new EventEmitter();

  constructor(private studentService:StudentService){

  }

  handleAddStudent(object: any){
    // console.log(object);
    this.studentService.addStudent(object);
    this.studentAddEmitter.emit(true);
  }
}
