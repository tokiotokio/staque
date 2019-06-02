import { Injectable } from '@angular/core';
import { Observable,of,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

	queues_:number[][] = [
		[1,2,3,4],
		[2,2,3,5],
		[4,1,6,1],
		[3,10,1,0]
	];
	/// [必要レベル，必要交換ポイント]
	levels_ :number[][] = [
		[1,1],[1,1],[2,3],[4,5]
	];

	queues:Subject<number[][]> = new Subject<number[][]>();
	levels:Subject<number[]> = new Subject<number[]>();

  constructor() { }
	init() :void{
		this.queues.next(this.queues_);
		this.levels.next(this.levels_);
	}

	enqueueAndDequeue(s:number, n:number):number {
		var q = this.queues_[s];
		q.push(n);
		const val = q[0];
		q.shift();
		this.queues.next(this.queues_);
		return val;
	}

	overLevel(s:number,l:number) :Boolean{
		return (l >= this.levels_[s][0]);
	}

	getPointLevel(s:number) :number{
		return this.levels_[s][1];
	}
}
