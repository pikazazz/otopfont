import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { VRComponent } from './vr/vr.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  {
    path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
  }, // redirect to `first-component`
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then((m) => m.ProductModule)
  },
  { path: 'vr', component: VRComponent },
  { path: '**', component: PageNotFoundComponentComponent },  // Wildcard route for a 404 page
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
