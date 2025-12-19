import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Episode } from '../../domain/episode';

@Component({
  selector: 'app-episode-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './episode-card.component.html',
})
export class EpisodeCardComponent {
  @Input({ required: true }) episode!: Episode;
}
