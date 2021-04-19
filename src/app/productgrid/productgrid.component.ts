ProductCardComponent:
import {Component, Input} from '@angular/core';
import {Product} from './product';
@Component({
 selector: 'db-product-card',
 templateUrl: 'app/product/product-card.component.html',
 directives: [ROUTER_DIRECTIVES]
})
export class ProductCardComponent {
 @Input() products: Product[];
 setClasses(product: Product) {
return {
'card-danger': product.isSpecial,
'card-inverse': product.isSpecial
};
 }
 buy(product: Product) {
console.log('We bought', product.title);
 }
}
import {Component} from '@angular/core';
import {Product, getProducts} from './product';
@Component({
 selector: 'db-product-grid',
 templateUrl: 'app/product/product-grid.component.html'
})
export class ProductGridComponent {
 products: any = [];
 constructor() {
let index = 0;
let products: Product[] = getProducts();
let length = products.length;
this.products = [];
while (length) {
let row: Product[] = [];
if (length >= 3) {
for (let i = 0; i < 3; i++) {
row.push(products[index++]);
}
this.products.push(row);
length -= 3;
} else {
for (; length > 0; length--) {
row.push(products[index++]);
}
this.products.push(row);
}
}
 }
}
