import { Component, OnInit } from '@angular/core';
import { DaysService } from '../days.service';

declare var require: any;

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {

	fig_queue = require('../../image/queue1.png');

    constructor(
        private days_s : DaysService
    ) { }

  ngOnInit() {
  }

	runQueue():void {
      console.log("queue clicked");
      this.days_s.Days_Decrement();
    }

    isActive():boolean {
      return !this.days_s.Days_isZero();
    }
}
