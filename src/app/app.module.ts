import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ContentComponent} from './content/content.component';
import {FormsModule} from "@angular/forms";
import {NavigationBarComponent} from './header/navigation-bar/navigation-bar.component';
import {MainHeaderBarComponent} from './header/main-header-bar/main-header-bar.component';
import {CombinationListComponent} from './content/combination-list/combination-list.component';
import {CombinationComponent} from './content/combination/combination.component';
import {CombinationItemComponent} from './content/combination-list/combination-item/combination-item.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/take';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    NavigationBarComponent,
    MainHeaderBarComponent,
    CombinationListComponent,
    CombinationComponent,
    CombinationItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
