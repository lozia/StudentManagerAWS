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

  constructor(private studentService:StudentService){

  }

  handleAddStudent(object: any){
    // console.log(object);
    this.studentService.addStudent(object);
    // this.addStudent({id:4, firstName:'Zongyao', lastName:'Li', email: 'lizongyao9745@hotmail.com'});
  }
}
