import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() {
    console.log('Constructor');
   }

  ngOnInit(): void {
    console.log('Ng on it');

  }

}
