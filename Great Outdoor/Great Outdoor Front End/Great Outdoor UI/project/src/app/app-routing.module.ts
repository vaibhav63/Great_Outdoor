import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GrowthReportComponent } from './components/dashboard/growth-report/growth-report.component';
import { ProductManagementComponent } from './components/dashboard/product-management/product-management.component';
import { ProductOrdersComponent } from './components/dashboard/product-orders/product-orders.component';
import { SalesReportComponent } from './components/dashboard/sales-report/sales-report.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'manage_products', component: ProductManagementComponent },
      { path: 'sales_report', component: SalesReportComponent },
      { path: 'growth_report', component: GrowthReportComponent },
      { path: 'order', component: ProductOrdersComponent }
    ]
  },
  { path: 'cart', component: CartComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
