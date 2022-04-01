import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Philip Kerschner";
  contact: string = "Address | Phone | Email";
  technologies = [
    { a:"C#", b:"Java", c:"SQL", d:"Git" },
    { a:"GitHub", b:"EF", c:"Spring", d:"WebAPI" },
    { a:"HTML", b:"CSS", c:"Bootstrap", d:"TypeScript" },
    { a:"JavaScript", b:"Angular", c:"Visual Studio", d:"" }
  ];
}
