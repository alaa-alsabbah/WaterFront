import { Component } from '@angular/core';
import { HeaderComponent } from "../pages/header/header.component";
import { SidebarComponent } from "../pages/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';
import { ContentComponent } from "../pages/content/content.component";

@Component({
  selector: 'app-home',
  imports: [RouterOutlet,HeaderComponent, SidebarComponent,ContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
