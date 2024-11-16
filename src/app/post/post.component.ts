import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MarkdownComponent],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  markdownPath: string = '';
  postExists: boolean = true;

  // get the markdown file path from the route
  // the file is: /public/posts/<url postfix after blog/>.md
  constructor(private route: ActivatedRoute) {}

  ngOnInit() : void{
    this.route.params.subscribe((params) => {
      this.markdownPath = `public/posts/${params['id']}.md`;
    });
  }

  onMarkdownError() {
    this.postExists = false;
  }

}
