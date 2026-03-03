"use client";

import {useEffect} from "react";
import type {PseoPageData} from "@/lib/pseo-types";

const ASSET_BASE = process.env.NEXT_PUBLIC_ASSET_BASE ?? "";
interface sectionProps {
    data?: PseoPageData;
}
const asset = (src: string) => `${ASSET_BASE}${src.startsWith("/") ? src : `/${src}`}`;

export function WhyAwesomic({data}: sectionProps) {
    useEffect(() => {
        const showTabsTrigger = document.querySelector('.how-choose-pro-button');
        const whyAnimationContainer = document.querySelector('.why-steps-animated-wrapper');
        const closeTabsTrigger = document.querySelector('.close-why-animated');
        var whyTimeout;
        var whyIsPaused = false;
        var currentAnimation = null; // keep reference to active animation
        function whyTabLoop() {
            if (whyIsPaused) return; // stop if paused
            whyTimeout = setTimeout(function () {
                var current = document.querySelector('.why-animated-steps-menu .w--current');
                var next = current ? current.nextElementSibling : null;
                if (next) {
                    if (document.querySelector(".why-animated-steps-menu").classList.contains("w--open")) {
                        whyTabLoop();
                    } else {
                        next.removeAttribute("href");
                        next.click();
                        whyStartAnimation(Array.from(document.querySelectorAll('.why-step')).indexOf(next));
                        whyTabLoop();
                    }
                } else {
                    // when reaching the end \u2192 restart at first tab
                    var firstTab = document.querySelector('.why-step');
                    if (firstTab) {
                        firstTab.removeAttribute("href");
                        firstTab.click();
                        whyStartAnimation(0);
                        whyTabLoop();
                    }
                }
            }, 5000);
        }

        function whyStartAnimation(index) {
            const currentTab = document.querySelectorAll('.why-animated-pane')[index];
            if (!currentTab) return;
            const progressBarWrapper = currentTab.querySelector('.how-tab_progress-wrapper');
            if (!progressBarWrapper) return;
            const progressStatus = progressBarWrapper.querySelector('.how-tab_progress-status');
            if (!progressStatus) return;
            // cancel any previous animation
            if (currentAnimation) {
                currentAnimation.cancel();
            }
            currentAnimation = progressStatus.animate([
                {width: '0%'},
                {width: '100%'}
            ], {
                duration: 5000,
                easing: 'ease-in-out',
                fill: 'forwards'
            });
        }

        // click on tab \u2192 continue from clicked index
        document.querySelectorAll('.why-step').forEach(function (tabLink, index) {
            tabLink.addEventListener('click', function () {
                clearTimeout(whyTimeout);
                whyStartAnimation(index);
                whyTabLoop();
            });
        });
        // click on "show tabs" button \u2192 always restart at first step
        showTabsTrigger.addEventListener('click', function () {
            console.log('clicked');
            clearTimeout(whyTimeout);
            whyAnimationContainer.style.display = '';
            const firstTab = document.querySelector('.why-step');
            if (firstTab) {
                firstTab.removeAttribute("href");
                firstTab.click();
                whyStartAnimation(0);
                whyTabLoop();
            }
        });
        closeTabsTrigger.addEventListener('click', function () {
            clearTimeout(whyTimeout);     // stop loop
            whyAnimationContainer.style.display = 'none';
            if (currentAnimation) {
                currentAnimation.cancel(); // stop animation
                currentAnimation = null;
            }
            whyIsPaused = true;           // mark as paused so loop won't restart
        });
        if (window.innerWidth < 567) {
            document.addEventListener('click', function (e) {
                const wrapper = document.querySelector('.why-awesomic_block._w-face');
                if (wrapper && !wrapper.contains(e.target)) {
                    clearTimeout(whyTimeout);
                    whyAnimationContainer.style.display = 'none';
                    if (currentAnimation) {
                        currentAnimation.cancel();
                        currentAnimation = null;
                    }
                    whyIsPaused = true;
                }
            });
        }
    }, []);

    return (
        <section className="section-radius section-offset background-white">
            <div className="spacer-80"></div>
            <div className="padding-global">
                <div className="container-1280">
                    <h2 className="heading-style-h3 text-align-center">Why awesomic</h2>
                    <div className="spacer-48"></div>
                    <div className="why-awesomic-complex">
                        <div className="why-awesomic-even-blocks"
                             id="w-node-a488271d-2586-c5f6-c1af-585df5446830-dba9761c">
                            <div className="why-awesomic_block overflow-hidden">
                                <div className="w-layout-hflex x-space-between">
                                    <div>
                                        <div className="heading-style-h4">4 000+</div>
                                        <div className="spacer-4"></div>
                                        <div className="text-20 weight-semibold lh-156 text-gray-900">Customers</div>
                                    </div>
                                    <img alt="" loading="lazy" src={asset("/images-static/customers-icon.png")} width="80"/>
                                </div>
                                <div className="carousel-component absolute">
                                    <div className="carousel">
                                        <div className="logo-carousel-overlay"></div>
                                        <div className="logo-carousel-wrap" style={{
                                            WebkitTransform: 'translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                            MozTransform: 'translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                            MsTransform: 'translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                            transform: 'translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                                        }}>
                                            <ul className="logo-carousel" role="list">
                                                <li className="logo-carousel_item"><img alt="YC logo"
                                                                                        className="logo-image small"
                                                                                        height="24" loading="lazy"
                                                                                        src={asset("/images-static/yc-new-png.png")}/>
                                                </li>
                                                <li className="logo-carousel_item"><img alt="Coca-Cola logo"
                                                                                        className="logo-image small"
                                                                                        loading="lazy"
                                                                                        src={asset("/images-static/coca-cola-new-png.png")}/>
                                                </li>
                                                <li className="logo-carousel_item"><img alt="Disney Logo"
                                                                                        className="logo-image small"
                                                                                        loading="lazy"
                                                                                        src={asset("/images-static/disney-new-png.png")}/>
                                                </li>
                                                <li className="logo-carousel_item"><img alt="Genesis Logo"
                                                                                        className="logo-image small"
                                                                                        loading="lazy"
                                                                                        src={asset("/images-static/genesis.avif")}
                                                                                        width="58"/></li>
                                                <li className="logo-carousel_item"><img alt="udemy logo"
                                                                                        className="logo-image small"
                                                                                        loading="lazy"
                                                                                        src={asset("/images-static/udemy-new-png.png")}/>
                                                </li>
                                                <li className="logo-carousel_item"><img alt="EY logo"
                                                                                        className="logo-image small"
                                                                                        loading="lazy"
                                                                                        src={asset("/images-static/ey-new-png_1ey-new-png.png")}/>
                                                </li>
                                                <li className="logo-carousel_item"><img alt="Pandadoc logo"
                                                                                        className="logo-image small"
                                                                                        loading="lazy"
                                                                                        src={asset("/images-static/panda-doc-new-png.png")}/>
                                                </li>
                                            </ul>
                                            <div className="logo-carousel-clone">
                                                <ul className="logo-carousel" role="list">
                                                    <li className="logo-carousel_item"><img alt="YC logo"
                                                                                            className="logo-image small"
                                                                                            height="24" loading="lazy"
                                                                                            src={asset("/images-static/yc-new-png.png")}/>
                                                    </li>
                                                    <li className="logo-carousel_item"><img alt="Coca-Cola logo"
                                                                                            className="logo-image small"
                                                                                            loading="lazy"
                                                                                            src={asset("/images-static/coca-cola-new-png.png")}/>
                                                    </li>
                                                    <li className="logo-carousel_item"><img alt="Disney Logo"
                                                                                            className="logo-image small"
                                                                                            loading="lazy"
                                                                                            src={asset("/images-static/disney-new-png.png")}/>
                                                    </li>
                                                    <li className="logo-carousel_item"><img alt="Genesis Logo"
                                                                                            className="logo-image small"
                                                                                            loading="lazy"
                                                                                            src={asset("/images-static/genesis.avif")}
                                                                                            width="58"/></li>
                                                    <li className="logo-carousel_item"><img alt="udemy logo"
                                                                                            className="logo-image small"
                                                                                            loading="lazy"
                                                                                            src={asset("/images-static/udemy-new-png.png")}/>
                                                    </li>
                                                    <li className="logo-carousel_item"><img alt="EY logo"
                                                                                            className="logo-image small"
                                                                                            loading="lazy"
                                                                                            src={asset("/images-static/ey-new-png_1ey-new-png.png")}/>
                                                    </li>
                                                    <li className="logo-carousel_item"><img alt="Pandadoc logo"
                                                                                            className="logo-image small"
                                                                                            loading="lazy"
                                                                                            src={asset("/images-static/panda-doc-new-png.png")}/>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="logo-carousel-overlay is-right"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="why-awesomic_block overflow-hidden">
                                <div className="text-20 weight-semibold lh-156 text-align-center text-gray-900">Flat
                                    monthly fee
                                </div>
                                <img alt="" className="why-rock-image" height="182" loading="lazy"
                                     src={asset("/images-static/logo-on-rock_1logo on rock.avif")} width="190.5"/>
                            </div>
                        </div>
                        <div className="why-awesomic_big" id="w-node-a488271d-2586-c5f6-c1af-585df5446862-dba9761c">
                            <div className="why_first-small">
                                <div className="why-awesomic_block"
                                     id="w-node-a488271d-2586-c5f6-c1af-585df5446864-dba9761c">
                                    <div className="w-layout-hflex x-space-between tablet_text-align-center">
                                        <div className="tablet_max-width-full">
                                            <div className="heading-style-h4">20,000+</div>
                                            <div className="spacer-4"></div>
                                            <div className="text-20 weight-semibold lh-156 text-gray-900">Projects
                                                completed
                                            </div>
                                        </div>
                                        <img alt="" className="tablet_hide" loading="lazy"
                                             src={asset("/images-static/projects-icon.png")} width="80"/>
                                    </div>
                                </div>
                                <div className="why-awesomic_block _w-tags"
                                     id="w-node-a488271d-2586-c5f6-c1af-585df544686d-dba9761c">
                                    <div className="w-layout-vflex gap-6">
                                        <div className="tag-container">
                                            <div className="tag-wrapper">
                                                <div className="tags-list">
                                                    <div className="category-tag is-featured">Design</div>
                                                    <div className="category-tag">UI/UX</div>
                                                    <div className="category-tag">Motion</div>
                                                    <div className="category-tag no-shrink">Brand identity</div>
                                                    <div className="category-tag no-shrink">Product design</div>
                                                    <div className="category-tag">Presentation</div>
                                                    <div className="category-tag">Graphic</div>
                                                    <div className="category-tag">Illustration</div>
                                                    <div className="category-tag no-shrink">Packaging &amp; merch</div>
                                                </div>
                                                <div className="tags-list">
                                                    <div className="category-tag is-featured">Design</div>
                                                    <div className="category-tag">UI/UX</div>
                                                    <div className="category-tag">Motion</div>
                                                    <div className="category-tag no-shrink">Brand identity</div>
                                                    <div className="category-tag no-shrink">Product design</div>
                                                    <div className="category-tag">Presentation</div>
                                                    <div className="category-tag">Graphic</div>
                                                    <div className="category-tag">Illustration</div>
                                                    <div className="category-tag no-shrink">Packaging &amp; merch</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tag-container">
                                            <div className="reverse-tag-wrapper">
                                                <div className="tags-list">
                                                    <div className="category-tag">Analytics &amp; strategy</div>
                                                    <div className="category-tag is-featured">Marketing</div>
                                                    <div className="category-tag">\u00a0Copywriting</div>
                                                    <div className="category-tag no-shrink">Content marketing</div>
                                                    <div className="category-tag no-shrink">SEO</div>
                                                    <div className="category-tag">PPC &amp; paid ads</div>
                                                    <div className="category-tag">Social media marketing</div>
                                                    <div className="category-tag">Email marketing</div>
                                                </div>
                                                <div className="tags-list">
                                                    <div className="category-tag">Analytics &amp; strategy</div>
                                                    <div className="category-tag is-featured">Marketing</div>
                                                    <div className="category-tag">\u00a0Copywriting</div>
                                                    <div className="category-tag no-shrink">Content marketing</div>
                                                    <div className="category-tag no-shrink">SEO</div>
                                                    <div className="category-tag">PPC &amp; paid ads</div>
                                                    <div className="category-tag">Social media marketing</div>
                                                    <div className="category-tag">Email marketing</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tag-container">
                                            <div className="tag-wrapper">
                                                <div className="tags-list">
                                                    <div className="category-tag">QA engineering</div>
                                                    <div className="category-tag is-featured">Software development</div>
                                                    <div className="category-tag">Frontend</div>
                                                    <div className="category-tag no-shrink">Full stack</div>
                                                    <div className="category-tag no-shrink">Backend</div>
                                                    <div className="category-tag">Web development</div>
                                                    <div className="category-tag">Mobile app</div>
                                                    <div className="category-tag">AI development</div>
                                                </div>
                                                <div className="tags-list">
                                                    <div className="category-tag">QA engineering</div>
                                                    <div className="category-tag is-featured">Software development</div>
                                                    <div className="category-tag">Frontend</div>
                                                    <div className="category-tag no-shrink">Full stack</div>
                                                    <div className="category-tag no-shrink">Backend</div>
                                                    <div className="category-tag">Web development</div>
                                                    <div className="category-tag">Mobile app</div>
                                                    <div className="category-tag">AI development</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tag-container">
                                            <div className="reverse-tag-wrapper">
                                                <div className="tags-list">
                                                    <div className="category-tag">Platform connections</div>
                                                    <div className="category-tag is-featured">No-code</div>
                                                    <div className="category-tag">Webflow</div>
                                                    <div className="category-tag no-shrink">Framer</div>
                                                    <div className="category-tag no-shrink">Airtable</div>
                                                    <div className="category-tag">Zapier</div>
                                                    <div className="category-tag">Make</div>
                                                    <div className="category-tag">CMS integration</div>
                                                </div>
                                                <div className="tags-list">
                                                    <div className="category-tag is-featured">No-code</div>
                                                    <div className="category-tag">Webflow</div>
                                                    <div className="category-tag no-shrink">Framer</div>
                                                    <div className="category-tag no-shrink">Airtable</div>
                                                    <div className="category-tag">Zapier</div>
                                                    <div className="category-tag">Make</div>
                                                    <div className="category-tag">CMS integration</div>
                                                    <div className="category-tag">Platform connections</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-layout-hflex skills-animation-wrapper">
                                        <div className="skills-animation-left">
                                            <div className="heading-style-h4">30+</div>
                                            <div className="spacer-4"></div>
                                            <div className="text-20 weight-semibold lh-156 text-gray-900">Skill sets
                                            </div>
                                        </div>
                                        <div className="skills-animation-right"><img alt="" className="tablet_hide"
                                                                                     loading="lazy"
                                                                                     src={asset("/images-static/skill-set-icon.png")}
                                                                                     width="80"/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="why_second-small">
                                <div className="why-awesomic_block _w-face">
                                    <img alt=""
                                                                                           className="face-banner-image"
                                                                                           loading="lazy"
                                                                                           sizes="(max-width: 479px) 100vw, 440px"
                                                                                           src={asset("/images-static/background-bigger-for-card_1background-bigger-for card.avif")}
                                                                                           width="440"/>
                                    <div className="max-width-151 z-index-1 align-center">
                                        <div
                                            className="text-20 weight-semibold lh-156 text-align-center text-gray-900">Vetted<br/>0.82%
                                            talent
                                        </div>
                                    </div>
                                    <img alt="" className="bg-light-blur" loading="lazy"
                                         src={asset("/images-static/-cards-comlex-bg-light_1-cards-comlex-bg-light.avif")}/>
                                    <div className="spacer-32"></div>
                                    <div className="face-mask-wrapper"><img
                                        src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfb02c_face-for-mask.avif"
                                        loading="lazy" width="138" height="138" alt="" className="face-image"/>
                                        <svg viewBox="0 0 138 138" xmlns="http://www.w3.org/2000/svg"
                                             className="mask-figure">
                                            <defs>
                                                <clipPath id="shapeClip" clipPathUnits="userSpaceOnUse">
                                                    <path
                                                        d="M61.5195 0.393555C66.4842 -0.131279 71.4747 -0.131279 76.4395 0.393555C77.0159 0.468597 77.5673 0.743739 77.9434 1.19336C78.3445 1.64315 78.5449 2.21823 78.5449 2.79297V45.8545L109.011 15.4141C109.412 14.9893 109.989 14.7398 110.565 14.7148C111.142 14.6899 111.743 14.8646 112.194 15.2393C114.15 16.8138 116.007 18.4879 117.762 20.2373C119.517 21.9867 121.196 23.8613 122.751 25.8105C123.127 26.2854 123.302 26.8607 123.277 27.4355C123.227 28.0103 123.001 28.5605 122.575 28.9854L92.1104 59.4502H135.188C135.764 59.4502 136.341 59.675 136.768 60.0498C137.194 60.4247 137.47 60.975 137.545 61.5498L137.62 61.5742C138.147 66.5726 138.122 71.5963 137.57 76.5947C137.52 77.1695 137.219 77.7198 136.793 78.0947C136.367 78.4946 135.79 78.6943 135.213 78.6943H92.1348L122.601 109.135C123.002 109.56 123.252 110.134 123.277 110.709C123.302 111.284 123.127 111.883 122.751 112.333C119.667 116.207 116.131 119.731 112.27 122.83C111.818 123.205 111.241 123.38 110.64 123.355C110.063 123.33 109.511 123.08 109.085 122.655L78.6201 92.2148V135.227C78.62 135.801 78.4197 136.351 78.0186 136.801C77.6174 137.251 77.0903 137.526 76.5137 137.601C74.0314 137.875 71.5239 138 69.0166 138C66.5343 138 64.0516 137.875 61.5693 137.601C60.9928 137.526 60.4414 137.226 60.0654 136.801C59.6894 136.376 59.464 135.801 59.4639 135.227V92.165L28.998 122.605C28.5718 123.03 28.02 123.28 27.4434 123.305C26.8417 123.33 26.2647 123.155 25.8135 122.78C23.8579 121.206 22.0028 119.556 20.2227 117.782C18.4675 116.033 16.787 114.158 15.2324 112.209C14.8563 111.759 14.681 111.159 14.7061 110.584C14.7311 109.984 14.9817 109.435 15.3828 109.01L45.8486 78.5693H2.77051C2.19404 78.5693 1.61758 78.3444 1.19141 77.9697C0.765143 77.5948 0.488309 77.0445 0.413086 76.4697C-0.138518 71.5214 -0.138511 66.5231 0.413086 61.5498C0.463235 60.975 0.765143 60.4497 1.19141 60.0498C1.61759 59.6502 2.19402 59.4502 2.77051 59.4502H45.8486L15.3828 28.9854C14.9566 28.5855 14.7058 28.0103 14.6807 27.4355C14.6556 26.8357 14.8309 26.2604 15.207 25.8105C16.7616 23.8612 18.4421 22.0117 20.1973 20.2373C21.9775 18.4629 23.833 16.8137 25.7637 15.2393C26.215 14.8644 26.8169 14.6899 27.3936 14.7148C27.9702 14.7398 28.522 14.9892 28.9482 15.4141L59.4131 45.8545V2.79297C59.4131 2.19325 59.6396 1.64316 60.0156 1.19336C60.3917 0.743754 60.943 0.468509 61.5195 0.393555Z"
                                                        transform="rotate(45 69 69)" id="clipPath"></path>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <img alt="how we choose a pro clickable element" className="how-choose-pro-button"
                                         loading="lazy" src={asset("/images-static/how-we-choose-a-pro-button.png")}
                                         width="226"/>
                                    <div className="why-steps-animated-wrapper" style={{display: 'none'}}>
                                        <div className="why-animated-tabs w-tabs" data-current="Tab 1"
                                             data-duration-in="300" data-duration-out="100" data-easing="ease">
                                            <div className="why-animated-steps-menu w-tab-menu">
                                                <a className="why-step w-inline-block w-tab-link w--current"
                                                   data-w-tab="Tab 1">
                                                    <div className="text-13 weight-regular lh-150">Step 1</div>
                                                </a>
                                                <a className="why-step w-inline-block w-tab-link" data-w-tab="Tab 2">
                                                    <div className="text-13 weight-regular lh-150">Step 2</div>
                                                </a>
                                                <a className="why-step w-inline-block w-tab-link" data-w-tab="Tab 3">
                                                    <div className="text-13 weight-regular lh-150">Step 3</div>
                                                </a>
                                                <a className="why-step w-inline-block w-tab-link" data-w-tab="Tab 4">
                                                    <div className="text-13 weight-regular lh-150">Step 4</div>
                                                </a>
                                            </div>
                                            <div className="why-animated-content w-tab-content">
                                                <div className="why-animated-pane w-tab-pane w--tab-active"
                                                     data-w-tab="Tab 1">
                                                    <div style={{display: 'flex', height: '100%'}}>
                                                        <div className="why-animated_pane-content">
                                                        <div
                                                            className="text-20 weight-semibold lh-156 text-gray-900">
                                                            Portfolio &amp; interview
                                                        </div>
                                                        <div>
                                                            <div className="heading-style-h3">55%</div>
                                                            <div className="spacer-8"></div>
                                                            <div className="max-width-230">
                                                                <div>pass a multi-step task to prove real
                                                                    skills &amp; communication
                                                                </div>
                                                            </div>
                                                            <div className="spacer-24"></div>
                                                            <div className="how-tab_footer margin-0">
                                                                <div className="approvement-faces_wrapper is-static">
                                                                    <img alt=""
                                                                         className="approve_face-image is-first is-light"
                                                                         loading="lazy"
                                                                         src={asset("/images-static/face_8face_7.avif")}/><img
                                                                    alt="" className="approve_face-image is-light"
                                                                    loading="lazy"
                                                                    src={asset("/images-static/face_14face_6.avif")}/><img
                                                                    alt=""
                                                                    className="approve_face-image is-light mobile_hide"
                                                                    loading="lazy"
                                                                    src={asset("/images-static/face_11face_5.avif")}/><img
                                                                    alt=""
                                                                    className="approve_face-image medium_show landscape_show is-light"
                                                                    loading="lazy"
                                                                    src={asset("/images-static/face_9face_4.avif")}/><img
                                                                    alt=""
                                                                    className="approve_face-image large_show landscape_show is-light"
                                                                    loading="lazy"
                                                                    src={asset("/images-static/face_10face_3.avif")}/><img
                                                                    alt=""
                                                                    className="approve_face-image large_show landscape_show is-light tablet_hide"
                                                                    loading="lazy"
                                                                    src={asset("/images-static/face_12face_2.avif")}/><img
                                                                    alt="" className="approve_face-image is-light"
                                                                    loading="lazy"
                                                                    src={asset("/images-static/face_13face_1.avif")}/>
                                                                    <div
                                                                        className="approve_face-image is-text is-light background-gray-150">+60
                                                                    </div>
                                                                </div>
                                                                <div className="how-tab_progress-wrapper tablet_hide">
                                                                    <div className="how-tab_progress-status"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="why-animated-pane w-tab-pane" data-w-tab="Tab 2">
                                                    <div style={{display: 'flex', height: '100%'}}>
                                                    <div className="why-animated_pane-content">
                                                        <div
                                                            className="text-20 weight-semibold lh-156 text-gray-900">Awesomic
                                                            test task
                                                        </div>
                                                        <div>
                                                            <div className="heading-style-h3">21%</div>
                                                            <div className="spacer-8"></div>
                                                            <div className="max-width-230">
                                                                <div>pass a multi-step task to prove real
                                                                    skills &amp; communication
                                                                </div>
                                                            </div>
                                                            <div className="spacer-24"></div>
                                                            <div className="how-tab_footer margin-0">
                                                                <div className="approvement-faces_wrapper is-static">
                                                                    <img alt=""
                                                                         className="approve_face-image is-first is-light"
                                                                         loading="lazy"
                                                                         src={asset("/images-static/face-9_1face-9.avif")}/><img
                                                                    alt="" className="approve_face-image is-light"
                                                                    loading="lazy"
                                                                    src={asset("/images-static/face_11face_5.avif")}/><img
                                                                    alt="" className="approve_face-image is-light"
                                                                    loading="lazy"
                                                                    src={asset("/images-static/face_8face_7.avif")}/><img
                                                                    alt=""
                                                                    className="approve_face-image medium_show landscape_show is-light"
                                                                    loading="lazy"
                                                                    src={asset("/images-static/face_9face_4.avif")}/><img
                                                                    alt="" className="approve_face-image is-light"
                                                                    loading="lazy"
                                                                    src={asset("/images-static/face_13face_1.avif")}/><img
                                                                    alt=""
                                                                    className="approve_face-image large_show landscape_show is-light"
                                                                    loading="lazy"
                                                                    src={asset("/images-static/face_10face_3.avif")}/><img
                                                                    alt=""
                                                                    className="approve_face-image large_show landscape_show is-light tablet_hide"
                                                                    loading="lazy"
                                                                    src={asset("/images-static/face_12face_2.avif")}/>
                                                                    <div
                                                                        className="approve_face-image is-text is-light background-gray-150">+19
                                                                    </div>
                                                                </div>
                                                                <div className="how-tab_progress-wrapper tablet_hide">
                                                                    <div className="how-tab_progress-status"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="why-animated-pane w-tab-pane" data-w-tab="Tab 3">
                                                    <div style={{display: 'flex', height: '100%'}}>
                                                    <div className="why-animated_pane-content">
                                                        <div
                                                            className="text-20 weight-semibold lh-156 text-gray-900">Community
                                                            review
                                                        </div>
                                                        <div>
                                                            <div className="heading-style-h3">5.3%</div>
                                                            <div className="spacer-8"></div>
                                                            <div className="max-width-280">
                                                                <div>get approved by senior talents through blind task
                                                                    evaluation
                                                                </div>
                                                            </div>
                                                            <div className="spacer-24"></div>
                                                            <div className="how-tab_footer margin-0">
                                                                <div className="approvement-faces_wrapper is-static">
                                                                    <img alt="" className="approve_face-image is-light"
                                                                         loading="lazy"
                                                                         src={asset("/images-static/face_11face_5.avif")}/><img
                                                                    alt="" className="approve_face-image is-light"
                                                                    loading="lazy"
                                                                    src={asset("/images-static/face_13face_1.avif")}/></div>
                                                                <div className="how-tab_progress-wrapper tablet_hide">
                                                                    <div className="how-tab_progress-status"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="why-animated-pane w-tab-pane" data-w-tab="Tab 4">
                                                    <div style={{display: 'flex', height: '100%'}}>
                                                    <div className="why-animated_pane-content">
                                                        <div
                                                            className="text-20 weight-semibold lh-156 text-gray-900">Final
                                                            leadership approval
                                                        </div>
                                                        <div>
                                                            <div className="heading-style-h3">0.82%</div>
                                                            <div className="spacer-8"></div>
                                                            <div className="max-width-230">
                                                                <div>align with Awesomic\u2019s values and get fully
                                                                    onboarded
                                                                </div>
                                                            </div>
                                                            <div className="spacer-24"></div>
                                                            <div className="how-tab_footer margin-0">
                                                                <div className="approvement-faces_wrapper is-static">
                                                                    <img alt=""
                                                                         className="approve_face-image is-first is-light"
                                                                         loading="lazy"
                                                                         src={asset("/images-static/masked-featured-head_1masked-featured-head.avif")}/>
                                                                </div>
                                                                <div className="how-tab_progress-wrapper tablet_hide">
                                                                    <div className="how-tab_progress-status"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <img alt="Close icon" className="close-why-animated" loading="lazy"
                                             src={asset("/images-static/close-gray-400.svg")}/>
                                    </div>
                                </div>
                                <div className="why-awesomic_block _w-hills">
                                    <div
                                        className="text-20 weight-semibold lh-150 text-white text-align-center">Pause <span
                                        className="accelerator_text-icon is-pause">&nbsp;</span> or scale <span
                                        className="accelerator_text-icon is-scale">&nbsp;</span> your subscription
                                        anytime
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-embed">
                        <style dangerouslySetInnerHTML={{
                            __html: `
      .tag-wrapper, .logo-carousel-wrap{
        animation: textloop 50s infinite linear;
      }
      .reverse-tag-wrapper{
        animation: reverseloop 50s infinite linear;
      }
      @keyframes textloop {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      @keyframes reverseloop {
        0% {
          transform: translateX(-50%);
        }
        100% {
          transform: translateX(0%);
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
