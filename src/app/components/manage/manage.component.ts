import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})

/**
 * Manage controller component
 * 
 */

export class ManageComponent implements OnInit {
  // Array de simbolos
  symbols: Array<String>
  // Input
  stock: string;

  constructor( private service: StockService) {
    this.symbols = service.get();
   }

   add() {
     this.symbols = this.service.add(this.stock.toUpperCase());
     this.stock = '';
   }

   remove(symbol) {
    this.symbols = this.service.remove(symbol);
   }

  ngOnInit() {
  }

}
