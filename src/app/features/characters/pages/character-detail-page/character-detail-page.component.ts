import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CharactersFacade } from '../../data-access/characters-facade.service';

@Component({
  selector: 'app-character-detail-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './character-detail-page.component.html',
  styleUrl: './character-detail-page.component.css',
})
export class CharacterDetailPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  protected readonly facade = inject(CharactersFacade);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.facade.loadCharacterWithEpisodes(id);
    }
  }
}
