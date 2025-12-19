import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeDetailPageComponent } from './episode-detail-page.component';

describe('EpisodeDetailPageComponent', () => {
  let component: EpisodeDetailPageComponent;
  let fixture: ComponentFixture<EpisodeDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpisodeDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpisodeDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
