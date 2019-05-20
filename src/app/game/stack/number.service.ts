import { Injectable } from '@angular/core';
import { Observable,of,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

	stack_:number[] = [10,3,2,1];
	stack:Subject<number[]> = new Subject<number[]>();

	constructor() { }
	init() :void{
		this.stack.next(this.stack_);
	}

	push(num:number):void {
		this.stack_.push(num);
		this.stack.next(this.stack_);
	}
	pull():number {
		let num = this.stack_.pop();
		this.stack.next(this.stack_);
		return num;
	}
}
