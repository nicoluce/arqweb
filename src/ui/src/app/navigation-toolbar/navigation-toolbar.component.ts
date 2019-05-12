import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-toolbar',
  templateUrl: './navigation-toolbar.component.html',
  styleUrls: ['./navigation-toolbar.component.sass']
})
export class NavigationToolbarComponent implements OnInit {
  appTitle = 'Map Ui';

  constructor() { }

  ngOnInit() {
  }

}
