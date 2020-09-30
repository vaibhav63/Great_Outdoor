import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GrowthReportComponent } from './components/dashboard/growth-report/growth-report.component';
import { ProductOrdersComponent } from './components/dashboard/product-orders/product-orders.component';
import { ProductComponent } from './components/dashboard/product/product.component';
import { SalesReportComponent } from './components/dashboard/sales-report/sales-report.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'product',component:ProductComponent},
    {path:'sales_report',component:SalesReportComponent},
    {path:'growth_report',component:GrowthReportComponent},
    {path:'order',component:ProductOrdersComponent}
  ]},
  {path:'home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
