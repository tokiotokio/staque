import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {

	private stack:number = [10,5,3,1];

  constructor() { }

  ngOnInit() {
  }

	attack():void{
		console.log("attack");
	}
}
