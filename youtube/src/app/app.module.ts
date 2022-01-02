import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntervalComponent } from './interval/interval.component';
import { FromEventComponent } from './from-event/from-event.component';
import { MapFilterComponent } from './map-filter/map-filter.component';
import { TapComponent } from './tap/tap.component';
import { ShareComponent } from './share/share.component';
import { ConcatComponent } from './concat/concat.component';
import { CiclosObservableComponent } from './ciclos-observable/ciclos-observable.component';
import { BufferTimeComponent } from './buffer-time/buffer-time.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { MultiplesObsComponent } from './multiples-obs/multiples-obs.component';
import { ScanComponent } from './scan/scan.component';

@NgModule({
  declarations: [
    AppComponent,
    IntervalComponent,
    FromEventComponent,
    MapFilterComponent,
    TapComponent,
    ShareComponent,
    ConcatComponent,
    CiclosObservableComponent,
    BufferTimeComponent,
    SwitchMapComponent,
    ForkJoinComponent,
    ConcatMapComponent,
    MergeMapComponent,
    MultiplesObsComponent,
    ScanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
