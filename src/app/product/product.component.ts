import { Component, OnInit } from '@angular/core';
import {ProductService} from './productservice';
import {product} from './product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  styles:[`
  .box {
      background-color: var(--surface-e);
      text-align: center;
      padding-top: 1rem;
      padding-bottom: 1rem;
      border-radius: 4px;
      box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
  }
`]
})
export class ProductComponent implements OnInit {
  products!: product[];
	responsiveOptions=[{}];

	constructor(private productService: ProductService,private router: Router) {
		this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
	}

	ngOnInit() {
		// this.productService.getProductsSmall().then(products => {
		// 	this.products = products;
    //   console.log(products)
		// });
    }
    // ngAfterViewInit() {
    //   (document.querySelector('body.bgcolor') as HTMLElement).style.background = 'none';
    // }

    // gotopage(id: string) {
    //   this.router.navigate(['product/'+id]);
    // }

}
