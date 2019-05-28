import { Component, OnInit } from '@angular/core';
import { HandService } from './hand.service';
import { DaysService } from './days.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

	scene:Boolean = false;

    hand:number[] = [];
    Days:number;
	
    constructor(
        private hand_s : HandService,
        private days_s : DaysService
    ) { }

  ngOnInit() {
		this.hand_s.hand
			.subscribe(lst => this.hand = lst);
        this.hand_s.init();

        this.days_s.Days
        .subscribe(days => this.Days = days);
        this.days_s.init();
  }

	private select(e:any) {
		const tg = e.target;
		const el = tg.parentElement;
		console.log(el);
		console.log(e.target);
	}
}
