import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductComponent } from './product.component';
import { CarouselModule } from 'primeng/carousel';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { TabMenuModule } from 'primeng/tabmenu';
import { CardModule } from 'primeng/card';
import { ProductIndexComponent } from './component/product-index/product-index.component';


@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductComponent,
    ProductIndexComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    CarouselModule,
    HttpClientModule,
    ButtonModule,
    AccordionModule,
    PanelModule,
    TabMenuModule,
    CardModule,
  ]
})
export class ProductModule { }
