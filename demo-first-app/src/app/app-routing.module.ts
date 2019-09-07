import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { CoursesComponent } from './courses/courses.component';
import { AppComponent } from './app.component';
import { PipeComponent } from './pipe/pipe.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:"firstRouting",component:CoursesComponent},
    {path:"showPipes",component:PipeComponent},
    {path:"showPipes/:id",component:PipeComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
