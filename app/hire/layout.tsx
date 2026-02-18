import type { ReactNode } from "react";
import Script from "next/script";

export default function HireLayout({
                                       children,
                                   }: {
    children: ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            <link rel="stylesheet" href="/webflow/css/normalize.css" />
            <link rel="stylesheet" href="/webflow/css/webflow.css" />
            <link rel="stylesheet" href="/webflow/css/awesomic-2025-new.webflow.css" />
            <link
                rel="stylesheet"
                href="https://assets.calendly.com/assets/external/widget.css"
            />
        </head>
        <body>
        {children}

        <Script
            src="https://code.jquery.com/jquery-3.6.0.min.js"
            strategy="afterInteractive"
        />

        <Script
            src="/webflow/js/webflow.js"
            strategy="afterInteractive"
        />
        </body>
        </html>
    );
}