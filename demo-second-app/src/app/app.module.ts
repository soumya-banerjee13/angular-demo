import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { NavComponent } from './nav/nav.component';
import { UserComponent } from './user/user.component';
import { DataComponent } from './data/data.component';
import { ReversePipe } from './user/reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    NavComponent,
    UserComponent,
    DataComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
