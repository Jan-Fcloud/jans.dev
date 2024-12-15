import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  updateMetadata(title: string, description: string, image?: string) {
    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'og:title', content: title });
    this.metaService.updateTag({ name: 'og:description', content: description });
    if (image) {
      this.metaService.updateTag({ name: 'og:image', content: image });
    }else{
      this.metaService.updateTag({ name: 'og:image', content: 'https://avatars.githubusercontent.com/u/47220014?v=4&size=256' });
    }
  }

  setCanonicalURL(url: string) {
    if (isPlatformBrowser(this.platformId)) {
      const head = this.document.getElementsByTagName('head')[0];
      let canonical = this.document.querySelector('link[rel="canonical"]');

      if (!canonical) {
        canonical = this.document.createElement('link');
        head.appendChild(canonical);
      }

      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', url);
    }
  }
}
