import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CardComponent } from './components/card/card.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { AvatarComponent } from './components/avatar/avatar.component';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatSnackBarModule,
    MatToolbarModule,
  ],
  declarations: [CardComponent, SwiperComponent, AvatarComponent],
  exports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    CardComponent,
    SwiperComponent,
    AvatarComponent,
  ],
})
export class SharedModule {}
