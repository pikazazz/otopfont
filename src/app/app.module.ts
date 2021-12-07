import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AccordionModule} from 'primeng/accordion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import {TabMenuModule} from 'primeng/tabmenu';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
// import { ProductComponent } from './product/product.component';
import {PanelModule} from 'primeng/panel';
//import { HomeComponent } from './home/home.component';
import { VRComponent } from './vr/vr.component';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {NewsService} from './home/newsservice';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product/productservice';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    MenuButtonComponent,
    PageNotFoundComponentComponent,
    // ProductComponent,
    //HomeComponent,
    VRComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    ButtonModule,
    AccordionModule,
    PanelModule,
    TabMenuModule,
    CardModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [NewsService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
