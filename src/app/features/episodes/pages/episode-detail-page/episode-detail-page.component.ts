import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CharacterCardComponent } from '../../../characters/ui/character-card/character-card.component';
import { EpisodesFacade } from '../../data-access/episodes-facade.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, CharacterCardComponent],
  templateUrl: './episode-detail-page.component.html',
})
export class EpisodeDetailPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  protected readonly facade = inject(EpisodesFacade);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.facade.loadEpisodeWithCharacters(id);
    }
  }
}
