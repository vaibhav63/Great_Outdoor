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
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ProductOrdersComponent } from './components/dashboard/product-orders/product-orders.component';
import { ProductService } from './service/product.service';
import { OrderService } from './service/order.service';
import { CartService } from './service/cart.service';
import { ProductManagementComponent } from './components/dashboard/product-management/product-management.component';
import { ProductComponent } from './components/product/product.component';
import { PaymentGatewayComponent } from './components/payment-gateway/payment-gateway.component';
import { ProductCommunicationService } from './communication/product-communication.service';
import { OrderCommunicationService } from './communication/order-communication.service';
import { CartCommunicationService } from './communication/cart-communication.service';
import { GrowthReportCommunicationService } from './communication/growth-report-communication.service';
import { SalesReportCommunicationService } from './communication/sales-report-communication.service';
import { HttpClientModule } from '@angular/common/http';
import { SalesReportService } from './service/sales-report.service';
import { GrowthReportService } from './service/growth-report.service';
import { ProductFilterPipe } from './pipe/product-filter.pipe';
import { HandleErrorService} from './handle_error/handle-error.service';
import { AddresscreationComponent } from './components/user-management/customeroperations/addresscreation/addresscreation.component';
import { UpdateaddrComponent } from './components/user-management/customeroperations/updateaddr/updateaddr.component';
import { DeleteaddrComponent } from './components/user-management/customeroperations/deleteaddr/deleteaddr.component';
import { AdminoperationsComponent} from './components/user-management/adminoperations/adminoperations.component';
import { CustomeroperationsComponent } from './components/user-management/customeroperations/customeroperations.component';
import { LoginComponent } from './components/user-management/login/login.component';
import { SignupComponent } from './components/user-management/signup/signup.component';
import { AddressService} from './service/address.service';
import { UserService} from './service/user.service';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { NotificationService} from './service/notification.service';
import {AddressManagementGuardService } from './auth_guard/address-management-guard.service';
import {DashboardGuardService } from './auth_guard/dashoard-guard.service';

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
    PaymentGatewayComponent,
    ProductFilterPipe,
    AddresscreationComponent,
    UpdateaddrComponent,
    DeleteaddrComponent,
    AdminoperationsComponent,
    CustomeroperationsComponent,
    LoginComponent,
    SignupComponent,
    UserManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService, OrderService, CartService, ProductCommunicationService,
    CartCommunicationService, GrowthReportCommunicationService,
    OrderCommunicationService, SalesReportCommunicationService,
    SalesReportService, GrowthReportService,HandleErrorService,
    AddressService,UserService, NotificationService,AddressManagementGuardService,
    DashboardGuardService],
  bootstrap: [AppComponent],
  entryComponents: [EditProductComponent, ProductComponent, PaymentGatewayComponent]
})
export class AppModule { }
