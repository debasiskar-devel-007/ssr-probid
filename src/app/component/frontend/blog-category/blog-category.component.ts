import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-blog-category',
  templateUrl: './blog-category.component.html',
  styleUrls: ['./blog-category.component.css']
})
export class BlogCategoryComponent implements OnInit {

  constructor(private readonly meta: MetaService) { 
    this.meta.setTitle('ProBid Auto - Blog');
    this.meta.setTag('og:description', 'Learn about all the latest developments and new technologies being introduced in the Online Auto Trading Industry with the latest Blogs written by our expert Online Auto Trading Professionals and Reps.');
    this.meta.setTag('twitter:description', 'Learn about all the latest developments and new technologies being introduced in the Online Auto Trading Industry with the latest Blogs written by our expert Online Auto Trading Professionals and Reps.');
    this.meta.setTag('og:keyword', 'Online Auto Industry Blogs, Online Auto Industry News, Online Auto Industry Journals');
    this.meta.setTag('twitter:keyword', 'Online Auto Industry Blogs, Online Auto Industry News, Online Auto Industry Journals');
    this.meta.setTag('og:title', 'ProBid Auto - Blog');
    this.meta.setTag('twitter:title', 'ProBid Auto - Blog');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logomain.png');
    this.meta.setTag('twitter:image', '../../assets/images/logomain.png');
  }

  ngOnInit() {
  }

}
