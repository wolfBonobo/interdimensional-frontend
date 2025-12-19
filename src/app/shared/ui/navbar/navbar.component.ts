// src/app/shared/ui/navbar/navbar.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  readonly navLinks = [
    { path: '/characters', label: 'Characters', icon: '👤' },
    { path: '/locations', label: 'Locations', icon: '📍' },
    { path: '/episodes', label: 'Episodes', icon: '🎬' },
  ];
}
