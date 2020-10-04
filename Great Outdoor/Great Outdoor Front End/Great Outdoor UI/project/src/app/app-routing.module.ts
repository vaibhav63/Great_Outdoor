import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressManagementGuardService } from './auth_guard/address-management-guard.service';
import { DashboardGuardService } from './auth_guard/dashoard-guard.service';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GrowthReportComponent } from './components/dashboard/growth-report/growth-report.component';
import { ProductManagementComponent } from './components/dashboard/product-management/product-management.component';
import { ProductOrdersComponent } from './components/dashboard/product-orders/product-orders.component';
import { SalesReportComponent } from './components/dashboard/sales-report/sales-report.component';
import { HomeComponent } from './components/home/home.component';
import { AdminoperationsComponent } from './components/user-management/adminoperations/adminoperations.component';
import { AddresscreationComponent } from './components/user-management/customeroperations/addresscreation/addresscreation.component';
import { CustomeroperationsComponent } from './components/user-management/customeroperations/customeroperations.component';
import { DeleteaddrComponent } from './components/user-management/customeroperations/deleteaddr/deleteaddr.component';
import { UpdateaddrComponent } from './components/user-management/customeroperations/updateaddr/updateaddr.component';
import { LoginComponent } from './components/user-management/login/login.component';
import { SignupComponent } from './components/user-management/signup/signup.component';
import { UserManagementComponent } from './components/user-management/user-management.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'dashboard', component: DashboardComponent
    ,canActivate:[DashboardGuardService], children: [
      { path: 'manage_products', component: ProductManagementComponent },
      { path: 'sales_report', component: SalesReportComponent },
      { path: 'growth_report', component: GrowthReportComponent },
      { path: 'order', component: ProductOrdersComponent }
    ]
  },
  { path: 'cart', component: CartComponent },
  { path: 'user', component: UserManagementComponent,children:[
    {path:'app-login',component:LoginComponent},
    {path:'app-signup',component:SignupComponent}
  ]},
  {path:'app-adminoperations',component:AdminoperationsComponent},
  {path:'app-customeroperations',component:CustomeroperationsComponent
  ,canActivate:[AddressManagementGuardService],children:[
      {path:'app-addresscreation',component:AddresscreationComponent},
      {path:'app-deleteaddr',component:DeleteaddrComponent},
      {path:'app-updateaddr',component:UpdateaddrComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
