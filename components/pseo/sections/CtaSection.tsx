"use client";

import {useEffect} from "react";
import type {PseoPageData} from "@/lib/pseo-types";

const ASSET_BASE = process.env.NEXT_PUBLIC_ASSET_BASE ?? "";
const asset = (src: string) => `${ASSET_BASE}${src.startsWith("/") ? src : `/${src}`}`;

export function CtaSection(_props: { data?: PseoPageData }) {
    useEffect(() => {
        /*document.addEventListener("DOMContentLoaded", (event) => {
            document.querySelector('.cta-bg-image').src = document.querySelector('.cta-bg-image').getAttribute('data-src');
          });*/
        if (window.innerWidth > 991) {
            const circle = document.getElementById('cta-circle');
            const ctaBlock = document.getElementById('cta-block');
            ctaBlock.addEventListener('mousemove', function (event) {
                const rect = ctaBlock.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                circle.style.left = (x - 370) + 'px';
                circle.style.top = (y - 320) + 'px';
                circle.style.opacity = 1;
            });
            ctaBlock.addEventListener('mouseleave', function () {
                circle.style.opacity = 0;
            });
            circle.style.opacity = 0;
        }
        const ctaSection = document.querySelector('.section_cta');
        const imgObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        ctaSection.classList.add('animate-background');
                    } else {
                        ctaSection.classList.remove('animate-background');
                    }
                });
            },
            {threshold: 0.5}
        );
        if (ctaSection) {
            imgObserver.observe(ctaSection);
        }
        const imageToLoad = document.getElementById('cta-dec-image');
        if (imageToLoad) {
            const imageSection = imageToLoad.closest('section');
            const prevSection = imageSection?.previousElementSibling;
            const nextSection = imageSection?.nextElementSibling;
            const loadImage = () => {
                if (imageToLoad.dataset.src) {
                    imageToLoad.src = imageToLoad.dataset.src;
                    imageToLoad.removeAttribute('data-src');
                    ctaImageObserver.disconnect();
                    initialObserver.disconnect();
                }
            };
            // Observe when image section is already in view (page load case)
            const initialObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) loadImage();
                });
            }, {threshold: 0.1});
            if (imageSection) initialObserver.observe(imageSection);
            // Observe prev and next sections
            const ctaImageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) loadImage();
                });
            }, {threshold: 0.1});
            if (prevSection?.tagName === 'SECTION') ctaImageObserver.observe(prevSection);
            if (nextSection?.tagName === 'SECTION') ctaImageObserver.observe(nextSection);
        }
    }, []);

    return (
        <section className="section_cta" data-wf--cta-section--variant="base" id="cta-block">
            <div className="spacer-144 tablet_spacer-80"></div>
            <div className="padding-global">
                <div className="container-1344 z-index-1">
                    <div className="cta-heading_wrapper">
                        <div className="max-width-828 align-center">
                            <h2 className="text-align-center">One subscription and your hiring problems <span
                                className="cta_faces"> </span>\u00a0solved</h2>
                        </div>
                    </div>
                    <div className="spacer-40"></div>
                    <div>
                        <div className="cta_form-block w-form">
                            <form action="https://#" className="cta_form" data-name="cta-email"
                                  data-wf-element-id="5bfefd48-2af9-fa9f-530a-3764d21b762b"
                                  data-wf-page-id="697b4beefe76cf9edba9761c" id="wf-form-cta-email" method="get"
                                  name="wf-form-cta-email"><input className="input cta_input w-input"
                                                                  data-name="cta-email" id="cta-email" maxLength="256"
                                                                  name="cta-email" placeholder="Email address" required
                                                                  type="email"/>
                                <div className="submit-button_wrapper"><input className="submit-button w-button"
                                                                              data-wait="Please wait..." type="submit"
                                                                              value="Submit"/>
                                    <a button-black="" calendly-link="" className="button is-large w-inline-block"
                                       data-wf--button-black-l--variant="base" href="#">
                                        <div className="z-index-1">Get matched</div>
                                        <div className="button-background"></div>
                                        <img alt="" className="button-icon" height="20" loading="lazy"
                                             src={asset("/images/login-icon-white.svg")}/>
                                    </a>
                                </div>
                            </form>
                            <div className="w-form-done">
                                <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="w-form-fail">
                                <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img alt="" className="moving-circle" id="cta-circle" loading="lazy"
                 src={asset("/images/moving-ellipse.svg")}/>
            <div className="w-embed">
                <style dangerouslySetInnerHTML={{
                    __html: `
      .section_cta.animate-background .cta-bg-image{
        bottom: -20%;
      }
      @media screen and (max-width: 991px){
        .section_cta .cta-bg-image{
          width: 1100px;
          max-width: none;
        }
        .section_cta.animate-background .cta-bg-image{
          bottom: 0%;
          /*left: -30%;*/
        }
      }
      @media screen and (max-width: 467px){
        .section_cta .cta-bg-image{
          width: 670px;
          max-width: none;
        }
      }
    `
                }}/>
            </div>
            <img alt="decorative image in cta block" className="cta-bg-image"
                 data-src="https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Home page images/CTA img.jpg"
                 id="cta-dec-image" loading="lazy"/>
            {/* script → useEffect */}
        </section>
    );
}
