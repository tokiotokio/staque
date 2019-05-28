import { Injectable } from '@angular/core';
import { Observable,of,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

	queue1_:number[] = [1,2,3,4];
	queue2_:number[] = [2,2,3,4];
	queue3_:number[] = [3,2,3,4];
	queue4_:number[] = [4,2,3,4];
	queue1:Subject<number[]> = new Subject<number[]>();
	queue2:Subject<number[]> = new Subject<number[]>();
	queue3:Subject<number[]> = new Subject<number[]>();
	queue4:Subject<number[]> = new Subject<number[]>();

  constructor() { }
	init() :void{
		this.queue1.next(this.queue1_);
		this.queue2.next(this.queue2_);
		this.queue3.next(this.queue3_);
		this.queue4.next(this.queue4_);
	}
}
