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

  newFirstName: string = "";
  newLastName: string = "";
  newEmail: string = "";


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
    if(this.showEdit){
      this.newFirstName=this.student.firstName;
      this.newLastName=this.student.lastName;
      this.newEmail=this.student.email;
    }
  }

  prepareDeletion(){
    console.log(`Removing student ${this.student.id}`)
    this.studentService.deleteStudent(this.student.id);
    // this.studentDeletionEmitter.emit(this.student);
  }

  prepareUpdate(){
    this.student = {id:this.student.id, firstName:this.newFirstName, lastName:this.newLastName, email:this.newEmail};
    this.studentService.updateStudent(this.student.id, this.student);
    this.showEdit = false;
  }

  changeFirstName(event:Event){
    this.newFirstName = (<HTMLInputElement>event.target).value;
  }

  changeLastName(event:Event){
    this.newLastName = (<HTMLInputElement>event.target).value;
  }

  changeEmail(event:Event){
    this.newEmail = (<HTMLInputElement>event.target).value;
  }

}
