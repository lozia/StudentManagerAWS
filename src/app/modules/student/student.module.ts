import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDetailComponent} from './student-detail/student-component.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UtilModule } from '../util/util.module';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentService } from 'src/app/services/student.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StudentDetailComponent,
    StudentListComponent,
    AddStudentComponent
  ],
  imports: [
    CommonModule,
    UtilModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    StudentDetailComponent,
    StudentListComponent,
    AddStudentComponent
  ],
  providers: [
    StudentService,

  ]
})
export class StudentModule { }
