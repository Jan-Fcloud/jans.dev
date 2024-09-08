import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss']
})
export class RepoCardComponent {
  @Input() repoData: any;
}
