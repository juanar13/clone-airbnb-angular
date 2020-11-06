import { Component, OnInit, Input } from '@angular/core';
import { IExperience } from 'src/app/shared/models/experience.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() experience: IExperience;

  private router: Router;

  constructor() { }

  ngOnInit(): void {
  }

}
