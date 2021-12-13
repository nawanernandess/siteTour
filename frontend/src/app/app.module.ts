import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';


import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './site/home/home.component'
import { CadastroGuiaComponent } from './site/cadastro-guia-component/cadastro-guia.component';

import { ContentComponent } from './site/content/content.component';
import { ListaGuiaComponent } from './site/lista-guia-component/lista-guia.component';
import { UpdateRegistrationModalComponent } from './site/lista-guia-component/update-registration-modal/update-registration-modal.component';



@NgModule({
  declarations: [		
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CadastroGuiaComponent,
    ContentComponent,
    ListaGuiaComponent,

    UpdateRegistrationModalComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTableModule,
    ModalModule.forRoot(),
    MatDialogModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSortModule
  ],
  providers: [
    {provide : MAT_DIALOG_DATA, useValue : {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
