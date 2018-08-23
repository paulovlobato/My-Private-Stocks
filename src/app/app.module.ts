import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Plugins
import { HttpClientModule } from '@angular/common/http'

// Services
import { StockService } from './services/stock.service'

@NgModule({
  declarations: [
    AppComponent
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
