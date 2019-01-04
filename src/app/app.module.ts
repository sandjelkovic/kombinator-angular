import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// import {MediaQueriesModule, FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonToggleModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule,
  MatListModule, MatRadioModule
} from "@angular/material";

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {ContentComponent} from './components/content/content.component';
import {FormsModule} from "@angular/forms";
import {NavigationBarComponent} from './components/header/navigation-bar/navigation-bar.component';
import {MainHeaderBarComponent} from './components/header/main-header-bar/main-header-bar.component';
import {CombinationListComponent} from './components/content/combination-list/combination-list.component';
import {CombinationComponent} from './components/content/combination/combination.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/toArray';
import {CombinationService} from "./services/combination.service";
import {SlotComponent} from './components/content/combination/slot/slot.component';
import {SlotEntryComponent} from './components/content/combination/slot-entry/slot-entry.component';
import {SlotEntriesComponent} from './components/content/combination/slot-entries/slot-entries.component';
import {SlotEntryAddNewComponent} from './components/content/combination/slot-entry-add-new/slot-entry-add-new.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {SlotListComponent} from './components/content/combination/slot-list/slot-list.component';

const routes = [
  {path: '', component: CombinationListComponent},
  {path: 'combinations/:combinationUUID', component: CombinationComponent},
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
    SlotComponent,
    SlotEntryComponent,
    SlotEntriesComponent,
    SlotEntryAddNewComponent,
    SlotListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatListModule, MatCardModule, MatExpansionModule, MatInputModule, MatRadioModule, MatFormFieldModule, MatIconModule, MatGridListModule, MatButtonToggleModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CombinationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
