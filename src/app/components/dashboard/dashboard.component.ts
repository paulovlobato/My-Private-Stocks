import { Component, OnInit } from '@angular/core';
import { StockInterface, StockService } from '../../services/stock.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // Array de stocks
  stocks: Array<StockInterface>;
  // Array de strings
  symbols: Array<string>;

  constructor(private service: StockService) {
    // Importa os simbolos
    this.symbols = service.get();
   }

  ngOnInit() {
    // Chama os simbolos p/ load
    this.service.load(this.symbols).subscribe(stocks => {
      this.stocks = stocks;
    });
  }

}
