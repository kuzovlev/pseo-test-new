import type { ReactNode } from "react";
import Script from "next/script";
export const revalidate = 3600;

export default function HireLayout({
                                       children,
                                   }: {
    children: ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            <link rel="stylesheet" href="/webflow-static/css/normalize.css" />
            <link rel="stylesheet" href="/webflow-static/css/webflow.css" />
            <link rel="stylesheet" href="/webflow-static/css/awesomic-2025-new.webflow.css" />
            <link
                rel="stylesheet"
                href="https://assets.calendly.com/assets/external/widget.css"
            />
        </head>
        <body>
        {children}

        {/* GTM dataLayer init (must run before GTM container) */}
        <Script id="gtm-init" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T6C22HJ');`}
        </Script>

        {/* Google Analytics (gtag) */}
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-D430Z6534X"
            strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('set', 'developer_id.dZGVlNj', true);
gtag('js', new Date());
gtag('config', 'G-D430Z6534X');`}
        </Script>

        {/* LinkedIn Insight */}
        <Script id="linkedin-partner-id" strategy="afterInteractive">
            {`_linkedin_partner_id = "5079513";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);`}
        </Script>
        <Script id="linkedin-insight" strategy="afterInteractive">
            {`(function(l) {
if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
window.lintrk.q=[]}
var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})(window.lintrk);`}
        </Script>

        {/* PostHog */}
        <Script id="posthog-init" strategy="afterInteractive">
            {`!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
posthog.init('phc_uiXvHutVnws9tSigRGBBvQEfbp918L3VROCDfzMZ0c5',{api_host:'https://app.posthog.com'})`}
        </Script>

        <Script
            src="https://code.jquery.com/jquery-3.6.0.min.js"
            strategy="afterInteractive"
        />

        <Script
            src="/webflow-static/js/webflow.js"
            strategy="afterInteractive"
        />
        </body>
        </html>
    );
}