import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() studentList:any;
  @Input() student:{firstName:string,lastName:string,score:number};
  constructor() { }

  ngOnInit() {
  }

}
