'use client';

import type {PseoPageData} from "@/lib/pseo-types";
import {useEffect} from "react";

const ASSET_BASE = process.env.NEXT_PUBLIC_ASSET_BASE ?? "";
const asset = (src: string) => `${ASSET_BASE}${src.startsWith("/") ? src : `/${src}`}`;

export function SectionPricing(_props: { data?: PseoPageData }) {

    useEffect(() => {
        const oneToOneTabsButtons = document.querySelectorAll<HTMLElement>('.one-to-one-tab');
        oneToOneTabsButtons.forEach((item) => {
            item.addEventListener('click', function () {
                const parentCard = item.closest('.pricing_item');
                if (!parentCard) return;
                parentCard.querySelector('.one-to-one-tab.is-active')?.classList.remove('is-active');
                item.classList.add('is-active');
                const attributes = Object.fromEntries(Array.from(item.attributes).map((attr) => [attr.name, attr.value]));
                const longEl = parentCard.querySelector<HTMLElement>('[long-changable]');
                const shortEl = parentCard.querySelector<HTMLElement>('[short-changable]');
                if (longEl) longEl.innerText = attributes['long-text-sub'];
                if (shortEl) shortEl.innerText = attributes['short-text-sub'];
            });
        });
    }, []);

    return (
        <section className="background-gray-100 section-radius">
            <div className="spacer-34 mobile_spacer-24"></div>
            <div className="padding-global">
                <div className="container-1344">
                    <div className="pricing_main-component">
                        <div data-tabs-group="pricing-tabs" data-current="monthly" data-easing="ease"
                             data-duration-in="300" data-duration-out="100"
                             className="pricing-tabs_main w-tabs">
                            <div className="pricing-tabs-menu_main w-tab-menu">
                                <a data-w-tab="monthly" className="pricing_tab-menu-item w-inline-block w-tab-link w--current">
                                    <div className="text-13 weight-medium lh-125">Monthly</div>
                                </a>
                                <a data-w-tab="annual" className="pricing_tab-menu-item w-inline-block w-tab-link">
                                    <div className="text-13 weight-medium lh-125">Quarterly (Save 20%)</div>
                                </a>
                            </div>
                            <div className="pricing-tabs_content w-tab-content">

                                {/* ── MONTHLY ── */}
                                <div data-w-tab="monthly" className="w-tab-pane w--tab-active">
                                    <div className="pricing-update">

                                        {/* Awesomic Studio */}
                                        <div className="pricing_item is-black max-height-mod">
                                            <div className="pricing_top-info">
                                                <div>
                                                    <div className="pricing-header">
                                                        <div className="pricing-name">
                                                            <img width="Auto" height="32" width='32' alt="" loading="lazy"
                                                                 src={asset("/images-static/rock-super_1rock-super.avif")}/>
                                                            <div className="text-20 weight-semibold lh-156">AI designer</div>
                                                        </div>
                                                        <div className="category-tag darker">New</div>
                                                    </div>
                                                    <div className="spacer-20"></div>
                                                    <div className="pricing_text-wrapper">
                                                        <div className="text-15 weight-regular lh-145">Your AI-powered design studio. Generate high-quality, production-ready landing pages, websites and web app in minutes — no designer needed</div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="pricing_price-container">
                                                        <div original-value="200" className="heading-style-h4 mod-numbers text-white">$200</div>
                                                        <div className="pricing_price-info">
                                                            <div className="text-13 weight-regular lh-135 text-gray-400 mod-pricing"><br/>/ month</div>
                                                        </div>
                                                    </div>
                                                    <div className="spacer-24"></div>
                                                    <a calendly-link="" data-wf--button-white--variant="white-full-width"
                                                       href="https://app.awesomic.com/register" target="_blank"
                                                       className="button is-white w-variant-9877a804-44c7-fec3-6693-6e500a2d180f w-inline-block">
                                                        <div>Get started</div>
                                                        <img src={asset("/images-static/login-icon-black.svg")} loading="lazy" alt="" className="button-icon"/>
                                                    </a>
                                                    <div className="spacer-28"></div>
                                                    <div className="pricing_list">
                                                        <div className="pricing_list-item">
                                                            <img loading="lazy" src={asset("/images-static/checkmark-circle-white.svg")} alt=""/>
                                                            <div className="text-15 weight-regular lh-145">AI landing pages, web sites &amp; app</div>
                                                        </div>
                                                        <div className="pricing_list-item">
                                                            <img loading="lazy" src={asset("/images-static/checkmark-circle-white.svg")} alt=""/>
                                                            <div className="text-15 weight-regular lh-145 text-style-1line">Use across multiple projects</div>
                                                        </div>
                                                        <div className="pricing_list-item">
                                                            <img loading="lazy" src={asset("/images-static/timin-icon-white.svg")} alt=""/>
                                                            <div className="text-15 weight-regular lh-145">New services added regularly</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="pricing_divider is-super"></div>
                                                <div className="spacer-20"></div>
                                                <a href="#compare-section" className="pricing_to-details w-inline-block">
                                                    <div className="text-13 weight-medium lh-135 text-white">View all services</div>
                                                    <img loading="lazy" src={asset("/images-static/chevron-down-white.svg")} alt=""/>
                                                </a>
                                            </div>
                                        </div>

                                        {/* All-in-one */}
                                        <div className="pricing_item">
                                            <div className="pricing_top-info">
                                                <div>
                                                    <div className="pricing-header">
                                                        <div className="pricing-name">
                                                            <img width="Auto" height="32" width="32" alt="" loading="lazy"
                                                                 src={asset("/images-static/rock-pro_1rock-pro.avif")}/>
                                                            <div className="text-20 weight-semibold lh-156">All-in-one</div>
                                                        </div>
                                                    </div>
                                                    <div className="spacer-20"></div>
                                                    <div className="pricing_text-wrapper">
                                                        <div className="text-15 weight-regular lh-145">Skip the hiring drama. Get copy, design, and Webflow implementation in one seamless subscription. Switch tasks daily with zero friction</div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="pricing_price-container">
                                                        <div original-value="2995" className="heading-style-h4 mod-numbers">$2995</div>
                                                        <div className="pricing_price-info">
                                                            <div className="text-13 weight-regular lh-135 text-gray-400 mod-pricing"><br/>/ month</div>
                                                        </div>
                                                    </div>
                                                    <div className="spacer-24"></div>
                                                    <a calendly-link="" button-black="" data-wf--button-black-m--variant="base-full-width"
                                                       href="https://app.awesomic.com/register" target="_blank"
                                                       className="button w-variant-d66e8b99-9512-4f1b-0527-c00e632abd95 w-inline-block">
                                                        <div className="z-index-1">Get started</div>
                                                        <img src={asset("/images-static/login-icon-white.svg")} loading="lazy" alt="" height="20" className="button-icon"/>
                                                        <div className="button-background w-variant-d66e8b99-9512-4f1b-0527-c00e632abd95"></div>
                                                    </a>
                                                    <div className="spacer-28"></div>
                                                    <div className="pricing_list">
                                                        <div className="pricing_list-item">
                                                            <img loading="lazy" src={asset("/images-static/checkmark-circle-dark.svg")} alt=""/>
                                                            <div className="text-15 weight-regular lh-145">Part–time talents</div>
                                                        </div>
                                                        <div className="pricing_list-item">
                                                            <img loading="lazy" src={asset("/images-static/checkmark-circle-dark.svg")} alt=""/>
                                                            <div className="text-15 weight-regular lh-145">All design, no-code, copywriting &amp; QA services</div>
                                                        </div>
                                                        <div className="pricing_list-item">
                                                            <img loading="lazy" src={asset("/images-static/slack-dark.svg")} alt=""/>
                                                            <div className="text-15 weight-regular lh-145">Slack integration</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="pricing_divider"></div>
                                                <div className="spacer-20"></div>
                                                <a href="#compare-section" className="pricing_to-details w-inline-block">
                                                    <div className="text-13 weight-medium lh-135">View all services</div>
                                                    <img loading="lazy" src={asset("/images-static/circle-chevron-down.svg")} alt=""/>
                                                </a>
                                            </div>
                                        </div>

                                        {/* 1 to 1 */}
                                        <div className="pricing_item max-height-mod">
                                            <div className="pricing_top-info gap-16">
                                                <div>
                                                    <div className="pricing-header one-to-one">
                                                        <div className="pricing-name">
                                                            <img width="Auto" height="32" width='32' alt="" loading="lazy"
                                                                 src={asset("/images-static/rock-1-1.avif")}/>
                                                            <div className="text-20 weight-semibold lh-156">1 to 1</div>
                                                        </div>
                                                        <div className="one-to-one-tabs-wrapper">
                                                            <div short-text-sub="Full-time dedicated talent + PM support"
                                                                 long-text-sub="Hiring takes forever? Get a dedicated talent and a PM to handle setup, comms, and quality. No unreliable freelancers. Fast and personal."
                                                                 className="one-to-one-tab is-active">
                                                                <img src={asset("/images-static/checkmark-black-plain-icon.svg")} loading="lazy" width="16" alt="" className="one-to-one-tab-icon"/>
                                                                <div className="text-13 weight-medium lh-125">Full-time</div>
                                                            </div>
                                                            <div short-text-sub="Part-time dedicated talent + PM support"
                                                                 long-text-sub="Hiring takes forever? Get a dedicated talent and a PM to handle setup, comms, and quality. No unreliable freelancers. Fast and personal."
                                                                 className="one-to-one-tab">
                                                                <img src={asset("/images-static/checkmark-black-plain-icon.svg")} loading="lazy" width="16" alt="" className="one-to-one-tab-icon"/>
                                                                <div className="text-13 weight-medium lh-125">Part-time</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="spacer-20"></div>
                                                    <div className="pricing_text-wrapper">
                                                        <div long-changable="" className="text-15 weight-regular lh-145">Hiring takes forever? Get a dedicated talent and a PM to handle setup, comms, and quality. No unreliable freelancers. Fast and personal.</div>
                                                        <div className="spacer-20"></div>
                                                        <a href="https://app.awesomic.com/database/talents?tab=all" target="_blank"
                                                           className="pricing_to-details mod-talents w-inline-block">
                                                            <img width="49" loading="lazy" alt="" src={asset("/images-static/pricing-1-1-faces_1pricing-1-1-faces.avif")}/>
                                                            <div className="text-13 weight-medium lh-135">View all talents</div>
                                                            <img loading="lazy" src={asset("/images-static/new-page-black.svg")} alt=""/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="margin-0 w-form">
                                                        <form id="monthly" name="email-form" data-name="Email Form"
                                                              action="http://#" method="get">
                                                            <input className="input w-input" maxLength={256} name="name"
                                                                   data-name="Name" placeholder="Email address"
                                                                   type="text" id="name" required/>
                                                            <div className="spacer-20"></div>
                                                            <div className="submit-button_wrapper">
                                                                <input type="submit" data-wait="Please wait..."
                                                                       className="submit-button w-button" value="Submit"/>
                                                                <a calendly-link="" button-black=""
                                                                   data-wf--button-black-m--variant="base-full-width"
                                                                   href="#"
                                                                   className="button w-variant-d66e8b99-9512-4f1b-0527-c00e632abd95 w-inline-block">
                                                                    <div className="z-index-1">Book demo</div>
                                                                    <img src={asset("/images-static/login-icon-white.svg")} loading="lazy" alt="" height="20" className="button-icon"/>
                                                                    <div className="button-background w-variant-d66e8b99-9512-4f1b-0527-c00e632abd95"></div>
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
                                                    <div className="spacer-28"></div>
                                                    <div className="pricing_list">
                                                        <div className="pricing_list-item">
                                                            <img loading="lazy" src={asset("/images-static/checkmark-circle-dark.svg")} alt=""/>
                                                            <div short-changable="" className="text-15 weight-regular lh-145">Full-time dedicated talent</div>
                                                        </div>
                                                        <div className="pricing_list-item">
                                                            <img loading="lazy" src={asset("/images-static/checkmark-circle-dark.svg")} alt=""/>
                                                            <div className="text-15 weight-regular lh-145">All available services</div>
                                                        </div>
                                                        <div className="pricing_list-item">
                                                            <img loading="lazy" src={asset("/images-static/checkmark-circle-dark.svg")} alt=""/>
                                                            <div className="text-15 weight-regular lh-145">Choose your workspace</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="pricing_divider"></div>
                                                <div className="spacer-20"></div>
                                                <a href="#compare-section" className="pricing_to-details w-inline-block">
                                                    <div className="text-13 weight-medium lh-135">View all services</div>
                                                    <img loading="lazy" src={asset("/images-static/circle-chevron-down.svg")} alt=""/>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* ── QUARTERLY ── */}
                                <div data-w-tab="annual" className="w-tab-pane">
                                    <div className="pricing-update">

                                        {/* Awesomic Studio – no quarterly discount */}
                                        <div className="pricing_item is-black max-height-mod">
                                            <div className="pricing_top-info">
                                                <div>
                                                    <div className="pricing-header">
                                                        <div className="pricing-name">
                                                            <img width="Auto" height="32" width='32' alt="" loading="lazy"
                                                                 src={asset("/images-static/rock-super_1rock-super.avif")}/>
                                                            <div className="text-20 weight-semibold lh-156">AI designer</div>
                                                        </div>
                                                        <div className="category-tag darker">New</div>
                                                    </div>
                                                    <div className="spacer-20"></div>
                                                    <div className="pricing_text-wrapper">
                                                        <div className="text-15 weight-regular lh-145">Your AI-powered design studio. Generate high-quality, production-ready landing pages, websites and web app in minutes — no designer needed</div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="pricing_price-container">
                                                        <div original-value="200" className="heading-style-h4 mod-numbers text-white">$200</div>
                                                        <div className="pricing_price-info">
                                                            <div className="text-13 weight-regular lh-135 text-gray-400 mod-pricing"><br/>/ month</div>
                                                        </div>
                                                    </div>
                                                    <div className="spacer-24"></div>
                                                    <a calendly-link="" data-wf--button-white--variant="white-full-width"
                                                       href="https://app.awesomic.com/register" target="_blank"
                                                       className="button is-white w-variant-9877a804-44c7-fec3-6693-6e500a2d180f w-inline-block">
                                                        <div>Get started</div>
                                                        <img src={asset("/images-static/login-icon-black.svg")} loading="lazy" alt="" className="button-icon"/>
                                                    </a>
                                                    <div className="spacer-28"></div>
                                                    <div className="pricing_list">
                                                        <div className="pricing_list-item">
                                                            <img loading="lazy" src={asset("/images-static/checkmark-circle-white.svg")} alt=""/>
                                                            <div className="text-15 weight-regular lh-145">AI landing pages, web sites &amp; app</div>
                                                        </div>
                                                        <div className="pricing_list-item">
                                                            <img loading="lazy" src={asset("/images-static/checkmark-circle-white.svg")} alt=""/>
                                                            <div className="text-15 weight-regular lh-145 text-style-1line">Use across multiple projects</div>
                                                        </div>
                                                        <div className="pricing_list-item">
                                                            <img loading="lazy" src={asset("/images-static/timin-icon-white.svg")} alt=""/>
                                                            <div className="text-15 weight-regular lh-145">New services added regularly</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="pricing_divider is-super"></div>
                                                <div className="spacer-20"></div>
                                                <a href="#compare-section" className="pricing_to-details w-inline-block">
                                                    <div className="text-13 weight-medium lh-135 text-white">View all services</div>
                                                    <img loading="lazy" src={asset("/images-static/chevron-down-white.svg")} alt=""/>
                                                </a>
                                            </div>
                                        </div>

                                        {/* All-in-one – quarterly discounted */}
                                        <div className="pricing_item">
                                            <div className="pricing_top-info">
                                                <div>
                                                    <div className="pricing-header">
                                                        <div className="pricing-name">
                                                            <img width="Auto" height="32" width="32" alt="" loading="lazy"
                                                                 src={asset("/images-static/rock-pro_1rock-pro.avif")}/>
                                                            <div className="text-20 weight-semibold lh-156">All-in-one</div>
                                                        </div>
                                                    </div>
                                                    <div className="spacer-20"></div>
                                                    <div className="pricing_text-wrapper">
                                                        <div className="text-15 weight-regular lh-145">Skip the hiring drama. Get copy, design, and Webflow implementation in one seamless subscription. Switch tasks daily with zero friction</div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div original-value="2995"
                                                         className="text-15 weight-regular lh-135 text-gray-400 text-style-strikethrough">$2995
                                                    </div>
                                                    <div className="spacer-8"></div>
                                                    <div className="pricing_price-container">
                                                        <div original-value="2396" className="heading-style-h4 mod-numbers">$2396</div>
                                                        <div className="pricing_price-info">
                                                            <div className="text-13 weight-regular lh-135 text-gray-400">/&nbsp; billed monthly<br/>quarterly commitment</div>
                                                        </div>
                                                    </div>
                                                    <div className="spacer-24"></div>
                                                    <a calendly-link="" button-black="" data-wf--button-black-m--variant="base-full-width"
                                                       href="https://app.awesomic.com/register" target="_blank"
                                                       className="button w-variant-d66e8b99-9512-4f1b-0527-c00e632abd95 w-inline-block">
                                                        <div className="z-index-1">Get started</div>
                                                        <img src={asset("/images-static/login-icon-white.svg")} loading="lazy" alt="" height="20" className="button-icon"/>
                                                        <div className="button-background w-variant-d66e8b99-9512-4f1b-0527-c00e632abd95"></div>
                                                    </a>
                                                    <div className="spacer-28"></div>
                                                    <div className="pricing_list">
                                                        <div className="pricing_list-item">
                                                            <img loading="lazy" src={asset("/images-static/checkmark-circle-dark.svg")} alt=""/>
                                                            <div className="text-15 weight-regular lh-145">Part–time talents</div>
                                                        </div>
                                                        <div className="pricing_list-item">
                                                            <img loading="lazy" src={asset("/images-static/checkmark-circle-dark.svg")} alt=""/>
                                                            <div className="text-15 weight-regular lh-145">All design, no-code, copywriting &amp; QA services</div>
                                                        </div>
                                                        <div className="pricing_list-item">
                                                            <img loading="lazy" src={asset("/images-static/slack-dark.svg")} alt=""/>
                                                            <div className="text-15 weight-regular lh-145">Slack integration</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="pricing_divider"></div>
                                                <div className="spacer-20"></div>
                                                <a href="#compare-section" className="pricing_to-details w-inline-block">
                                                    <div className="text-13 weight-medium lh-135">View all services</div>
                                                    <img loading="lazy" src={asset("/images-static/circle-chevron-down.svg")} alt=""/>
                                                </a>
                                            </div>
                                        </div>

                                        {/* 1 to 1 – quarterly */}
                                        <div className="pricing_item max-height-mod">
                                            <div className="pricing_top-info gap-16">
                                                <div>
                                                    <div className="pricing-header one-to-one">
                                                        <div className="pricing-name">
                                                            <img width="Auto" height="32" width='32' alt="" loading="lazy"
                                                                 src={asset("/images-static/rock-1-1.avif")}/>
                                                            <div className="text-20 weight-semibold lh-156">1 to 1</div>
                                                        </div>
                                                        <div className="one-to-one-tabs-wrapper">
                                                            <div short-text-sub="Full-time dedicated talent + PM support"
                                                                 long-text-sub="Hiring takes forever? Get a dedicated talent and a PM to handle setup, comms, and quality. No unreliable freelancers. Fast and personal."
                                                                 className="one-to-one-tab is-active">
                                                                <img src={asset("/images-static/checkmark-black-plain-icon.svg")} loading="lazy" width="16" alt="" className="one-to-one-tab-icon"/>
                                                                <div className="text-13 weight-medium lh-125">Full-time</div>
                                                            </div>
                                                            <div short-text-sub="Part-time dedicated talent + PM support"
                                                                 long-text-sub="Hiring takes forever? Get a dedicated talent and a PM to handle setup, comms, and quality. No unreliable freelancers. Fast and personal."
                                                                 className="one-to-one-tab">
                                                                <img src={asset("/images-static/checkmark-black-plain-icon.svg")} loading="lazy" width="16" alt="" className="one-to-one-tab-icon"/>
                                                                <div className="text-13 weight-medium lh-125">Part-time</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="spacer-20"></div>
                                                    <div className="pricing_text-wrapper">
                                                        <div long-changable="" className="text-15 weight-regular lh-145">Hiring takes forever? Get a dedicated talent and a PM to handle setup, comms, and quality. No unreliable freelancers. Fast and personal.</div>
                                                        <div className="spacer-20"></div>
                                                        <a href="https://app.awesomic.com/database/talents?tab=all" target="_blank"
                                                           className="pricing_to-details mod-talents w-inline-block">
                                                            <img width="49" loading="lazy" alt="" src={asset("/images-static/pricing-1-1-faces_1pricing-1-1-faces.avif")}/>
                                                            <div className="text-13 weight-medium lh-135">View all talents</div>
                                                            <img loading="lazy" src={asset("/images-static/new-page-black.svg")} alt=""/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="margin-0 w-form">
                                                        <form id="annual" name="email-form" data-name="Email Form"
                                                              action="http://#" method="get">
                                                            <input className="input w-input" maxLength={256} name="name"
                                                                   data-name="Name" placeholder="Email address"
                                                                   type="text" id="name" required/>
                                                            <div className="spacer-20"></div>
                                                            <div className="submit-button_wrapper">
                                                                <input type="submit" data-wait="Please wait..."
                                                                       className="submit-button w-button" value="Submit"/>
                                                                <a calendly-link="" button-black=""
                                                                   data-wf--button-black-m--variant="base-full-width"
                                                                   href="#"
                                                                   className="button w-variant-d66e8b99-9512-4f1b-0527-c00e632abd95 w-inline-block">
                                                                    <div className="z-index-1">Book demo</div>
                                                                    <img src={asset("/images-static/login-icon-white.svg")} loading="lazy" alt="" height="20" className="button-icon"/>
                                                                    <div className="button-background w-variant-d66e8b99-9512-4f1b-0527-c00e632abd95"></div>
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
                                                    <div className="spacer-28"></div>
                                                    <div className="pricing_list">
                                                        <div className="pricing_list-item">
                                                            <img loading="lazy" src={asset("/images-static/checkmark-circle-dark.svg")} alt=""/>
                                                            <div short-changable="" className="text-15 weight-regular lh-145">Full-time dedicated talent</div>
                                                        </div>
                                                        <div className="pricing_list-item">
                                                            <img loading="lazy" src={asset("/images-static/checkmark-circle-dark.svg")} alt=""/>
                                                            <div className="text-15 weight-regular lh-145">All available services</div>
                                                        </div>
                                                        <div className="pricing_list-item">
                                                            <img loading="lazy" src={asset("/images-static/checkmark-circle-dark.svg")} alt=""/>
                                                            <div className="text-15 weight-regular lh-145">Choose your workspace</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="pricing_divider"></div>
                                                <div className="spacer-20"></div>
                                                <a href="#compare-section" className="pricing_to-details w-inline-block">
                                                    <div className="text-13 weight-medium lh-135">View all services</div>
                                                    <img loading="lazy" src={asset("/images-static/circle-chevron-down.svg")} alt=""/>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spacer-128"></div>
        </section>
    );
}
