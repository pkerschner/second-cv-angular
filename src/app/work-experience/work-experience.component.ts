import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workHistories = [
    {
      role: "Associate Contract Administrator",
      duration: "2018 to 2021",
      accomplishments: [
        "Managed contracts",
        "Submitted quotes"
      ]
    },
    {
      role: "Assembler",
      duration: "2015 to 2018",
      accomplishments: [
        "Developed processes",
        "Assembled and tested products"         
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
