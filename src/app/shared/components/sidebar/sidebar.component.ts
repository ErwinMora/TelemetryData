import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(public authService: AuthService) { }
  sidebarNav = false;

  openSidebar() {
    this.sidebarNav = !this.sidebarNav;
  }

  logout() {
    this.authService.logout();
  }
}
