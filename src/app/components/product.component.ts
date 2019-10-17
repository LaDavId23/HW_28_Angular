import { Component, Input, OnInit } from "@angular/core";
import IProduct from 'src/app/models/IProduct';

@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
    @Input() products: Array<IProduct>;
    @Input() product: IProduct;
    @Input() index: number;
    ngOnInit() {

    }
    remove(index: number): void {
        this.products.splice(index, 1);
    }
}