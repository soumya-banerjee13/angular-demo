import { Component, OnInit, Input } from '@angular/core';
import { findLast } from '@angular/compiler/src/directive_resolver';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  studentList= [
    {
    firstName: "Soumya" ,
    lastName: "Banerjee",
    score: 50
    },
    {
      firstName: "Ashish",
      lastName: "Sarkar",
      score: 20
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
