import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../../product';
import { ProductService } from '../../productservice';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
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
export class ProductDetailComponent implements OnInit {
  products!: product[];
  dataProduct: any;
  data!: any;
	responsiveOptions=[{}];
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {

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

  ngOnInit(): void {
    this.productService.getProductsID(this.route.snapshot.paramMap.get('id')).then(products => {
			this.dataProduct = products;
      console.log(products)
		});
    this.viewDetail();
  }
  ngAfterViewInit() {
    (document.querySelector('body.bgcolor') as HTMLElement).style.background = 'none';
  }

  viewDetail(){
    this.productService.setView(this.route.snapshot.paramMap.get('id')).subscribe((res) => {
      console.log(res)
    })
  }
 convertText(text: any) {
    return this.data = this.sanitizer.bypassSecurityTrustHtml(text);
  }
  gotopage(id: string) {
    this.router.navigate(['/product/detail/'+id], );
  }
}
