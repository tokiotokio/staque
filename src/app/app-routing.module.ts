import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameComponent } from './game/game.component';
import { StackComponent } from './game/stack/stack.component';
import { QueueComponent } from './game/queue/queue.component';

const routes: Routes = [
	{path:'game', component:GameComponent,
		children: [
			{path:'', redirectTo:'/game/queue', pathMatch:'full'},
			{path:'stack', component:StackComponent},
			{path:'queue', component:QueueComponent}
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
