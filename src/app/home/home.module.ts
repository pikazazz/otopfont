import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeIndexComponent } from './component/home-index/home-index.component';
import { HomeDetailComponent } from './component/home-detail/home-detail.component';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'primeng/carousel';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { TabMenuModule } from 'primeng/tabmenu';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    HomeIndexComponent,
    HomeDetailComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    HttpClientModule,
    ButtonModule,
    AccordionModule,
    PanelModule,
    TabMenuModule,
    CardModule,
  ]
})
export class HomeModule { }
