import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare, faStar, faCircle } from '@fortawesome/free-solid-svg-icons';
import { NgStyle } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss'],
  imports: [FontAwesomeModule, NgStyle]
})
export class RepoCardComponent {

  langColors : {[key: string]: string} = {
    'C#': "#178600",
    'C++': "#f34b7d",
    'Python' : "#3572A5",
    'TypeScript' : "#3178c6",
    'JavaScript' : "#f1e05a",
    'Rust' : "#dea584",
    'PHP' : "#4F5D95",
    'HTML' : "#e34c26",
    'CSS' : "#563d7c",
  }

  iStar = faStar;
  iExternal = faArrowUpRightFromSquare;
  iCircle = faCircle;

  dynamicColor() : string{
    return this.langColors[this.repoData.language] || "#000";
  }
  @Input() repoData: any;
}
