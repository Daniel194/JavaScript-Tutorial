import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import {AppComponent}  from './app.component';
import {LittleTourComponent} from "./little-tour.component";
import {LoopbackComponent} from "./loop-back.comonent";
import {ClickMeComponent} from "./click-me.component";
import {HeroFormComponent} from "./hero-form.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, LittleTourComponent, LoopbackComponent, ClickMeComponent, HeroFormComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
}
