import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare, faCircle } from '@fortawesome/free-solid-svg-icons';

import { Repo } from 'src/public/repos';

@Component({
  standalone: true,
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss'],
  imports: [FontAwesomeModule, NgStyle]
})
export class RepoCardComponent {

  iExternal = faArrowUpRightFromSquare;
  iCircle = faCircle;

  @Input()
  repoData!: Repo;

}
