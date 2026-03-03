"use client";

import {useEffect} from "react";
import type {PseoPageData} from "@/lib/pseo-types";

const ASSET_BASE = process.env.NEXT_PUBLIC_ASSET_BASE ?? "";
const asset = (src: string) => `${ASSET_BASE}${src.startsWith("/") ? src : `/${src}`}`;

export function HowItWorksSection(_props: { data?: PseoPageData }) {
    useEffect(() => {
        console.log(_props);

        var tabTimeout;
        var isInView = false;
        var isPaused = false;
        // Intersection Observer to detect when component is in view
        const processObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    isInView = true;
                    if (!isPaused) {
                        clearTimeout(tabTimeout);
                        // Start from first tab
                        const firstTab = document.querySelector('.how-tab_link');
                        if (firstTab) {
                            firstTab.removeAttribute("href");
                            firstTab.click();
                            startAnimation();
                            tabLoop();
                        }
                    }
                } else {
                    isInView = false;
                    clearTimeout(tabTimeout);
                }
            });
        }, {
            threshold: 0.1 // Adjust this value as needed (0.1 = 10% visible)
        });
        // Start observing the component
        const tabsComponent = document.querySelector('.how-tabs_component');
        if (tabsComponent) {
            processObserver.observe(tabsComponent);
        }

        function tabLoop() {
            if (!isInView) return; // Don't continue if not in view
            tabTimeout = setTimeout(function () {
                if (isPaused || !isInView) {
                    tabLoop(); // Restart the timer without proceeding
                    return;
                }
                var current = document.querySelector('.how-tabs_menu .w--current');
                var next = current ? current.nextElementSibling : null;
                if (next) {
                    if (document.querySelector(".how-tabs_menu").classList.contains("w--open")) {
                        tabLoop();
                    } else {
                        next.removeAttribute("href");
                        next.click();
                        startAnimation();
                    }
                } else {
                    if (document.querySelector(".how-tabs_menu").classList.contains("w--open")) {
                        tabLoop();
                    } else {
                        var firstTab = document.querySelector('.how-tab_link');
                        if (firstTab) {
                            firstTab.removeAttribute("href");
                            firstTab.click();
                            startAnimation();
                        }
                    }
                }
            }, 5000);
        }

        function startAnimation() {
            const currentTab = document.querySelector('.how-tab_link.w--current');
            if (!currentTab) return;
            const progressBarWrapper = currentTab.querySelector('.how-tab_progress-wrapper');
            if (!progressBarWrapper) return;
            const progressStatus = progressBarWrapper.querySelector('.how-tab_progress-status');
            if (!progressStatus) return;
            const animation = progressStatus.animate([
                {width: '0%'},
                {width: '100%'}
            ], {
                duration: 5000,
                easing: 'ease-in-out',
                fill: 'forwards'
            });
            currentTab.addEventListener('mouseenter', () => {
                animation.pause();
                isPaused = true; // Pause the tab loop as well
            });
            currentTab.addEventListener('mouseleave', () => {
                animation.play();
                isPaused = false; // Resume the tab loop
            });
        }

        // Add hover listeners to all tabs for pausing the loop
        document.querySelectorAll('.how-tab_link').forEach(function (tabLink) {
            tabLink.addEventListener('mouseenter', function () {
                isPaused = true;
            });
            tabLink.addEventListener('mouseleave', function () {
                isPaused = false;
            });
            tabLink.addEventListener('click', function () {
                clearTimeout(tabTimeout);
                startAnimation();
                tabLoop();
            });
            tabLink.querySelector('.tab_button-imitation').addEventListener('click', function () {
                if (tabLink.classList.contains('w--current')) {
                    if (tabLink.getAttribute('data-link')) {
                        window.open(
                            tabLink.getAttribute('data-link'),
                            tabLink.getAttribute('tab')
                        );
                    }
                }
            })
        });
        document.addEventListener("DOMContentLoaded", () => {
            const bgTarget = document.getElementById('how-it-wroks');
            let styleAdded = false;
            const lazyBackground = (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !styleAdded) {
                        const style = document.createElement('style');
                        style.innerHTML = `
            .how-tabs_content {
              background-image: url("https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/Home%20page%20images/How%20it%20work%20img.jpg");
            }
          `;
                        document.head.appendChild(style);
                        styleAdded = true;
                        observer.disconnect();
                    }
                });
            };
            const bgObserver = new IntersectionObserver(lazyBackground);
            bgObserver.observe(bgTarget);
        });
    }, []);

    return (
        <section className="section-radius section-offset background-white" id="how-it-wroks">
            <div className="spacer-80"></div>
            <div className="padding-global">
                <div className="container-1280">
                    <h2 className="heading-style-h3 text-align-center">
                        {_props.data.how_title}
                    </h2>
                    <div className="spacer-20"></div>
                    <div className="mobile_max-width-250 align-center">
                        <div className="text-16 weight-regular lh-150 text-align-center">
                            {_props.data.how_description}
                        </div>
                    </div>
                    <div className="spacer-48"></div>
                    <div className="how-tabs_component w-tabs" data-current="Tab 1" data-duration-in="300"
                         data-duration-out="100" data-easing="ease">
                        <div className="how-tabs_menu w-tab-menu">
                            <a className="how-tab_link w-inline-block w-tab-link w--current" data-link="/pricing"
                               data-w-tab="Tab 1" tab="_self">
                                <div className="how-tab_link-content">
                                    <div className="how-tab_header">
                                        <div className="w-layout-hflex flex-h_left-center gap-16">
                                            <div className="tab-number-wrapper">
                                                <div className="text-13 weight-regular lh-150">01</div>
                                            </div>
                                            <div className="text-20 weight-semibold lh-150">
                                                {_props.data.how_step_1_name}
                                            </div>
                                        </div>
                                        <img alt="" loading="lazy" src={asset("/images-static/chevron-down-gray.svg")}/>
                                    </div>
                                    <div className="how-tabs_content tablet_show"><img alt="Join Awesomic Tab Image"
                                                                                       loading="lazy"
                                                                                       src={asset("/images-static/how-tab-1_1how-tab-1.avif")}
                                                                                       width="553"/></div>
                                    <div className="how-tab_details">
                                        <div className="max-width-313">
                                            <div className="text-15 weight-regular lh-145">
                                                {_props.data.how_step_1_text}
                                            </div>
                                        </div>
                                        <div className="how-tab_footer">
                                            <div button-black="" className="button tab_button-imitation"
                                                 tab-link="/pricing">
                                                <div className="z-index-1">View plans</div>
                                                <img alt="" className="z-index-1" loading="lazy"
                                                     src={asset("/images-static/open-link-icon.svg")}/>
                                                <div className="button-background"></div>
                                            </div>
                                            <div className="how-tab_progress-wrapper">
                                                <div className="how-tab_progress-status"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a className="how-tab_link w-inline-block w-tab-link" data-link="https://app.awesomic.com"
                               data-w-tab="Tab 2" tab="_blank">
                                <div className="how-tab_link-content">
                                    <div className="how-tab_header">
                                        <div className="w-layout-hflex flex-h_left-center gap-16">
                                            <div className="tab-number-wrapper">
                                                <div className="text-13 weight-regular lh-150">02</div>
                                            </div>
                                            <div className="text-20 weight-semibold lh-150">
                                                {_props.data.how_step_2_name}
                                            </div>
                                        </div>
                                        <img alt="" loading="lazy" src={asset("/images-static/chevron-down-gray.svg")}/>
                                    </div>
                                    <div className="how-tabs_content tablet_show"><img alt="Submit tasks Tab image"
                                                                                       loading="lazy"
                                                                                       src={asset("/images-static/how-tab-2_1how-tab-2.avif")}
                                                                                       width="553"/></div>
                                    <div className="how-tab_details">
                                        <div className="max-width-313">
                                            <div className="text-15 weight-regular lh-145">
                                                {_props.data.how_step_2_text}
                                            </div>
                                        </div>
                                        <div className="how-tab_footer">
                                            <div button-black="" className="button tab_button-imitation">
                                                <div className="z-index-1">Submit now</div>
                                                <img alt="" className="z-index-1" loading="lazy"
                                                     src={asset("/images-static/open-link-icon.svg")}/>
                                                <div className="button-background"></div>
                                            </div>
                                            <div className="how-tab_progress-wrapper">
                                                <div className="how-tab_progress-status"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a className="how-tab_link w-inline-block w-tab-link"
                               data-link="https://app.awesomic.com/database/talents" data-w-tab="Tab 3" tab="_blank">
                                <div className="how-tab_link-content">
                                    <div className="how-tab_header">
                                        <div className="w-layout-hflex flex-h_left-center gap-16">
                                            <div className="tab-number-wrapper">
                                                <div className="text-13 weight-regular lh-150">03</div>
                                            </div>
                                            <div className="text-20 weight-semibold lh-150">
                                                {_props.data.how_step_3_name}
                                            </div>
                                        </div>
                                        <img alt="" loading="lazy" src={asset("/images-static/chevron-down-gray.svg")}/>
                                    </div>
                                    <div className="how-tabs_content tablet_show"><img alt="Get matched Tab image"
                                                                                       loading="lazy"
                                                                                       src={asset("/images-static/how-tab-3_1how-tab-3.avif")}
                                                                                       width="553"/></div>
                                    <div className="how-tab_details">
                                        <div className="max-width-313">
                                            <div className="text-15 weight-regular lh-145">
                                                {_props.data.how_step_3_text}
                                            </div>
                                        </div>
                                        <div className="how-tab_footer">
                                            <div button-black="" className="button tab_button-imitation">
                                                <div className="z-index-1">View all talents</div>
                                                <img alt="" className="z-index-1" loading="lazy"
                                                     src={asset("/images-static/open-link-icon.svg")}/>
                                                <div className="button-background"></div>
                                            </div>
                                            <div className="how-tab_progress-wrapper">
                                                <div className="how-tab_progress-status"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a className="how-tab_link w-inline-block w-tab-link" data-w-tab="Tab 4">
                                <div className="how-tab_link-content">
                                    <div className="how-tab_header">
                                        <div className="w-layout-hflex flex-h_left-center gap-16">
                                            <div className="tab-number-wrapper">
                                                <div className="text-13 weight-regular lh-150">04</div>
                                            </div>
                                            <div className="text-20 weight-semibold lh-150">
                                                {_props.data.how_step_4_name}
                                            </div>
                                        </div>
                                        <img alt="" loading="lazy" src={asset("/images-static/chevron-down-gray.svg")}/>
                                    </div>
                                    <div className="how-tabs_content tablet_show"><img
                                        alt="'Refine until perfect' Tab image" loading="lazy"
                                        src={asset("/images-static/how-tabs-4_1how-tabs-4.avif")} width="553"/></div>
                                    <div className="how-tab_details">
                                        <div className="max-width-343">
                                            <div className="text-15 weight-regular lh-145">
                                                {_props.data.how_step_4_text}
                                            </div>
                                        </div>
                                        <div className="how-tab_footer">
                                            <div button-black=""
                                                 calendly-link="https://calendly.com/awesomic/demo?hide_gdpr_banner=1"
                                                 className="button tab_button-imitation">
                                                <div className="z-index-1">Get started</div>
                                                <img alt="" className="z-index-1" loading="lazy"
                                                     src={asset("/images-static/open-link-icon.svg")}/>
                                                <div className="button-background"></div>
                                            </div>
                                            <div className="how-tab_progress-wrapper">
                                                <div className="how-tab_progress-status"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="how-tabs_content w-tab-content">
                            <div className="how-tab-pane_wrapper w-tab-pane w--tab-active" data-w-tab="Tab 1"><img
                                alt="Join Awesomic Tab Image" loading="lazy"
                                src={asset("/images-static/how-tab-1_1how-tab-1.avif")} width="553"/></div>
                            <div className="how-tab-pane_wrapper w-tab-pane" data-w-tab="Tab 2"><img
                                alt="Submit tasks Tab image" loading="lazy"
                                src={asset("/images-static/how-tab-2_1how-tab-2.avif")} width="553"/></div>
                            <div className="how-tab-pane_wrapper w-tab-pane" data-w-tab="Tab 3"><img
                                alt="Get matched Tab image" loading="lazy"
                                src={asset("/images-static/how-tab-3_1how-tab-3.avif")} width="553"/></div>
                            <div className="how-tab-pane_wrapper w-tab-pane" data-w-tab="Tab 4"><img
                                alt="'Refine until perfect' Tab image" loading="lazy"
                                src={asset("/images-static/how-tabs-4_1how-tabs-4.avif")} width="553"/></div>
                        </div>
                    </div>
                    <div className="w-embed">
                        <style dangerouslySetInnerHTML={{
                            __html: `
      .how-tabs_content{
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
      }
      .how-tabs_component::before, .how-tabs_component::after{
        display: none;
      }
      .how-tab_link .how-tab_link-content .how-tab_details{
        height: 0;
        background: rgba(255,255,255,0);
        /*transition: all .25s;*/
        opacity: 0;
      }
      .how-tab_link.w--current .how-tab_link-content .how-tab_details{
        height: auto;
        background: rgba(255,255,255,1);
        opacity: 1;
      }
      .how-tab_link .how-tab_link-content .how-tab_header img{
        transition: all .25s;
      }
      .how-tab_link.w--current .how-tab_link-content .how-tab_header img{
        transform: rotate(-90deg);
      }
      .how-tab_link .how-tab_link-content {
        background: rgba(255,255,255,0);
        transition: all .25s;
      }
      .how-tab_link.w--current .how-tab_link-content{
        background: rgba(255,255,255,1);
        border-color: var(--_colors---gray--gray-150);
        box-shadow: 0 4px 12px #0000000a;
        height: 264px;
      }
      @media screen and (max-width: 991px){
        .how-tab_link.w--current .how-tab_link-content{
          height: auto;
        }
        .how-tab_link .how-tabs_content{
        	display: none;
        }
        .how-tab_link .how-tabs_content img{
        	backdrop-filter: blur(8px);
        }
        .how-tab_link.w--current .how-tabs_content{
        	display: flex;
        }
      }
    `
                        }}/>
                    </div>
                    {/* script → useEffect */}
                </div>
            </div>
            <div className="spacer-144"></div>
        </section>
    );
}
