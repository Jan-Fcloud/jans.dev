import { Component, inject, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare, faStar, faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss'],
  imports: [FontAwesomeModule, NgStyle]
})
export class RepoCardComponent {

  iStar = faStar;
  iExternal = faArrowUpRightFromSquare;
  iCircle = faCircle;

  @Input()
  repoData: any;
}
