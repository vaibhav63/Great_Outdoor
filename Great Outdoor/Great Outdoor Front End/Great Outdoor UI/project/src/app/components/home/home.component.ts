import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carouselInfo = [
    {
      imageURL: "https://goldwallpapers.com/uploads/posts/fashion-wallpaper/fashion_wallpaper_001.jpg",
      category: `<p>OFFER</p>`,
      highlight: `<div class="display-3">Gourmet to Go</div>`,
      description: `<h4 class="lead">The DLF Mall brings you the very best selection of homegrown and globally<br> inspired restaurants with the Gourmet to Go service.</h4>`
    },
    {

      imageURL: "https://www.pixelstalk.net/wp-content/uploads/2016/10/Kyrie-Irving-Wallpaper-Free-Download.jpg",
      category: `<p>EVENT</p>`,
      highlight: `<div class="display-3">Spend And Win AED 10,000<br> Emaar Gift Cards</div>`,
      description: `<h4 class="lead">Get ready for Dubai Summer Surprises at The Dubai Mall.<br>
     Spend a minimum of AED 300* at The Dubai Mall for a chance to WIN one <br>of two AED 10,000* Emaar Gift Cards every weekend.</h4>`
    },
    {
      imageURL: "https://files.wallpaperpass.com/2019/10/food%20wallpaper%20188%20-%202560x1600.png",
      category: `<p>EVENT</p>`,
      highlight: `<div class="display-3">Spend And Win AED 10,000<br> Emaar Gift Cards</div>`,
      description: `<h4 class="lead">Get ready for Dubai Summer Surprises at The Dubai Mall.<br>
     Spend a minimum of AED 300* at The Dubai Mall for a chance to WIN one <br>of two AED 10,000* Emaar Gift Cards every weekend.</h4>`
    },
    {
      imageURL: "https://mrgadget.com.au/wp-content/uploads/Desk-Cable-Management-Gadgets-To-Keep-You-Organised.jpg",
      category: `<p>OFFER</p>`,
      highlight: `<div class="display-3">Let The DLF Mall Come To <br> You !</div>`,
      description: `<h4>Shop for your favorite brands at The DLF Mall from the comfort of your home<br> on noon.com, with delivery across the UAE </h4>`
    }];

  categories = [{
    imageURL: "https://wallpapercave.com/wp/wp4810853.jpg",
    category: "MOBILE",
    items: [
      "/assets/images/iphone.png",
      "/assets/images/one_plus.png",
      "/assets/images/oppo.png",
      "/assets/images/samsung.png"
    ]
  },
  {
    imageURL: "https://www.hdwallback.net/wp-content/uploads/2015/10/jennifer-lawrence-desktop-images.jpg",
    category: "CLOTHES",
    items: [
      "/assets/images/hoody.png",
      "/assets/images/waraza_muffler.png",
      "/assets/images/denim_jacket.png",
      "/assets/images/levi_t-shirt.png",
      "/assets/images/chuck_taylor_sneakers.png"
    ]
  },
  {
    imageURL: "https://all4desktop.com/data_images/original/4235841-nba-wallpaper.jpg",
    category: "SPORTS",
    items: [
      "/assets/images/nike_flytrap.png",
      "/assets/images/nike_jersey.png",
      "/assets/images/nivia_basketball.png",
      "/assets/images/panther_skey-board.png"
    ]
  },
  {
    imageURL: " https://wallpapermemory.com/uploads/339/vegetables-wallpaper-full-hd-1920x1080-114842.jpg",
    category: "GROCERY",
    items: [
      "/assets/images/maggy.png",
      "/assets/images/pepsi.png",
      "/assets/images/vegetables.png",
      "/assets/images/ashirvad_ata.png"
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

  constructor() { }

  ngOnInit(): void {
  }

}


