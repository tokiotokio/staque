import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { GameComponent } from './game/game.component';
import { StackComponent } from './game/stack/stack.component';
import { QueueComponent } from './game/queue/queue.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    GameComponent,
    StackComponent,
    QueueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
