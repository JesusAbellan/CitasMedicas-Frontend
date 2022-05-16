import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-new-dates',
  templateUrl: './new-dates.component.html',
  styleUrls: ['./new-dates.component.scss']
})
export class NewDatesComponent implements OnInit {

  selected: Date | null = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
