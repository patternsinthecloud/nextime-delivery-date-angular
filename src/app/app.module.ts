import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import 'nextime-delivery-date';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SiteComponent } from 'src/app/site/site.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateSuffix } from 'src/app/date-suffix.pipe';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MOMENT_CONFIG } from 'src/config/moment.config';
import {
  RequestsDataService,
  SITES_DATA_SERVICE,
} from './site/data/requestData.service';

@NgModule({
  declarations: [AppComponent, SiteComponent, DateSuffix],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxJsonViewerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MOMENT_CONFIG },
    { provide: SITES_DATA_SERVICE, useClass: RequestsDataService },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
