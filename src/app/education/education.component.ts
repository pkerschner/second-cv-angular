import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education = [
    {
      school: "North Central State College",
      degree: "Business"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
