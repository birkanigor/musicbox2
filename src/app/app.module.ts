import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ImgSourceDirective } from './directives/imageSource.directive';

import { TopHeaderComponent } from "./components/header/topHeader.component";
import { BottomFooterComponent } from "./components/footer/bottomFooter.component";
import { MainContainerComponent} from './components/mainContainer/mainContainer.component';
import { BandCardComponent} from './components/bandCard/bandCard.component';
import { VideoPlayer} from "./components/player/videoPlayer.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HighlightDirective,
    ImgSourceDirective,
    TopHeaderComponent,
    BottomFooterComponent,
    MainContainerComponent,
    BandCardComponent,
    VideoPlayer
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
