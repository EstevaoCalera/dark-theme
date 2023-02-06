import { Component, OnInit } from '@angular/core';

// Enums
import { ETheme } from '../../enums/ETheme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public icon: string = ETheme.ICON_MOON;
  public textTheme: string = ETheme.TEXT_MOON;

  constructor() { }

  ngOnInit(): void { }

  public toggle() {
    const theme = document.body.classList.toggle('dark-theme');

    if (theme) {
      this.textTheme = ETheme.TEXT_SUN;
      this.icon = ETheme.ICON_SUN;
    } else {
      this.textTheme = ETheme.TEXT_MOON;
      this.icon = ETheme.ICON_MOON;
    }
  }
}