import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navbar',
  styleUrls: [],
  templateUrl: './navbar.component.html',
  //providers: [AppService]
})

export class AppNavbarComponent implements OnInit {
  menus: any[];

  constructor(
    private appService: AppService,
  ) {
  }

  public ngOnInit () {
    this.appService.getMainMenus().then(menus => {
      this.menus = menus;
    });
  }
}