import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IStudent } from 'src/app/models/IStudent';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-component',
  templateUrl: './student-component.component.html',
  styleUrls: ['./student-component.component.css']
})
export class StudentDetailComponent {
  showEdit: boolean=false;
  @Input()
  showDelete: boolean=false;
  @Input({required: true})
  student!: IStudent;

  @Output()
  studentShowDeletionEmitter: EventEmitter<any> = new EventEmitter();
  @Output()
  studentShowEditEmitter: EventEmitter<IStudent> = new EventEmitter();

  @Output()
  studentDeletionEmitter: EventEmitter<IStudent> = new EventEmitter();
  @Output()
  studentUpdateEmitter: EventEmitter<IStudent> = new EventEmitter();

  constructor(private studentService: StudentService){
    
  }
  handleShowEdit(){
    this.showEdit = !this.showEdit;
  }

  prepareDeletion(){
    console.log(`Removing student ${this.student.id}`)
    this.studentService.deleteStudent(this.student.id);
    // this.studentDeletionEmitter.emit(this.student);
  }

  prepareUpdate(){
    this.showEdit = false;
  }


}
