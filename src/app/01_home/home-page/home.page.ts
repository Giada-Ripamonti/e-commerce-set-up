import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  bannerPath: string = "assets/imgs/home-page-banner.jpg";
  planetbPath: string = "assets/imgs/planet-b.jpg";
  imgList: [string, string, string] = ["assets/imgs/img-02.jpg","assets/imgs/img-03.jpg","assets/imgs/img-04.jpg"] ;

  constructor() { }

  ngOnInit(): void {
  }

}
