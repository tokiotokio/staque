import { Component, OnInit } from '@angular/core';
import { NumberService } from './number.service';
import { HandService } from './../hand.service';
import { DaysService } from '../days.service';

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
	hand:number[];

	constructor(
		private hand_s : HandService,
		private number_s : NumberService,
		private days_s : DaysService
	){}

  ngOnInit() {
		this.number_s.queues
			.subscribe(stk => this.queues= stk);
		this.hand_s.hand
			.subscribe(lst => this.hand = lst);
		this.number_s.init();
		this.hand_s.init();
  }

	runQueue():void {
		this.days_s.Days_Decrement();
		const p = this.number_s.getPointLevel(this.selectNum);
		const val = this.hand_s.pop(p);
		if(val < 0){return;}
		const retVal = this.number_s.enqueueAndDequeue(this.selectNum,val);

		this.hand_s.add(retVal);	
	}

	select(n:number){
		this.selectNum = n;
	}
	isSelected(n:number) :Boolean{
		return (n==this.selectNum);
	}

	isUpper(n:number):Boolean{
		return this.number_s.overLevel(n, this.hand.length);
	}

	isActive():boolean {
		return !this.days_s.Days_isZero();
	}

	toStack() {
		this.hand_s.toggleClick();
	}
}
