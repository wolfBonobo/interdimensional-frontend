import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { PaginationComponent } from '../../../../shared/ui/pagination/pagination.component';
import { CharactersFacade } from '../../data-access/characters-facade.service';
import { CharacterCardComponent } from '../../ui/character-card/character-card.component';

@Component({
  selector: 'app-characters-page',
  standalone: true,
  imports: [CommonModule, CharacterCardComponent, PaginationComponent],
  templateUrl: './characters-page.component.html',
  styleUrl: './characters-page.component.css',
})
export class CharactersPageComponent implements OnInit {
  protected readonly facade = inject(CharactersFacade);

  ngOnInit(): void {
    this.facade.loadCharacters(1);
  }
  onPageChange(page: number): void {
    if (page < 1) return;

    this.facade.loadCharacters(page);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
