import { Component, OnInit } from '@angular/core';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { Post,postData } from 'src/public/posts/posts';

@Component({
  standalone: true,
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  imports: [BlogCardComponent]
})
export class BlogComponent implements OnInit {
  posts : Post[] = postData.data;

  constructor() { 
  }

  ngOnInit(): void {
  }
}
