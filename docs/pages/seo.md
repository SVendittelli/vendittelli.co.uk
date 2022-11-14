---
layout: page
title: Search Engine Optimisation (SEO)
---

## robots.txt

> A robots.txt file tells search engine crawlers which URLs the crawler can access on your site. - [Google](https://developers.google.com/search/docs/crawling-indexing/robots/intro)

The project provides a very permissive [`robots.txt`]({{ site.github.repository_url }}/tree/main/apps/home/src/robots.txt). A `robots.txt` is not required, the site will be indexed normally without it. It is being served so that I can experiment with technology.

## Sitemap

> A sitemap is a file where you provide information about the pages, videos, and other files on your site, and the relationships between them. Search engines like Google read this file to crawl your site more efficiently. - [Google](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)

The project generates a `sitemap.xml` using `home`'s [`prepare.js`]({{ site.github.repository_url }}/tree/main/apps/home/utils/prepare.js) script. A `sitemap.xml` is not required for a site of this size. It is being generated and served so that I can experiment with technology.
