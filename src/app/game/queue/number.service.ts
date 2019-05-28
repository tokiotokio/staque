import { Injectable } from '@angular/core';
import { Observable,of,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

	queues_:number[][] = [
		[1,2,3,4],
		[2,2,3,4],
		[3,2,3,4],
		[4,2,3,4]
	];
	queues:Subject<number[][]> = new Subject<number[][]>();

  constructor() { }
	init() :void{
		this.queues.next(this.queues_);
	}

	enqueueAndDequeue(s:number, n:number) {
		var q = this.queues_[s];
		q.push(n);

		this.queues.next(this.queues_);
	}
}
