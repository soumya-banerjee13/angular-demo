import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DemoComponent} from './demo/demo.component';
import { Demo3Component } from './demo3/demo3.component';
import { CoursesComponent } from './courses/courses.component';
import { NavComponent } from './nav/nav.component';
import { PipeComponent } from './pipe/pipe.component';
import { SummaryPipe } from './pipe/summary.pipe';
import { PrepPipe } from './prep-pipe.pipe';
import { StudentComponent } from './student/student.component';
import { DemoService } from './demo.service';
import { HttpClientModule } from '@angular/common/http';
import { Student2Component } from './student2/student2.component';
import { CustomDirective } from './custom.directive';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Demo3Component,
    CoursesComponent,
    NavComponent,
    PipeComponent,
    SummaryPipe,
    PrepPipe,
    StudentComponent,
    Student2Component,
    CustomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
