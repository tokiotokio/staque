import { Injectable } from '@angular/core';
import { Observable,of,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandService {

	private hand_:number[] = [5];
	private hand:Subject<number[]> = new Subject<number[]>();

	constructor() {
		this.hand.next(this.hand_);
	}

	add(n:number):void{
		this.hand_.push(n);
		this.hand.next(this.hand_);
	}
}
