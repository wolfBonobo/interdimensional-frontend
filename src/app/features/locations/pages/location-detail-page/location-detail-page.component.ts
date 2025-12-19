import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CharacterCardComponent } from '../../../characters/ui/character-card/character-card.component';
import { LocationsFacade } from '../../data-access/locations-facade.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, CharacterCardComponent],
  templateUrl: './location-detail-page.component.html',
})
export class LocationDetailPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  protected readonly facade = inject(LocationsFacade);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.facade.loadLocationWithResidents(id);
    }
  }
}
