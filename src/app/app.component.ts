import { Component, OnInit } from '@angular/core';
import { products } from './products';
import IProduct from './models/IProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  public title = '<< our products >>';
  public products: IProduct[];
  constructor() {
    this.products = products;
  }
  ngOnInit(){
    
  }
}
