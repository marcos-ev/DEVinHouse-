import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { SerieComponent } from './pages/serie/serie.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutfullScreenComponent } from './layout/full-screen/layoutfull-screen.component';
import { LayoutwithMenuComponent } from './layout/with-menu/layoutwith-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    SerieComponent,
    HeaderComponent,
    LoginComponent,
    LayoutfullScreenComponent,
    LayoutwithMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
