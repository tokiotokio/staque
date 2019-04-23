import { Injectable } from '@angular/core';
import { Observable,of,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandService {

	private hand_:number[] = [5];
	private hand:Subject<number[]> = new Subject<number[]>();

	constructor() {  }
	init() :void{
		this.hand.next(this.hand_);
	}

	pop():number {
		let x = this.hand_.pop();
		this.hand.next(this.hand_);
		return x;
	}
	add(n:number):void{
		this.hand_.push(n);
		this.hand.next(this.hand_);
	}
}
