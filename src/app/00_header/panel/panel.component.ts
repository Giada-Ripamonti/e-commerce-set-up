import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  logged: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.authSubject.subscribe(val => {
      if (val !== null) {
        this.logged = true
      } else {
        this.logged = false
      }
    })
  }

}
