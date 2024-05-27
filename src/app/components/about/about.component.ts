import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  downloadFile(): void {
    const fileName = 'Resume.pdf'; // Replace with your actual file name
    const filePath = `./../../assets/files/Charith_Resume_2024.pdf`;

    // Create an anchor element
    const anchor = document.createElement('a');

    // Set the anchor's attributes
    anchor.setAttribute('href', filePath);
    anchor.setAttribute('download', fileName);

    // Append the anchor to the body
    document.body.appendChild(anchor);

    // Trigger a click event on the anchor
    anchor.click();

    // Remove the anchor from the body
    document.body.removeChild(anchor);
  }
}
