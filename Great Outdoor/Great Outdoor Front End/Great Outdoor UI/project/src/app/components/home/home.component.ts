import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductComponent } from '../product/product.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carouselInfo = [
    {
      imageURL: "https://goldwallpapers.com/uploads/posts/fashion-wallpaper/fashion_wallpaper_001.jpg",
    },
    {

      imageURL: "https://www.pixelstalk.net/wp-content/uploads/2016/10/Kyrie-Irving-Wallpaper-Free-Download.jpg",

    },
    {
      imageURL: "https://files.wallpaperpass.com/2019/10/food%20wallpaper%20188%20-%202560x1600.png",

    },
    {
      imageURL: "https://mrgadget.com.au/wp-content/uploads/Desk-Cable-Management-Gadgets-To-Keep-You-Organised.jpg",

    }];

  categories = [{
    imageURL: "https://wallpapercave.com/wp/wp4810853.jpg",
    category: "MOBILE",
    items: [{
      id: '1', name: 'IPhone', price: 120, color: 'Black', category: 'Mobile',
      quantity: 20, manufacturer: 'Apple', specification: 'Dual Camera,Liquid Retina,6.1 inch Display',
      image: "/assets/images/iphone.png"
    },
    {
      id: '2', name: 'One Plus Nord', price: 300, color: 'Golden', category: 'Mobile',
      quantity: 2, manufacturer: 'One Plus', specification: 'Dual Camera,Liquid Retina,6.1 inch Display',
      image: "/assets/images/one_plus.png"
    },
    {
      id: '3', name: 'Oppo F17 Pro', price: 3440, color: 'Red', category: 'Mobile',
      quantity: 5, manufacturer: 'Guangdong Oppo', specification: 'Dual Camera,Liquid Retina,6.1 inch Display',
      image: "/assets/images/oppo.png"
    },
    {
      id: '4', name: 'Samsung S20', price: 2140, color: 'White', category: 'Mobile',
      quantity: 15, manufacturer: 'Samsung', specification: 'Dual Camera,Liquid Retina,6.1 inch Display',
      image: "/assets/images/samsung.png"
    }]
  },
  {
    imageURL: "https://www.hdwallback.net/wp-content/uploads/2015/10/jennifer-lawrence-desktop-images.jpg",
    category: "CLOTHES",
    items: [
      { image: "/assets/images/hoody.png" },
      { image: "/assets/images/waraza_muffler.png" },
      { image: "/assets/images/denim_jacket.png" },
      { image: "/assets/images/levi_t-shirt.png" },
      { image: "/assets/images/chuck_taylor_sneakers.png" }
    ]
  },
  {
    imageURL: "https://all4desktop.com/data_images/original/4235841-nba-wallpaper.jpg",
    category: "SPORTS",
    items: [
      { image: "/assets/images/nike_flytrap.png" },
      { image: "/assets/images/nike_jersey.png" },
      { image: "/assets/images/nivia_basketball.png" },
      { image: "/assets/images/panther_skey-board.png" }
    ]
  },
  {
    imageURL: " https://wallpapermemory.com/uploads/339/vegetables-wallpaper-full-hd-1920x1080-114842.jpg",
    category: "GROCERY",
    items: [
      { image: "/assets/images/maggy.png" },
      { image: "/assets/images/pepsi.png" },
      { image: "/assets/images/vegetables.png" },
      { image: "/assets/images/ashirvad_ata.png" }
    ]
  }];



  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
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

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }


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


