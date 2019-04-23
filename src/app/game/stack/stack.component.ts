import { Component, OnInit } from '@angular/core';
import { NumberService } from './number.service'
import { HandService } from './../hand.service'

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {

	private stack:number[];
	private hand:number[];

	constructor(
		private number_s : NumberService,
		private hand_s : HandService
	) { }

  ngOnInit() {
		this.number_s.stack
			.subscribe(stk => this.stack = stk);
		this.hand_s.hand
			.subscribe(lst => this.hand = lst);
		this.number_s.init();
		this.hand_s.init();
  }

	attack():void{
		console.log(this.hand,this.stack);
		let sum:number = 0;
		for(let x:number of this.hand){
			sum += x;
		}

		let l:number = this.stack.length - 1;
		console.log(l,this.stack[l])
		console.log(sum,this.stack[l] + this.stack[l-1]);
		if(sum > this.stack[l]+this.stack[l-1]){
			let num = this.number_s.pull();
			this.hand_s.add(num);
		} else {
			let num = this.hand_s.pop();
			this.number_s.push(num);
		}
	}
}
