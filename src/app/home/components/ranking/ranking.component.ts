import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/services/experience/experience.service';
import { IExperience } from 'src/app/shared/models/experience.model';


@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  public top5: Array<IExperience>;

  constructor(
    private experienceService: ExperienceService
    ) {}

  ngOnInit(): void {
    this.getTopExperiences();
  }

  private getTopExperiences(): void {
    this.experienceService.getTop5().subscribe(response => {
      this.top5 = response.top5;
      console.log(this.top5)
    });
  }

}
