import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {LittleTourComponent} from "./little-tour.component";
import {LoopbackComponent} from "./loop-back.comonent";
import {ClickMeComponent} from "./click-me.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, LittleTourComponent, LoopbackComponent, ClickMeComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
}
