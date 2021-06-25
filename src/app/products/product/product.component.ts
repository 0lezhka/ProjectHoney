import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/Product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;

  constructor() {
    this.product = {name: 'Black Honey', description: 'Black honey description', volume: 500};
  }

  ngOnInit(): void {
  }

}
