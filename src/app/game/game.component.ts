import { Component, OnInit } from '@angular/core';
import { HandService } from './hand.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

	private scene:Boolean = false;

	private hand:number[] = [];
	
  constructor(private hand_s : HandService) { }

  ngOnInit() {
		this.hand_s.hand
			.subscribe(lst => this.hand = lst);
		this.hand_s.init();
  }

}
