import { Injectable } from '@angular/core';
import { Observable,of,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DaysService {

  default_days:number = 5;

  Days:Subject<number> = new Subject<number>();
  Days_:number = this.default_days;


  constructor() { }
  init() :void{
    this.Days.next(this.Days_);
  }

  Days_Decrement():void {
    this.Days_ -= 1;
    this.Days.next(this.Days_);
  }

  Days_Reset():void {
    this.Days_ = this.default_days;
    this.Days.next(this.Days_);
  }

  Days_isZero():boolean {
  if(this.Days_ <= 0) {return false;}
  else {return true;}
  }

}
