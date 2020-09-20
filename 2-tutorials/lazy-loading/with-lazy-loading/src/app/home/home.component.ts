import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  kitties: number[];

  constructor() { }

  ngOnInit(): void {
    this.kitties = [401, 402, 403, 404, 405, 406, 407, 408, 409];
  }

}
