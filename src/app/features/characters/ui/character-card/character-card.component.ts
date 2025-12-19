// src/app/features/characters/ui/character-card/character-card.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Character } from '../../domain/character';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css',
})
export class CharacterCardComponent {
  /**
   * The character data to display.
   * Received from the Parent (Container).
   */
  @Input({ required: true }) character!: Character;
}
