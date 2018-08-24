import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Plugins
import { HttpClientModule } from '@angular/common/http'

// Services
import { StockService } from './services/stock.service';
import { SummaryComponent } from './components/summary/summary.component'

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ 
    StockService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
