import { Component, OnInit } from '@angular/core';
import { HandService } from './hand.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

	scene:Boolean = false;

	hand:number[] = [];
	
  constructor(private hand_s : HandService) { }

  ngOnInit() {
		this.hand_s.hand
			.subscribe(lst => this.hand = lst);
		this.hand_s.init();
  }

	private select(e:any) {
		const tg = e.target;
		const el = tg.parentElement;
		console.log(el);
		console.log(e.target);
	}
}
