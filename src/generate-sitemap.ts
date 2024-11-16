import { createWriteStream } from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';
import { postData } from './public/posts';

// This will prove useful for when I'll need a sitemap.xml thingamabob

const BASE_URL = 'https://jans.dev';

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: BASE_URL });

  sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
  sitemap.write({ url: '/blog', changefreq: 'daily', priority: 0.8 });

  postData.data.forEach(post => {
    const postId = post.path.split('/public/posts/').pop()?.split('.')?.shift();
    if (postId) {
      sitemap.write({ url: `/blog/${postId}`, changefreq: 'weekly', priority: 0.7 });
    }
  });

  sitemap.end();

  const sitemapOutput = await streamToPromise(sitemap).then(data => data.toString());

  const writeStream = createWriteStream('./dist/sitemap.xml');
  writeStream.write(sitemapOutput);
  writeStream.end();
}

generateSitemap().then(() => {
  console.log('Sitemap generated successfully.');
}).catch(err => {
  console.error('Error generating sitemap:', err);
});