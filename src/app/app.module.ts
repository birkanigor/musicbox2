import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {ProfileComponent} from "./components/profileComponent/profile.component";
import {NotFoundComponent} from "./components/notFoundComponent/notFound.component";
import {ManageComponent} from "./components/manageComponent/manage.component";

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ImgSourceDirective } from './directives/imageSource.directive';

import {UsesrService} from "./services/user.service";

import { TopHeaderComponent } from "./components/header/topHeader.component";
import { BottomFooterComponent } from "./components/footer/bottomFooter.component";
import { MainContainerComponent} from './components/mainContainer/mainContainer.component';
import { BandCardComponent} from './components/bandCard/bandCard.component';
import { ManageCardComponent} from './components/manageCard/manageCard.component';
import { VideoPlayer} from "./components/player/videoPlayer.component";

const routes = [
  { path: "main", component: MainContainerComponent },
  { path: "", component: MainContainerComponent },
  { path: "manage", component: ManageComponent },
  { path: "profile/:id", component: ProfileComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    HighlightDirective,
    ImgSourceDirective,
    TopHeaderComponent,
    BottomFooterComponent,
    MainContainerComponent,
    BandCardComponent,
    ManageCardComponent,
    VideoPlayer,
    ProfileComponent,
    NotFoundComponent,
    ManageComponent
  ],
  providers: [UsesrService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
