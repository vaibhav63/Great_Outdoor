import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from 'src/app/service/product.service';
import { ProductComponent } from '../product/product.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  carouselInfo = [
    { imageURL: "https://goldwallpapers.com/uploads/posts/fashion-wallpaper/fashion_wallpaper_001.jpg" },
    { imageURL: "https://www.pixelstalk.net/wp-content/uploads/2016/10/Kyrie-Irving-Wallpaper-Free-Download.jpg" },
    { imageURL: "https://files.wallpaperpass.com/2019/10/food%20wallpaper%20188%20-%202560x1600.png" },
    { imageURL: "https://mrgadget.com.au/wp-content/uploads/Desk-Cable-Management-Gadgets-To-Keep-You-Organised.jpg" }
  ];

  categories = [{
    imageURL: "https://wallpapercave.com/wp/wp4810853.jpg",
    category: "MOBILE"
  },
  {
    imageURL: "https://www.hdwallback.net/wp-content/uploads/2015/10/jennifer-lawrence-desktop-images.jpg",
    category: "CLOTHES"
  },
  {
    imageURL: "https://all4desktop.com/data_images/original/4235841-nba-wallpaper.jpg",
    category: "SPORTS"
  },
  {
    imageURL: " https://wallpapermemory.com/uploads/339/vegetables-wallpaper-full-hd-1920x1080-114842.jpg",
    category: "GROCERY"
  }];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: false,
    autoplayTimeout: 1200,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 4
      },
      400: {
        items: 4
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  constructor(private dialog: MatDialog, public service: ProductService) {
    service.searchProduct("");
  }

  // opening a dialog box for product where all the details about product is going
  // to be shown
  goToProduct(item) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "75%";
    dialogConfig.backdropClass = 'backdropBackground';
    dialogConfig.panelClass = 'custom-dialog-container';
    dialogConfig.data = { product: item };
    this.dialog.open(ProductComponent, dialogConfig);
  }
}


