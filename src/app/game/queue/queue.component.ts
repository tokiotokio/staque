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
	selectNum:number = 0;
	queues:number[][];

	constructor(
		private number_s : NumberService
	){}

  ngOnInit() {
		this.number_s.queues
			.subscribe(stk => this.queues= stk);
		this.number_s.init();
  }

	runQueue():void {
		console.log("queue clicked");
		this.number_s.enqueueAndDequeue(this.selectNum,10);
	}

	select(n:number){
		this.selectNum = n;
	}
}
