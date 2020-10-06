import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AddressManagementGuardService } from './auth_guard/address-management-guard.service';
import { DashboardGuardService } from './auth_guard/dashoard-guard.service';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GrowthReportComponent } from './components/dashboard/growth-report/growth-report.component';
import { ProductManagementComponent } from './components/dashboard/product-management/product-management.component';
import { ProductOrdersComponent } from './components/dashboard/product-orders/product-orders.component';
import { SalesReportComponent } from './components/dashboard/sales-report/sales-report.component';
import { HomeComponent } from './components/home/home.component';
import { AddressCreationComponent } from './components/user-management/customer-operations/address-creation/address-creation.component';
import { CustomerOperationsComponent } from './components/user-management/customer-operations/customer-operations.component';
import { DeleteAddressComponent } from './components/user-management/customer-operations/delete-address/delete-address.component';
import { UpdateAddressComponent } from './components/user-management/customer-operations/update-address/update-address.component';
import { LoginComponent } from './components/user-management/login/login.component';
import { SignupComponent } from './components/user-management/signup/signup.component';
import { UserManagementComponent } from './components/user-management/user-management.component';

const routerOptions: ExtraOptions = {

  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'mobile', redirectTo: '/home#MOBILE' },
  { path: 'clothes', redirectTo: '/home#CLOTHES' },
  { path: 'sports', redirectTo: '/home#SPORTS' },
  { path: 'grocery', redirectTo: '/home#GROCERY' },
  {
    path: 'dashboard', component: DashboardComponent
    , canActivate: [DashboardGuardService], children: [
      { path: 'manage_products', component: ProductManagementComponent },
      { path: 'sales_report', component: SalesReportComponent },
      { path: 'growth_report', component: GrowthReportComponent },
      { path: 'order', component: ProductOrdersComponent }
    ]
  },
  { path: 'cart', component: CartComponent },
  {
    path: 'user', component: UserManagementComponent, children: [
      { path: 'app-login', component: LoginComponent },
      { path: 'app-signup', component: SignupComponent }
    ]
  },
  {
    path: 'app-customeroperations', component: CustomerOperationsComponent
    , canActivate: [AddressManagementGuardService], children: [
      { path: 'app-addresscreation', component: AddressCreationComponent },
      { path: 'app-deleteaddr', component: DeleteAddressComponent },
      { path: 'app-updateaddr', component: UpdateAddressComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
