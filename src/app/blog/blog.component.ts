import { Component, OnInit } from '@angular/core';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { Post,postData } from 'src/public/posts';
import {SeoService} from "../seo.service";

@Component({
  standalone: true,
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  imports: [BlogCardComponent]
})
export class BlogComponent implements OnInit {
  posts : Post[] = postData.data;

  constructor(private seo: SeoService) {
  }

  ngOnInit(): void {
    this.seo.updateMetadata('Blog', 'This is the blog page');
    this.seo.setCanonicalURL('http://localhost:4000/blog');
  }
}
