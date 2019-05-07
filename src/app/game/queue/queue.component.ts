import { Component, OnInit } from '@angular/core';

declare var require: any;

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {

	fig_queue = require('../../image/queue1.png');

  constructor() { }

  ngOnInit() {
  }

}
