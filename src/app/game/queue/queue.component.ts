import { Component, OnInit } from '@angular/core';
import { NumberService } from './number.service';

declare var require: any;

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {

	fig_queue = require('../../image/queue1.png');
	queue1:number[];
	queue2:number[];
	queue3:number[];
	queue4:number[];

	constructor(
		private number_s : NumberService
	){}

  ngOnInit() {
		this.number_s.queue1
			.subscribe(stk => this.queue1= stk);
		this.number_s.queue2
			.subscribe(stk => this.queue2= stk);
		this.number_s.queue3
			.subscribe(stk => this.queue3= stk);
		this.number_s.queue4
			.subscribe(stk => this.queue4= stk);
		this.number_s.init();
  }

	runQueue():void {
		console.log("queue clicked");
	}

}
