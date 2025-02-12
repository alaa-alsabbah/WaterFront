import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [ CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  homeSubmenuOpen = false;
  pageSubmenuOpen = false;
  isCollapsed = false;

  toggleSubmenu(menu: string) {
    if (menu === 'homeSubmenu') {
      this.homeSubmenuOpen = !this.homeSubmenuOpen;
    } else if (menu === 'pageSubmenu') {
      this.pageSubmenuOpen = !this.pageSubmenuOpen;
    }
  }

  toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      this.isCollapsed = !this.isCollapsed;
      sidebar.classList.toggle('collapsed');
    }
  }
}
