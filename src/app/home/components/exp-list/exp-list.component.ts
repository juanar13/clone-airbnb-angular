import { Component, OnInit } from '@angular/core';
import { IExperience } from '../../../shared/models/experience.model';
import { ExperienceService } from '../../../services/experience/experience.service';

@Component({
  selector: 'app-exp-list',
  templateUrl: './exp-list.component.html',
  styleUrls: ['./exp-list.component.scss']
})
export class ExpListComponent implements OnInit {

  public experiences: Array<IExperience>;

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.getAllExperiences();
  }


  private getAllExperiences(): void {
    this.experienceService.getExperiences().subscribe(response => {
      this.experiences = response.experiences;
    });
  }
}
