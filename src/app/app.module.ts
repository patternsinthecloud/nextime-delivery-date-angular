import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import 'qpilot-delivery-date';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SiteComponent } from 'src/app/site/site.component';
import { FormsModule } from '@angular/forms';
import { Site2Component } from 'src/app/site2/site2.component';
import { DateSuffix } from 'src/app/date-suffix.pipe';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { NewSiteComponent } from 'src/app/new-site/new-site.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    Site2Component,
    DateSuffix,
    NewSiteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgxJsonViewerModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
