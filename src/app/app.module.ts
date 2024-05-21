import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StudentModule } from './modules/student/student.module';
import { UtilModule } from './modules/util/util.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StudentModule,
    UtilModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
