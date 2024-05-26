import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IStudent } from 'src/app/models/IStudent';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentList!: IStudent[];
  showDelete: boolean = false;
  
  @Output()
  showDeletEmitter: EventEmitter<boolean> = new EventEmitter();

  constructor(private studentService: StudentService){

  }
  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe((data:IStudent[])=>{
    this.studentList = data;
    })
  }

  handleDelete(event: number){
    this.studentList = this.studentList.filter((student)=>{
      return student.id !== event;
    })
  }

  handleShowDelete(){
    this.showDelete = !this.showDelete;
  }

}
