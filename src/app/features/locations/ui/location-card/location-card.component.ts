import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from '../../domain/location';

@Component({
  selector: 'app-location-card',
  standalone: true,

  imports: [CommonModule, RouterLink],
  templateUrl: './location-card.component.html',
  styleUrl: './location-card.component.css',
})
export class LocationCardComponent {
  @Input({ required: true }) location!: Location;
}
