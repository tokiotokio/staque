import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './start/start.component';
import { GameComponent } from './game/game.component';
import { StackComponent } from './game/stack/stack.component';
import { QueueComponent } from './game/queue/queue.component';

const routes: Routes = [
	{path:'', redirectTo:'/start', pathMatch:'full'},
	{path:'start', component:StartComponent},
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
