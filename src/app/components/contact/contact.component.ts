import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('slideAnimation', [
      state('initial', style({
        transform: 'translateX(0)',
      })),
      state('final', style({
        transform: 'translateX(100px)',
      })),
      transition('initial => final', animate('300ms')),
      transition('final => initial', animate('300ms'))
    ])
  ]
})

export class ContactComponent implements OnInit {
  hovered: boolean = false;
email:string="bodduc1@udayton.edu"

  constructor() { }

  ngOnInit(): void {
  }
  startAnimation() {
    this.hovered = true;
  }

  resetAnimation() {
    this.hovered = false;
  }
}
