import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  bannerPath: string = "assets/imgs/home-page-banner.jpg";
  planetbPath: string = "assets/imgs/planet-b.jpg";
  imgList: [string, string, string] = ["assets/imgs/dress2.jpg","assets/imgs/dress3.jpg","assets/imgs/dress4.jpg"] ;

  constructor() { }

  ngOnInit(): void {
  }

}
