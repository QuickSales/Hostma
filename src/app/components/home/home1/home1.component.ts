import { Component,  HostListener, OnInit,   } from '@angular/core';

import SwiperCore , {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,

} from 'swiper';
interface image{
  src:string;
  id:string,

  offer:string,
  text:string,
  data:string,
  data1:string,
  data2:string,
}
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,

]);
@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss']
})
export class Home1Component implements OnInit{

  indexNumber = 1;
  slidesPerView!: 3;

  thumbsSwiper: unknown;

    setThumbsSwiper(swiper: unknown) {
      this.thumbsSwiper = swiper;
    }
    breakpoints = {
      640: { slidesPerView: 2, spaceBetween: 20 },
      768: { slidesPerView: 4, spaceBetween: 40 },
      1024: { slidesPerView: 4, spaceBetween: 50 },
    };
    breakPointsToggle!: boolean;
    breakpointChange() {
      this.breakPointsToggle = !this.breakPointsToggle;
      this.breakpoints = {
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 4, spaceBetween: 40 },
        1024: { slidesPerView: this.breakPointsToggle ? 7 : 5, spaceBetween: 50 },
      };
    }

  constructor(){

  }
  ngOnInit(): void {

  }

  slidesStore = [
    {
      id:"1",
      src: "./assets/images/profile/1.jpg",
      name:"Dhaval Patel",
      date:"12 Aug, 2022",
      text:"Efficiently innovate customized growth strategies whereas error-free paradigms. Monotonectally enhance stand-alone data with prospective innovation.",

    },
    {
      id:"2",
      src:"./assets/images/profile/3.jpg",
      name:"Navin Telsko",
      date:"12 Aug, 2022",
      text:"Consetetur diam voluptua justo eirmod sed dolor. Ipsum amet clita ut nonumy justo, dolore et dolor dolor clita dolor justo Lorem sanctus ipsum sea sit"

    },
    {
      id:"3",
      src:"./assets/images/profile/2.jpg",
      name:"Mosh",
      date:"16 Apr, 2022",
      text:"Tempor diam sed vero sed nonumy sed lorem gubergren amet. No no consetetur at duo duo sed et lorem dolor. Sea kasd gubergren voluptua lorem."
    },
    {
      id:"4",
      src: "./assets/images/profile/1.jpg",
      name:"Dhaval Patel",
      date:"12 Aug, 2022",
      text:" Efficiently innovate customized growth strategies whereas error-free paradigms. Monotonectally enhance stand-alone data with prospective innovation."
    },
    {
      id:"5",
      src:"./assets/images/profile/1.jpg",
      name:"Dhaval Patel",
      date:"12 Aug, 2022",
      text:" Efficiently innovate customized growth strategies whereas error-free paradigms. Monotonectally enhance stand-alone data with prospective innovation."
    },

  ];
  imageData :image[]= [
    {
      id:"1",
      src: "./assets/images/png/47.png",
      offer:"50% Off on Shared Hosting",
      text:"Get Your Business Online In An Affordable Way",
      data:"Power Packed With Features",
      data1:"Versatile On Applications",
      data2:"Money Back Guarantee",

    },
    {
      id:"2",
      offer:"30% Off on Windows Hosting",
      text:"Get Your Business Online In An Affordable Way",
      data:"Power Packed With Features",
      data1:"Versatile On Applications",
      data2:"Money Back Guarantee",
      src: "./assets/images/png/50.png",

    },
    {
      id:"3",
      offer:"20% Off on Domains",
      text:"Domain Price Starting at Just $179/ year ",
      data:"Power Packed With Features",
      data1:"Versatile On Applications",
      data2:"Money Back Guarantee",
      src: "./assets/images/png/2.png",
    },
    {
      id:"4",
      offer:"40% Off on VPS Hosting",
      text:"High-performance Servers for Faster Websites Applications",
      data:"Effordable Cost",
      data1:"Power Packed With Tools",
      data2:"Money Return Guarantee",
      src: "./assets/images/png/15.png",
    },
    {
      id:"5",
      offer:"60% Off on Cloud Hosting",
      text:"Get Your Business Online In An Affordable Way",
      data:"Powerful Cloud Environment",
      data1:"Hassle-free setup",
      data2:"Simplified Prepaid Billing",
      src: "./assets/images/png/55.png",
    },
    {
      id:"6",
      offer:"10% Off on SSL certificate",
      text:"All SSL Certificates provide the baseline encryption needed to keep your data your customers safe. Beyond encryption, choose the SSL solution that aligns best with your company goals",
      data:"Powerful Cloud Environment",
      data1:"Hassle-free setup",
      data2:"Simplified Prepaid Billing",
      src: "./assets/images/png/61.png",
    },

  ];
 images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  scrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;

  }
}
