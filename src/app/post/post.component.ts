import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';
import { RouterModule } from '@angular/router';
import { FeedbackRequestComponent } from '../feedback-request/feedback-request.component';
import {SeoService} from "../seo.service";
import {postData} from "../../public/posts";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MarkdownComponent, RouterModule, FeedbackRequestComponent],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  markdownPath: string = '';
  postExists: boolean = true;

  // get the markdown file path from the route
  // the file is: /public/posts/<url postfix after blog/>.md
  constructor(private route: ActivatedRoute, private seo: SeoService) {}

  ngOnInit() : void{
    this.route.params.subscribe((params) => {
      this.markdownPath = `public/posts/${params['id']}.md`;
      const post = postData.data.find(post => post.path === `${postData.basePath}/${params['id']}.md`);
      this.seo.updateMetadata(`${post?.title}`, `${post?.description}`, `${post?.img_url}`);
      this.seo.setCanonicalURL(`https://jans.dev/blog/${params['id']}`);
    });
  }

  onMarkdownError() {
    this.postExists = false;
  }

}
