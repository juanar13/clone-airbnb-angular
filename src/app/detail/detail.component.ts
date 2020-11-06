import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IExperience } from '../shared/models/experience.model';
import { ExperienceService } from './../services/experience/experience.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public detail: IExperience;

  constructor(
    private route: ActivatedRoute,
    private experienceService: ExperienceService
    ) { }

  ngOnInit(): void {
    this.getParams();
  }
  
  private getParams(): void {
    this.route.params.subscribe(params => {
      const id = String(params._id);
      this.getDetail(id);
    });
  }

  private getDetail(id: string): void {
    this.experienceService.getExperienceById(id).subscribe(response => {
      this.detail = response.experience;
    });
  }

}
