import { ASSET_BASE } from "@/lib/pseo-assets";

export default function Head() {
  const favicon = ASSET_BASE ? `${ASSET_BASE}/images/favicon.png` : "/images-static/favicon.png";
  const webclip = ASSET_BASE ? `${ASSET_BASE}/images/webclip.png` : "/images-static/webclip.png";

  return (
    <>
      <title>pSEO template</title>
      <meta charSet="utf-8" />
      <meta content="Awesomic matches you with top design, marketing, dev, and product talent in as few as 24 hours through a subscription plan. Take a deep breath... and Awesomic." name="description" />
      <meta content="https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/OpenGraph%20image.jpg" property="og:image" />
      <meta content="pSEO template" property="twitter:title" />
      <meta content="Awesomic matches you with top design, marketing, dev, and product talent in as few as 24 hours through a subscription plan. Take a deep breath... and Awesomic." property="twitter:description" />
      <meta content="https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/OpenGraph%20image.jpg" property="twitter:image" />
      <meta property="og:type" content="website" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta content="z790Eh7WsNc3VPeFLSLyBq1OjJBH2QXtrdaDzfvqxfM" name="google-site-verification" />
      <meta name="facebook-domain-verification" content="kbqd4j0ykeixr7lahwx5mwtyh4bolk" />
      <meta name="format-detection" content="telephone=no" />
      <link href="/webflow-static/css/normalize.css" rel="stylesheet" type="text/css" />
      <link href="/webflow-static/css/webflow.css" rel="stylesheet" type="text/css" />
      <link href="/webflow-static/css/awesomic-2025-new.webflow.css" rel="stylesheet" type="text/css" />
      <link href="/webflow-static/css/global-styles.css" rel="stylesheet" type="text/css" />
      <link href="https://www.awesomic.com/pseo-template" rel="canonical" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
      <link rel="shortcut icon" href="https://cdn.prod.website-files.com/6818a97ae905afeb08eff668/685c20ff61458aaeb7fac08c_favicon-upd.png" type="image/x-icon" />
      <link rel="apple-touch-icon" href={webclip} />
      <script dangerouslySetInnerHTML={{ __html: `!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Awesomic",
  "url": "https://www.awesomic.com",
  "logo": "",
  "foundingDate": "2020",
  "founder": [
    {
      "@type": "Person",
      "name": "Roman Sevast",
      "jobTitle": "Co-Founder & CEO",
      "sameAs": [
		"https://www.linkedin.com/in/roman-sevast/",
        "https://x.com/roman_sevast"
      ]
    },
    {
      "@type": "Person",
      "name": "Stacy Pavlyshyna",
      "jobTitle": "Co-Founder & COO",
      "sameAs": [
        "https://www.linkedin.com/in/stacy-pavlyshyna/"
      ]
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "addressCountry": "USA"
  },
  "sameAs": [
    "https://www.linkedin.com/company/awesomic",
    "https://twitter.com/awesomic",
    "https://www.instagram.com/awesomic"
  ],
  "description": "Awesomic matches companies, from startups to enterprise, with top vetted design, marketing, product, and development talent in as few as 24 hours via a subscription-based app."
}` }} />
    </>
  );
}
