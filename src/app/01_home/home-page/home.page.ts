import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  path: string = "assets/imgs/home-page-banner.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
