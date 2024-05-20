import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgetComponent } from './auth/forget/forget.component';
import { HomeComponent } from './FE/page/home/home.component';
import { ShopComponent } from './FE/page/shop/shop.component';
import { PaginationComponent } from './FE/shares/pagination/pagination.component';
import { ProfileComponent } from './FE/page/profile/profile.component';
import { MyCartComponent } from './FE/page/my-cart/my-cart.component';
import { DetailProductComponent } from './FE/page/detail-product/detail-product.component';
import { BEProductComponent } from './BE/BE-pages/be-product/be-product.component';
import { BeCategoryComponent } from './BE/BE-pages/be-category/be-category.component';
import { BeCourtComponent } from './BE/BE-pages/be-court/be-court.component';
import { BEPurchaseComponent } from './BE/BE-pages/be-purchase/be-purchase.component';
import { BESupplierComponent } from './BE/BE-pages/be-supplier/be-supplier.component';
import { BESaleComponent } from './BE/BE-pages/be-sale/be-sale.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'forget',
    component: ForgetComponent,
  },
  {
    path: 'app-shop',
    component: ShopComponent,
  },
  {
    path: 'pagination',
    component: PaginationComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'app-my-cart',
    component: MyCartComponent,
  },
  {
    path: 'app-detail-product',
    component: DetailProductComponent,
  },
  {
    path: 'backend/product',
    component: BEProductComponent,
  },
  {
    path: 'backend/category',
    component: BeCategoryComponent,
  },
  {
    path: 'backend/court',
    component: BeCourtComponent,
  },
  {
    path: 'backend/purchase',
    component: BEPurchaseComponent,
  },
  {
    path: 'backend/supplier',
    component: BESupplierComponent,
  },
  {
    path: 'backend/sale',
    component: BESaleComponent,
  },
];
