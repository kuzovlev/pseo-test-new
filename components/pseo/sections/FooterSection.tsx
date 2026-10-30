"use client";

import {useEffect, useRef, useState} from "react";
import type {PseoPageData} from "@/lib/pseo-types";

const ASSET_BASE = process.env.NEXT_PUBLIC_ASSET_BASE ?? "";
const asset = (src: string) => `${ASSET_BASE}${src.startsWith("/") ? src : `/${src}`}`;

// Looping grass video behind the footer, loaded when the footer nears the viewport (as on awesomic.com).
function FooterGrassVideo() {
    const ref = useRef<HTMLVideoElement>(null);
    const [load, setLoad] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver((entries) => {
            if (entries.some((e) => e.isIntersecting)) {
                setLoad(true);
                io.disconnect();
            }
        }, {rootMargin: "100% 0px"});
        io.observe(el);
        return () => io.disconnect();
    }, []);
    useEffect(() => {
        const el = ref.current;
        if (load && el) {
            el.load();
            el.play().catch(() => {});
        }
    }, [load]);
    return (
        <video ref={ref} className="hd3z-grass-video hd3z-grass-video--footer-grass-v6b-loop" autoPlay muted loop
               playsInline preload="none" poster={asset("/images-static/footer-grass-v6b-loop-poster.jpg")}>
            {load ? (
                <>
                    <source src={asset("/videos-static/footer-grass-v6b-loop.webm")} type="video/webm"/>
                    <source src={asset("/videos-static/footer-grass-v6b-loop.mp4")} type="video/mp4"/>
                </>
            ) : null}
        </video>
    );
}

