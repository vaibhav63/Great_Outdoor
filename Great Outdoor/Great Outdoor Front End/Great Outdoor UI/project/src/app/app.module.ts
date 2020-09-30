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
import { ProductComponent } from './components/dashboard/product/product.component';
import { SalesReportComponent } from './components/dashboard/sales-report/sales-report.component';
import { GrowthReportComponent } from './components/dashboard/growth-report/growth-report.component';
import { EditProductComponent } from './components/dashboard/edit-product/edit-product.component';
import { NotificationService } from './service/notification.service';
import { ReactiveFormsModule} from '@angular/forms';
import { ProductOrdersComponent } from './components/dashboard/product-orders/product-orders.component';
import { ProductService } from './service/product.service';
import { OrderService } from './service/order.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    DashboardComponent,
    ProductComponent,
    SalesReportComponent,
    GrowthReportComponent,
    EditProductComponent,
    ProductOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule,
    ReactiveFormsModule
  ],
  providers: [NotificationService,ProductService,OrderService],
  bootstrap: [AppComponent],
  entryComponents:[EditProductComponent]
})
export class AppModule { }
