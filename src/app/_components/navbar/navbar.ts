import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Icon } from '../../enums/icon';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  icon = Icon;
}