export function FooterSection(_props: { data?: PseoPageData }) {
    useEffect(() => {
        function fadeOut(el) {
            el.style.opacity = 1;
            (function fade() {
                if ((el.style.opacity -= .1) < 0) {
                    el.style.display = "none";
                } else {
                    requestAnimationFrame(fade);
                }
            })();
        };

        function fadeIn(el, display) {
            el.style.opacity = 0;
            el.style.display = display || "block";
            (function fade() {
                var val = parseFloat(el.style.opacity);
                if (!((val += .1) > 1)) {
                    el.style.opacity = val;
                    requestAnimationFrame(fade);
                }
            })();
        };
        document.addEventListener('DOMContentLoaded', function () {
            const bookingPopup = document.getElementById('booking-popup');
            const closePopupButton = document.querySelector('.popup-banner-close');
            const lastShown = localStorage.getItem('popupLastShown');
            const now = new Date().getTime();
            if (!lastShown || now - lastShown > 24 * 60 * 60 * 1000) {
                setTimeout(() => {
                    fadeIn(bookingPopup);
                    localStorage.setItem('popupLastShown', now);
                }, 40000);
            }
            closePopupButton.addEventListener('click', function () {
                fadeOut(bookingPopup);
            });
        });
        document.addEventListener("DOMContentLoaded", () => {
            const calendlyBtn = document.querySelector("#popup-calendly-btn");
            if (calendlyBtn) {
                calendlyBtn.addEventListener("click", () => {
                    posthog.capture("Popup Calendly Button Clicked", {
                        location: window.location.pathname,
                    });
                });
            }
            const closeBtn = document.querySelector(".popup-banner-close");
            if (closeBtn) {
                closeBtn.addEventListener("click", () => {
                    posthog.capture("Popup Banner Closed", {
                        location: window.location.pathname,
                    });
                });
            }
        });
    }, []);

    return (
        <div className="hd3-page--v2 hd3-page--v6">
            <footer className="hd3z-footer"><div className="hd3z-panel"><div className="hd3z-scene" aria-hidden="true"><FooterGrassVideo/><div className="hd3z-shade"></div><div className="hd3z-light"></div><div className="hd3z-mist"></div></div><div className="hd3z-top"><div className="hd3z-brand"><img alt="Awesomic" width="131" height="20" src={asset("/images-static/awesomic-logo.svg")}/><span className="hd3z-tagline">Take a deep breath… and Awesomic.</span><p>Your team, AI agents and vetted experts in one app.</p><div className="hd3z-actions"><a className="hd3z-cta" href="https://studio.awesomic.com/new">Start creating<svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg></a><a className="hd3z-cta hd3z-cta--secondary" href="#" calendly-link="https://calendly.com/awesomic/demo?hide_gdpr_banner=1" ev-click="book_footer-v6">Book a demo</a></div><span className="hd3z-address">156 2nd St, Office 416, San Francisco, CA 94105, US</span></div><nav className="hd3z-columns" aria-label="Footer"><div className="hd3z-col"><span className="hd3z-col-title">Company</span><ul><li><a href="https://www.awesomic.com/pricing">Pricing</a></li><li><a href="https://www.awesomic.com/case-study">Case studies</a></li><li><a href="https://www.awesomic.com/about">About us</a></li><li><a href="https://www.awesomic.com/blog">Blog</a></li><li><a href="https://www.awesomic.com/blog/category/ai-design">AI &amp; design</a></li><li><a href="https://www.awesomic.com/blog/category/web-design">Web design articles</a></li><li><a href="https://www.awesomic.com/blog/category/product-design">Product design articles</a></li><li><a href="https://www.awesomic.com/blog/category/ux-ui-design">UX &amp; UI design articles</a></li><li><a href="https://www.awesomic.com/blog/category/graphic-design">Graphic design articles</a></li><li><a href="https://www.awesomic.com/blog/category/branding">Branding articles</a></li><li><a href="https://www.awesomic.com/blog/category/video-marketing">Video &amp; marketing articles</a></li><li><a href="https://www.awesomic.com/blog/category/hiring-talent">Hiring &amp; talent articles</a></li><li><a href="https://www.awesomic.com/blog/category/design-business">Design business articles</a></li><li><a href="https://www.awesomic.com/wall-of-love">Orbit of love</a></li><li><a href="https://www.awesomic.com/video-launch">Video launches</a></li><li><a href="https://www.awesomic.com/talent">Apply as an expert</a></li></ul></div><div className="hd3z-col"><span className="hd3z-col-title">Services</span><ul><li><a href="https://www.awesomic.com/?tab=design#services-block">Design services</a></li><li><a href="https://www.awesomic.com/video">Video production</a></li><li><a href="https://www.awesomic.com/web-design">Web design</a></li><li><a href="https://www.awesomic.com/?tab=nocode#services-block">No-code development</a></li><li><a href="https://www.awesomic.com/?tab=marketing#services-block">Marketing services</a></li><li><a href="https://www.awesomic.com/?tab=software#services-block">Software development</a></li><li><a href="https://www.awesomic.com/design-engineer">Design engineer</a></li></ul></div><div className="hd3z-col"><span className="hd3z-col-title">Hire experts</span><ul><li><a href="https://www.awesomic.com/hire/hire-a-product-designer">Product designers</a></li><li><a href="https://www.awesomic.com/hire/hire-a-ui-designer">UI designers</a></li><li><a href="https://www.awesomic.com/hire/hire-a-graphic-designer">Graphic designers</a></li><li><a href="https://www.awesomic.com/hire/hire-a-website-designer">Website designers</a></li><li><a href="https://www.awesomic.com/hire/hire-a-logo-designer">Logo designers</a></li></ul></div><div className="hd3z-col"><span className="hd3z-col-title">Get in touch</span><ul><li><a href="tel:4157072976">(415) 707-2976</a></li><li><a href="mailto:help@awesomic.io">help@awesomic.io</a></li><li><a href="https://support.awesomic.com/en/" target="_blank" rel="noopener noreferrer">Help center</a></li><li><a href="https://www.awesomic.com/privacy-policy">Terms &amp; policies</a></li></ul></div></nav></div><div className="hd3z-download"><div className="hd3z-download-copy"><span className="hd3z-download-title">Awesomic on every device</span><p>Desktop and mobile apps. Same projects, everywhere.</p></div><div className="hd3z-download-grid"><a className="hd3z-download-card" href="https://dl.todesktop.com/2608133vtijp2nt/mac/dmg/arm64" ev-click="download_footer-mac"><i><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9 0 0-2.7-1-2.7-4.1zM13.9 5c.7-.9 1.2-2 1.1-3.2-1 0-2.3.7-3 1.6-.7.8-1.2 2-1.1 3.1 1.2.1 2.3-.6 3-1.5z"/></svg></i><span><b>macOS</b><small>Apple Silicon</small></span></a><a className="hd3z-download-card" href="https://dl.todesktop.com/2608133vtijp2nt/windows/nsis/x64" ev-click="download_footer-windows"><i><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M0 3.4 9.8 2v9.5H0zM11 1.8 24 0v11.4H11zM0 12.6h9.8V22L0 20.6zM11 12.6h13V24l-13-1.8z"/></svg></i><span><b>Windows</b><small>x64</small></span></a><a className="hd3z-download-card" href="https://dl.todesktop.com/2608133vtijp2nt/linux/appImage/x64" ev-click="download_footer-linux"><i><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2c-2.2 0-3.6 1.8-3.6 4.4 0 1.5.4 2.4-.6 3.9C6.5 12.2 5 14.4 5 16.8c0 .6.1 1.1.3 1.6-.8.3-1.8.7-1.8 1.5 0 1.1 2.5 1 4 1.6 1.2.5 2.4.5 3-.4h3c.6.9 1.8.9 3 .4 1.5-.6 4-.5 4-1.6 0-.8-1-1.2-1.8-1.5.2-.5.3-1 .3-1.6 0-2.4-1.5-4.6-2.8-6.5-1-1.5-.6-2.4-.6-3.9C15.6 3.8 14.2 2 12 2zm-1.6 4.2c.4 0 .7.5.7 1.1s-.3 1.1-.7 1.1-.7-.5-.7-1.1.3-1.1.7-1.1zm3.2 0c.4 0 .7.5.7 1.1s-.3 1.1-.7 1.1-.7-.5-.7-1.1.3-1.1.7-1.1zM12 9.4c.9 0 2 .6 2 1s-1.1 1-2 1-2-.6-2-1 1.1-1 2-1z"/></svg></i><span><b>Linux</b><small>AppImage</small></span></a></div></div><div className="hd3z-bottom"><span>© 2026 Awesomic. All rights reserved.</span><a className="hd3z-ai" href="https://www.awesomic.com/llm-info"><img alt="" width="16" height="16" src={asset("/images-static/stars-icons.svg")}/>Hey AI, your official guide to Awesomic</a><div className="hd3z-socials"><a href="https://www.linkedin.com/company/awesomic/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><img alt="" width="16" height="16" src={asset("/images-static/linkedin-icon-footer.svg")}/></a><a href="https://www.instagram.com/awesomic/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><img alt="" width="16" height="16" src={asset("/images-static/instagram-footer-image.svg")}/></a><a href="https://www.facebook.com/awesomicinc" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><img alt="" width="16" height="16" src={asset("/images-static/facebook-footer-image.svg")}/></a><a href="https://twitter.com/awesomic" target="_blank" rel="noopener noreferrer" aria-label="X"><img alt="" width="16" height="16" src={asset("/images-static/x-logo-image.svg")}/></a><a href="https://www.youtube.com/@SenseofAwe" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><img alt="" width="16" height="16" src={asset("/images-static/youtube-icon.svg")}/></a><a className="hd3z-github" href="https://github.com/awesomic/awesomic" target="_blank" rel="noopener noreferrer" aria-label="Star Awesomic on GitHub" title="Star us on GitHub"><svg width="16" height="16" viewBox="0 0 16 16" fill="#71717a" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg><span className="hd3z-github-badge" aria-hidden="true"><svg width="10" height="10" viewBox="0 0 16 16"><path d="M8 1.6l1.9 3.9 4.3.6-3.1 3 .7 4.3L8 11.4l-3.8 2 .7-4.3-3.1-3 4.3-.6z"/></svg></span></a></div></div><div className="hd3z-wordmark" role="img" aria-label="Awesomic"></div></div></footer>
            <div className="popup-banner" id="booking-popup">
                <div className="heading-style-h4 weight-semibold">Still hesitating?</div>
                <div className="spacer-12"></div>
                <div className="text-15 weight-regular lh-145">Schedule a free 30-minute personalized demo. We\u2019ll
                    answer all your questions and show you how companies use Awesomic to boost growth, get funding, and
                    complete more projects.
                </div>
                <div className="spacer-28"></div>
                <a button-black=""
                   calendly-link="https://calendly.com/awesomic/demo?utm_source=website&amp;utm_medium=pop-up&amp;hide_gdpr_banner=1"
                   className="button is-large w-variant-91645085-d821-3204-c720-eb08b13aeb97 w-node-_58fe0e1a-6bae-3e07-a5d6-55c04204c63a-4204c63a w-inline-block"
                   data-wf--button-black-l--variant="icon-right" href="#" id="popup-calendly-btn">
                    <div className="z-index-1">Book a call</div>
                    <div className="button-background"></div>
                    <img alt="" className="button-icon w-variant-91645085-d821-3204-c720-eb08b13aeb97" height="20"
                         loading="lazy" src={asset("/images-static/faq_two-faces.avif")}/>
                </a>
                {/* script → useEffect */}<img alt="Close icon" className="popup-banner-close" loading="lazy"
                                               src={asset("/images-static/close-gray-400.svg")}/>
            </div>
        </div>
    );
}
