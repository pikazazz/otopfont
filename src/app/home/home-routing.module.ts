import { HtmlParser } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDetailComponent } from './component/home-detail/home-detail.component';
import { HomeIndexComponent } from './component/home-index/home-index.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path:'',component:HomeComponent,children:[
    {path:'',component:HomeIndexComponent},
    {path:'detail/:id',component:HomeDetailComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
