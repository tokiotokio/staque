import { Injectable } from '@angular/core';
import { Observable,of,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandService {

	hand_:number[] = [5,10,2];
	hand:Subject<number[]> = new Subject<number[]>();

	constructor() {  }
	init() :void{
		this.hand.next(this.hand_);
		this.hand_.sort(function(a,b){
			return (a>=b)?(a>b)?-1:0:1;
		});
	}

	pop(num: number):number {
		num = (num|0)
		let val = -1;
		let it = -1;
		for(let i = this.hand_.length-1;i >= 0; --i){
			if(this.hand_[i] >= num){
				val = this.hand_[i];
				it = i;
				break;
			}
		}
		console.log(it);
		if(it > -1){
			this.hand_.splice(it, 1);
		}
		return val;
	}

	add(n:number):void{
		this.hand_.push(n);
		this.hand_.sort(function(a,b){
			return (a>=b)?(a>b)?-1:0:1;
		});
	}
}
