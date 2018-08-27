import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Plugins
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

// Services
import { StockService } from './services/stock.service';
import { SummaryComponent } from './components/summary/summary.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component'
import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DashboardComponent,
    ManageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutes
  ],
  providers: [ 
    StockService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
