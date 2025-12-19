import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from '../../../../shared/ui/pagination/pagination.component';
import { EpisodesFacade } from '../../data-access/episodes-facade.service';

@Component({
  selector: 'app-episodes-page',
  standalone: true,
  imports: [CommonModule, RouterModule, PaginationComponent],
  templateUrl: './episodes-page.component.html',
  styleUrl: './episodes-page.component.css',
})
export class EpisodesPageComponent implements OnInit {
  protected readonly facade = inject(EpisodesFacade);

  ngOnInit(): void {
    this.facade.loadEpisodes(1);
  }
}
