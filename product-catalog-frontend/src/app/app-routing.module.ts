import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

const routes: Routes = [ 
{ path: '', redirectTo: 'products', pathMatch: 'full' },
{ path: 'products', component: ProductListComponent },
{ path: 'details/:id', component: ProductDetailsComponent },
{ path: 'save', component:CreateProductComponent },
{ path: 'edit/:id',component:UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
