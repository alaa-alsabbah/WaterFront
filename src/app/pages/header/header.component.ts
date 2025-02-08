import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  toggleSidebar() {
    document.getElementById('sidebar')?.classList.toggle('d-none');
  }
}
