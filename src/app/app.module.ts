import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatListModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatIconModule} from "@angular/material";

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {ContentComponent} from './components/content/content.component';
import {FormsModule} from "@angular/forms";
import {NavigationBarComponent} from './components/header/navigation-bar/navigation-bar.component';
import {MainHeaderBarComponent} from './components/header/main-header-bar/main-header-bar.component';
import {CombinationListComponent} from './components/content/combination-list/combination-list.component';
import {CombinationComponent} from './components/content/combination/combination.component';
import {CombinationItemComponent} from './components/content/combination-list/combination-item/combination-item.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/take';
import {CombinationService} from "./services/combination.service";
import { SlotComponent } from './components/content/combination/slot/slot.component';
import { SlotEntryComponent } from './components/content/combination/slot-entry/slot-entry.component';

const routes = [
  {path: '', component: CombinationListComponent},
  {path: ':combinationUUID', component: CombinationComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    NavigationBarComponent,
    MainHeaderBarComponent,
    CombinationListComponent,
    CombinationComponent,
    CombinationItemComponent,
    SlotComponent,
    SlotEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatListModule, MatCardModule, MatExpansionModule, MatInputModule, MatRadioModule, MatFormFieldModule, MatIconModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CombinationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
