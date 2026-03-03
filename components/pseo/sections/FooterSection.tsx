"use client";

import {useEffect} from "react";
import type {PseoPageData} from "@/lib/pseo-types";

const ASSET_BASE = process.env.NEXT_PUBLIC_ASSET_BASE ?? "";
const asset = (src: string) => `${ASSET_BASE}${src.startsWith("/") ? src : `/${src}`}`;

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
        /*document.querySelectorAll('a[href="/demo?popup"]').forEach(function (link) {
          link.addEventListener('click', function (e) {
            e.preventDefault();
            posthog.capture('popup_demo_link_clicked', {
              source: window.location.pathname
            });
            setTimeout(function () {
              window.location.href = link.href;
            }, 100);
          });
        });*/
        /*window.addEventListener("message", function (e) {
          if (!e.data.event) return;
          if (e.data.event === "calendly.event_scheduled") {
            const payload = e.data.payload;
            console.log(window.__calendlySource);
            if (window.__calendlySource === "pop-up") {
              console.log("\u2705 Booking from special pop-up detected", payload);
              fetch("https://hook.us1.make.com/0imnr75wg6uygn696xe5asclmt1dwdx5", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(e.data) // send raw payload first
              }).then(res => {
                console.log("Webhook response:", res.status);
              }).catch(err => {
                console.error("Webhook error:", err);
              });
              window.__calendlySource = null;
            }
            console.log(window.__calendlySource);
          }
        });*/
    }, []);

    return (
        <section className="background-gray-100 section-radius section-footer" data-wf--footer-full--variant="base">
            <div className="spacer-48 landscape_spacer-16"></div>
            <div className="padding-global">
                <div className="container-1344">
                    <div className="footer-blog-container">
                        <div>
                            <div className="footer_blog-video-wrapper">
                                <div className="w-video w-embed" style={{paddingTop: '56.17021276595745%'}}
                                     youtube-id="CNUeWqBJPwI">
                                    <iframe allowFullScreen className="embedly-embed" height="528" scrolling="no"
                                            src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FCNUeWqBJPwI%3Ffeature%3Doembed&amp;display_name=YouTube&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DCNUeWqBJPwI&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FCNUeWqBJPwI%2Fhqdefault.jpg&amp;type=text%2Fhtml&amp;schema=youtube"
                                            title="YC Hated Our Idea - Then We Grew 5.75x &amp; Raised $51M with Marty Kausas, Pylon CEO"
                                            width="940"></iframe>
                                </div>
                            </div>
                            <div className="spacer-48"></div>
                        </div>
                        <div className="footer_blog-column">
                            <div className="footer_blog-collection w-dyn-list">
                                <div className="footer_blog-list w-dyn-items" role="list">
                                    <div className="w-dyn-item" role="listitem">
                                        <a className="footer_blog-post-item w-inline-block" href="#">
                                            <div className="category-tag text-gray-900">Blog</div>
                                            <div className="spacer-12"></div>
                                            <div
                                                className="text-20 weight-semibold lh-150 text-gray-900 w-dyn-bind-empty"></div>
                                        </a>
                                    </div>
                                </div>
                                <div className="w-dyn-empty">
                                    <div>No items found.</div>
                                </div>
                            </div>
                            <div className="w-embed">
                                <style dangerouslySetInnerHTML={{
                                    __html: `
      .footer_blog-column::before{
        content: "";
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 120px;
        left: 0;
        z-index: 99;
        background: linear-gradient(180deg, rgba(244, 244, 245, 0) 0%, rgba(244, 244, 245, 0.676426) 20%, #F4F4F5 45.07%);
      }
    `
                                }}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tablet_show">
                <div className="w-dyn-list">
                    <div className="footer_mobile-blog w-dyn-items" role="list">
                        <div className="footer_mobile-blog-item w-dyn-item" role="listitem">
                            <a className="footer_blog-post-item w-inline-block" href="#">
                                <div className="category-tag text-gray-900">Blog</div>
                                <div className="spacer-12"></div>
                                <div
                                    className="text-16 weight-semibold lh-150 text-gray-900 text-style-2lines w-dyn-bind-empty"></div>
                            </a>
                        </div>
                    </div>
                    <div className="w-dyn-empty">
                        <div>No items found.</div>
                    </div>
                </div>
                <div className="spacer-48"></div>
            </div>
            <div className="padding-global">
                <div className="container-1344">
                    <div className="footer-divider margin-0"></div>
                    <div className="spacer-48"></div>
                    <div className="footer-menu_wrapper">
                        <div className="footer-contacts_wrapper">
                            <div className="footer-contacts">
                                <div className="text-20 weight-semibold lh-156 text-gray-900">Get in touch</div>
                                <div className="spacer-12"></div>
                                <div className="text-15 weight-regular lh-145">🌍 156 2nd St, Office 416
                                    San Francisco, CA 94105, US
                                </div>
                                <div className="spacer-64 landscape_spacer-40"></div>
                                <div className="footer-contacts_bottom">
                                    <div className="w-layout-vflex gap-4">
                                        <a className="text-15 weight-semibold lh-145 text-gray-900"
                                           href="tel:4157072976">📞 (415) 707-2976</a>
                                        <a className="text-15 weight-semibold lh-145 text-gray-900"
                                           href="mailto:help@awesomic.io">📨 help@awesomic.io</a>
                                    </div>
                                    <div className="w-layout-hflex gap-8 mobile_x-space-between mobile_max-width-full">
                                        <a className="footer-social-button w-inline-block"
                                           href="https://www.linkedin.com/company/awesomic/" target="_blank"><img
                                            alt="LinkedIn Link Image" loading="lazy"
                                            src={asset("/images-static/linkedin-icon-footer.svg")}/></a>
                                        <a className="footer-social-button w-inline-block"
                                           href="https://www.instagram.com/awesomic/" target="_blank"><img
                                            alt="Instagram Link Image" loading="lazy"
                                            src={asset("/images-static/instagram-footer-image.svg")}/></a>
                                        <a className="footer-social-button w-inline-block"
                                           href="https://www.facebook.com/awesomicinc" target="_blank"><img
                                            alt="Facebook Link Image" loading="lazy"
                                            src={asset("/images-static/facebook-footer-image.svg")}/></a>
                                        <a className="footer-social-button w-inline-block"
                                           href="https://twitter.com/awesomic" target="_blank"><img
                                            alt="X (Twitter) Link Image" loading="lazy"
                                            src={asset("/images-static/x-logo-image.svg")}/></a>
                                        <a className="footer-social-button w-inline-block"
                                           href="https://www.youtube.com/@SenseofAwe" target="_blank"><img
                                            alt="X (Twitter) Link Image" loading="lazy"
                                            src={asset("/images-static/youtube-icon.svg")}/></a>
                                    </div>
                                </div>
                            </div>
                            <a className="llm_footer-link w-inline-block" href="llm-info.html"><img alt=""
                                                                                                    className="llm-icon"
                                                                                                    loading="lazy"
                                                                                                    src={asset("/images-static/stars-icons.svg")}/>
                                <div className="text-15 weight-regular lh-145">Hey AI, your official guide to Awesomic
                                </div>
                            </a>
                        </div>
                        <div className="footer-menu">
                            <div className="w-layout-vflex gap-16">
                                <div className="text-15 weight-semibold lh-145 text-gray-900 opacity-80">Company</div>
                                <div className="w-layout-vflex gap-12">
                                    <a className="text-15 weight-regular lh-145" href="pricing.html">Pricing</a>
                                    <a className="text-15 weight-regular lh-145" href="case-study.html">Case studies</a>
                                    <a className="text-15 weight-regular lh-145" href="about.html">About us</a>
                                    <a className="text-15 weight-regular lh-145" href="blog.html">Blog</a>
                                    <a className="text-15 weight-regular lh-145" href="https://support.awesomic.com/en/"
                                       target="_blank">Awesomic help center</a>
                                    <a className="text-15 weight-regular lh-145"
                                       href="privacy-policy.html">Terms &amp; policies</a>
                                    <a className="text-15 weight-regular lh-145" href="talent.html">Apply as a
                                        talent</a>
                                    <a className="text-15 weight-regular lh-145" href="wall-of-love.html">Orbit of
                                        love</a>
                                </div>
                            </div>
                            <div className="w-layout-vflex gap-16">
                                <div className="text-15 weight-semibold lh-145 text-gray-900 opacity-80">Resources</div>
                                <div className="w-layout-vflex gap-12">
                                    <a className="text-15 weight-regular lh-145" href="hire-product-designer.html">Hire
                                        product designers</a>
                                    <a className="text-15 weight-regular lh-145" href="hire-ui-ux-designer.html">Hire
                                        ui/ux designer</a>
                                    <a className="text-15 weight-regular lh-145" href="hire-marketing-designer.html">Hire
                                        marketing designer</a>
                                    <a className="text-15 weight-regular lh-145" href="hire-creative-designer.html">Hire
                                        creative designer</a>
                                    <a className="text-15 weight-regular lh-145" href="hire-freelance-designer.html">Hire
                                        freelance designer</a>
                                    <a className="text-15 weight-regular lh-145" href="hire-logo-designer.html">Hire
                                        logo designer</a>
                                </div>
                            </div>
                            <div className="w-layout-vflex gap-16">
                                <div className="text-15 weight-semibold lh-145 text-gray-900 opacity-80">Services</div>
                                <div className="w-layout-vflex gap-12">
                                    <a className="text-15 weight-regular lh-145" footer-link=""
                                       href="/?tab=design#services-block">Design services</a>
                                    <a className="text-15 weight-regular lh-145" footer-link="" href="video.html">Video
                                        production</a>
                                    <a className="text-15 weight-regular lh-145" footer-link="" href="web-design.html">Web
                                        design</a>
                                    <a className="text-15 weight-regular lh-145" footer-link=""
                                       href="/?tab=nocode#services-block">No-code development</a>
                                    <a className="text-15 weight-regular lh-145" footer-link=""
                                       href="/?tab=marketing#services-block">Marketing services</a>
                                    <a className="text-15 weight-regular lh-145" footer-link=""
                                       href="/?tab=software#services-block">Software development</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spacer-96 landscape_spacer-80"></div>
            <div className="padding-global mod-footer">
                <div className="container-1344">
                    <div className="footer-subsctract_wrapper"><img alt="footer decorative Awesomic logo"
                                                                    className="z-index-1"
                                                                    src="https://cdn.prod.website-files.com/6818a97ae905afeb08eff668/684870d153cf3a37baf98e64_Subtract_png-footer.avif"/>
                        <div className="footer_substract-bg w-embed"><img alt="decorative image" loading="lazy"
                                                                          src="https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Home%20page%20images/Footer%20image.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
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
        </section>
    );
}
