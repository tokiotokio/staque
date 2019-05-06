import { Component, OnInit } from '@angular/core';

declare var require: any;
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

	fig_title = require("../image/title.png");
	fig_game = require("../image/newGame.png");

  constructor() { }

  ngOnInit() {
  }

}
