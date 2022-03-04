import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { HeaderComponent } from './header/header.component';
import { TilesComponent } from './tiles/tiles.component';
import { TileCollectionComponent } from './tile-collection/tile-collection.component';
import { KeyboardComponent } from './keyboard/keyboard.component';



@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    HeaderComponent,
    TilesComponent,
    TileCollectionComponent,
    KeyboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
