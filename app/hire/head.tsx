import { ASSET_BASE } from "@/lib/pseo-assets";

export default function Head() {
  const favicon = ASSET_BASE ? `${ASSET_BASE}/images/favicon.png` : "/images/favicon.png";
  const webclip = ASSET_BASE ? `${ASSET_BASE}/images/webclip.png` : "/images/webclip.png";

  return (
    <>
      <title>pSEO template</title>
      <meta charSet="utf-8" />
      <meta content="Awesomic matches you with top design, marketing, dev, and product talent in as few as 24 hours through a subscription plan. Take a deep breath... and Awesomic." name="description" />
      <meta content="pSEO template" property="og:title" />
      <meta content="Awesomic matches you with top design, marketing, dev, and product talent in as few as 24 hours through a subscription plan. Take a deep breath... and Awesomic." property="og:description" />
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
      <link href="/webflow/css/normalize.css" rel="stylesheet" type="text/css" />
      <link href="/webflow/css/webflow.css" rel="stylesheet" type="text/css" />
      <link href="/webflow/css/awesomic-2025-new.webflow.css" rel="stylesheet" type="text/css" />
      <link href="https://www.awesomic.com/pseo-template" rel="canonical" />
      <link rel="preload" as="style" href="https://assets.calendly.com/assets/external/widget.css" onload="this.onload=null;this.rel='stylesheet'" />
      <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
      <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      <link rel="apple-touch-icon" href={webclip} />
      <script dangerouslySetInnerHTML={{ __html: `!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);` }} />
      <script src="https://www.googletagmanager.com/gtag/js?id=G-D430Z6534X" async></script>
      <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('set', 'developer_id.dZGVlNj', true);gtag('js', new Date());gtag('config', 'G-D430Z6534X');` }} />
      <script dangerouslySetInnerHTML={{ __html: `{
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
      <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-T6C22HJ');` }} />
      <script dangerouslySetInnerHTML={{ __html: `_linkedin_partner_id = "5079513";
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  window._linkedin_data_partner_ids.push(_linkedin_partner_id);` }} />
      <script dangerouslySetInnerHTML={{ __html: `(function(l) {
    if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q=[]}
    var s = document.getElementsByTagName("script")[0];
    var b = document.createElement("script");
    b.type = "text/javascript";b.async = true;
    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    s.parentNode.insertBefore(b, s);})(window.lintrk);` }} />
      <script dangerouslySetInnerHTML={{ __html: `!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
  posthog.init('phc_uiXvHutVnws9tSigRGBBvQEfbp918L3VROCDfzMZ0c5',{api_host:'https://app.posthog.com'})` }} />
    </>
  );
}
