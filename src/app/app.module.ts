import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { MessageInputComponent } from './message-input/message-input.component';
import { DataTableComponent } from './data-table/data-table.component'

import { ServicesModule } from './services/service.module'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FormComponent,
    MessageInputComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServicesModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
