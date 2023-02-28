import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUrlComponent } from './create-url/create-url.component';
import { UrlDetailsComponent } from './url-details/url-details.component';
import { UrlListComponent } from './url-list/url-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UrlListComponent,
    CreateUrlComponent,
    UrlDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
