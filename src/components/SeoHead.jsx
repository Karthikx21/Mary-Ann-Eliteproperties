import { useEffect } from 'react';

/**
 * World-Class Dynamic SEO Head Component
 * Dynamically updates document title, meta description, keywords,
 * canonical links, OpenGraph, Twitter cards, and Schema.org JSON-LD graph.
 */
export default function SeoHead({
  title,
  description,
  keywords,
  canonicalPath = '',
  ogImage = 'https://maryanneliteproperties.com/images/hero-star-luxoria.jpg',
  ogType = 'website',
  schemaJson = null
}) {
  useEffect(() => {
    // 1. Page Title
    if (title) {
      document.title = `${title} | Mary Ann Elite Properties`;
    }

    // Helper to update or create meta tag
    const updateMeta = (nameAttr, nameVal, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${nameAttr}="${nameVal}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(nameAttr, nameVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper to update link tag
    const updateLink = (rel, href) => {
      if (!href) return;
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    const cleanPath = canonicalPath === '/' ? '' : canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
    const fullUrl = `https://maryanneliteproperties.com${cleanPath}`;

    // 2. Primary Meta Tags
    updateMeta('name', 'description', description);
    if (keywords) updateMeta('name', 'keywords', keywords);
    updateMeta('name', 'author', 'Mary Ann Elite Properties');
    updateMeta('name', 'publisher', 'Mary Ann Elite Properties');
    updateMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 3. Canonical URL
    updateLink('canonical', fullUrl);

    // 4. OpenGraph Tags
    updateMeta('property', 'og:site_name', 'Mary Ann Elite Properties');
    updateMeta('property', 'og:locale', 'en_US');
    updateMeta('property', 'og:title', `${title} | Mary Ann Elite Properties`);
    updateMeta('property', 'og:description', description);
    updateMeta('property', 'og:url', fullUrl);
    updateMeta('property', 'og:image', ogImage);
    updateMeta('property', 'og:type', ogType);

    // 5. Twitter Card Tags
    updateMeta('name', 'twitter:card', 'summary_large_image');
    updateMeta('name', 'twitter:site', '@maryann_elite');
    updateMeta('name', 'twitter:creator', '@maryann_elite');
    updateMeta('name', 'twitter:title', `${title} | Mary Ann Elite Properties`);
    updateMeta('name', 'twitter:description', description);
    updateMeta('name', 'twitter:image', ogImage);
    updateMeta('name', 'twitter:url', fullUrl);

    // 6. Dynamic JSON-LD Structured Data with BreadcrumbList Support
    let finalSchema = schemaJson;
    
    // Automatically generate standard Breadcrumbs if not present and on subpage
    if (cleanPath && cleanPath !== '') {
      const segments = cleanPath.split('/').filter(Boolean);
      const breadcrumbItems = [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://maryanneliteproperties.com/"
        }
      ];

      let accumulated = '';
      segments.forEach((seg, idx) => {
        accumulated += `/${seg}`;
        let readableName = seg
          .split('-')
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ');
        if (seg === 'properties') readableName = 'Curated Properties';
        if (seg === 'what-we-offer') readableName = 'What We Offer';
        if (seg === 'about') readableName = 'About Our Firm';
        if (seg === 'advisors') readableName = 'Advisors & NRI Desk';
        if (seg === 'contact') readableName = 'Contact & Site Visit';

        breadcrumbItems.push({
          "@type": "ListItem",
          "position": idx + 2,
          "name": readableName,
          "item": `https://maryanneliteproperties.com${accumulated}`
        });
      });

      const autoBreadcrumb = {
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems
      };

      if (!finalSchema) {
        finalSchema = {
          "@context": "https://schema.org",
          ...autoBreadcrumb
        };
      } else if (finalSchema["@graph"]) {
        // check if BreadcrumbList already exists
        const hasBc = finalSchema["@graph"].some((item) => item["@type"] === "BreadcrumbList");
        if (!hasBc) {
          finalSchema = {
            ...finalSchema,
            "@graph": [...finalSchema["@graph"], autoBreadcrumb]
          };
        }
      }
    }

    if (finalSchema) {
      let script = document.getElementById('dynamic-page-schema');
      if (!script) {
        script = document.createElement('script');
        script.id = 'dynamic-page-schema';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(finalSchema);
    } else {
      const existing = document.getElementById('dynamic-page-schema');
      if (existing) existing.remove();
    }
  }, [title, description, keywords, canonicalPath, ogImage, ogType, schemaJson]);

  return null;
}

