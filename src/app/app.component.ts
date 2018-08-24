import { Component } from '@angular/core';
import { StockInterface, StockService } from './services/stock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myPrivateStocks';

  stocks: Array<StockInterface>;

  constructor(service: StockService)   {
    service.load(['AAPL']).subscribe(stocks => {
      this.stocks = stocks;
    });
  }
}
