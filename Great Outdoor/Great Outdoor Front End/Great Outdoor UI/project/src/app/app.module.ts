import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SalesReportComponent } from './components/dashboard/sales-report/sales-report.component';
import { GrowthReportComponent } from './components/dashboard/growth-report/growth-report.component';
import { EditProductComponent } from './components/dashboard/edit-product/edit-product.component';
import { ReactiveFormsModule} from '@angular/forms';
import { ProductOrdersComponent } from './components/dashboard/product-orders/product-orders.component';
import { ProductService } from './service/product.service';
import { OrderService } from './service/order.service';
import { CartService } from './service/cart.service';
import { ProductManagementComponent } from './components/dashboard/product-management/product-management.component';
import { ProductComponent } from './components/product/product.component';
import { PaymentGatewayComponent } from './components/payment-gateway/payment-gateway.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    DashboardComponent,
    SalesReportComponent,
    GrowthReportComponent,
    EditProductComponent,
    ProductOrdersComponent,
    ProductManagementComponent,
    ProductComponent,
    PaymentGatewayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule,
    ReactiveFormsModule
  ],
  providers: [ProductService,OrderService,CartService],
  bootstrap: [AppComponent],
  entryComponents:[EditProductComponent,ProductComponent,PaymentGatewayComponent]
})
export class AppModule { }
