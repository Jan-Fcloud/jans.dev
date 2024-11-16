import { Component, Input } from '@angular/core';
import { Post } from 'src/public/posts/posts';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss'
})
export class BlogCardComponent {
  @Input() post!: Post;
}
