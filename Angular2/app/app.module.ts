import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule}    from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent}         from './app.component';
import {HeroService}          from './service/hero.service';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {HeroesComponent} from "./herose/heroes.component";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
import {HeroSearchComponent} from "./hero-search/hero-search.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeroSearchComponent
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
