import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { PaginationComponent } from '../../../../shared/ui/pagination/pagination.component';
import { LocationsFacade } from '../../data-access/locations-facade.service';
import { LocationCardComponent } from '../../ui/location-card/location-card.component';

@Component({
  selector: 'app-locations-page',
  standalone: true,
  imports: [CommonModule, LocationCardComponent, PaginationComponent],
  templateUrl: './locations-page.component.html',
})
export class LocationsPageComponent implements OnInit {
  protected readonly facade = inject(LocationsFacade);

  ngOnInit(): void {
    this.facade.loadLocations(1);
  }

  onPageChange(page: number): void {
    if (page < 1) return;
    this.facade.loadLocations(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
