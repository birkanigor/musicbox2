import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopHeaderComponent } from "./components/header/topHeader.component";
import { BottomFooterComponent } from "./components/footer/bottomFooter.component";
import { MainContainerComponent} from './components/mainContainer/mainContainer.component';
import { BandCardComponent} from './components/bandCard/bandCard.component';
import { VideoPlayer} from "./components/player/videoPlayer.component";

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    TopHeaderComponent,
    BottomFooterComponent,
    MainContainerComponent,
    BandCardComponent,
    VideoPlayer
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
