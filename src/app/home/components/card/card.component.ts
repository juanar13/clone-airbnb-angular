import { Component, OnInit, Input } from '@angular/core';
import { IExperience } from '../../../shared/models/experience.model';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() experience: IExperience;
  constructor() { }

  ngOnInit(): void {
  }


}
