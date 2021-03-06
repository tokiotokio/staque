import { Injectable } from '@angular/core';
import { Observable,of,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandService {

	hand_:number[] = [5];
	hand:Subject<number[]> = new Subject<number[]>();

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
		this.hand_.sort(function(a,b){
			return (a>=b)?(a>b)?-1:0:1;
		});
		this.hand.next(this.hand_);
	}
}
