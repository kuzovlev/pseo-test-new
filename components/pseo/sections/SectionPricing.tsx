import type {PseoPageData} from "@/lib/pseo-types";

const ASSET_BASE = process.env.NEXT_PUBLIC_ASSET_BASE ?? "";
const asset = (src: string) => `${ASSET_BASE}${src.startsWith("/") ? src : `/${src}`}`;

export function SectionPricing(_props: { data?: PseoPageData }) {
    return (
        <section className="background-gray-100 section-radius">
            <div className="spacer-34 mobile_spacer-24"></div>
            <div className="padding-global">
                <div className="container-1344">
                    <h2 className="heading-style-h3 text-align-center">Subscription is the new hiring</h2>
                    <div className="spacer-24"></div>
                    <div className="pricing_main-component">
                        <div className="pricing-tabs_main flex-h_center-center w-tabs" data-current="monthly"
                             data-duration-in="300" data-duration-out="100" data-easing="ease"
                             data-tabs-group="pricing-tabs">
                            <div className="pricing-tabs-menu_main w-tab-menu">
                                <a className="pricing_tab-menu-item w-inline-block w-tab-link w--current"
                                   data-w-tab="monthly">
                                    <div className="text-13 weight-medium lh-125">Monthly</div>
                                </a>
                                <a className="pricing_tab-menu-item w-inline-block w-tab-link" data-w-tab="annual">
                                    <div className="text-13 weight-medium lh-125">Quarterly (Save 20%)</div>
                                </a>
                            </div>
                            <div className="pricing-tabs_content w-tab-content">
                                <div className="w-tab-pane w--tab-active" data-w-tab="monthly">
                                    <div className="pricing-grid">
                                        <div className="pricing_item max-height-mod">
                                            <div className="pricing_top-info">
                                                <div>
                                                    <div className="pricing-header">
                                                        <div className="pricing-name"><img alt="" height="32"
                                                                                           loading="lazy"
                                                                                           src={asset("/images/rock-light_1rock-light.avif")}
                                                                                           width="32px"/>
                                                            <div className="text-20 weight-semibold lh-156">Light</div>
                                                        </div>
                                                    </div>
                                                    <div className="spacer-20"></div>
                                                    <div className="pricing_text-wrapper">
                                                        <div className="text-15 weight-regular lh-145">Best fit for
                                                            startups and scaleups looking to achieve
                                                            fast &amp; high-quality graphic design results that will
                                                            bring their business to the next level!
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="pricing_price-container">
                                                        <div className="heading-style-h4 mod-numbers"
                                                             original-value="990">$990
                                                        </div>
                                                        <div className="pricing_price-info">
                                                            <div
                                                                className="text-13 weight-regular lh-135 text-gray-400 mod-pricing">
                                                                <br/>/ month
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="spacer-24"></div>
                                                    <a button-black="" calendly-link=""
                                                       className="button w-variant-d66e8b99-9512-4f1b-0527-c00e632abd95 w-inline-block"
                                                       data-wf--button-black-m--variant="base-full-width"
                                                       href="https://app.awesomic.com/register" target="_blank">
                                                        <div className="z-index-1">Get started</div>
                                                        <img alt="" className="button-icon" height="20" loading="lazy"
                                                             src={asset("/images/login-icon-white.svg")}/>
                                                        <div
                                                            className="button-background w-variant-d66e8b99-9512-4f1b-0527-c00e632abd95"></div>
                                                    </a>
                                                    <div className="spacer-28"></div>
                                                    <div className="pricing_list">
                                                        <div className="pricing_list-item"><img alt="" loading="lazy"
                                                                                                src={asset("/images/checkmark-circle-dark.svg")}/>
                                                            <div
                                                                className="text-15 weight-regular lh-145">Part\u2013time
                                                                talents
                                                            </div>
                                                        </div>
                                                        <div className="pricing_list-item"><img alt="" loading="lazy"
                                                                                                src={asset("/images/checkmark-circle-dark.svg")}/>
                                                            <div className="text-15 weight-regular lh-145">Graphic
                                                                design services
                                                            </div>
                                                        </div>
                                                        <div className="pricing_list-item"><img alt="" loading="lazy"
                                                                                                src={asset("/images/slack-dark.svg")}/>
                                                            <div className="text-15 weight-regular lh-145">Slack
                                                                integration
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="pricing_divider"></div>
                                                <div className="spacer-20"></div>
                                                <a className="pricing_to-details w-inline-block" href="#">
                                                    <div className="text-13 weight-medium lh-135">View all services
                                                    </div>
                                                    <img alt="" loading="lazy"
                                                         src={asset("/images/circle-chevron-down.svg")}/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="pricing_item is-black max-height-mod">
                                            <div className="pricing_top-info">
                                                <div>
                                                    <div className="pricing-header">
                                                        <div className="pricing-name"><img alt="" height="32"
                                                                                           loading="lazy"
                                                                                           src={asset("/images/rock-pro_1rock-pro.avif")}
                                                                                           width="32px"/>
                                                            <div className="text-20 weight-semibold lh-156">Pro</div>
                                                        </div>
                                                    </div>
                                                    <div className="spacer-20"></div>
                                                    <div className="pricing_text-wrapper">
                                                        <div className="text-15 weight-regular lh-145">Perfect match for
                                                            startups and enterprise companies. Full range of design
                                                            projects to help you leverage a design solutions you can
                                                            trust
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="pricing_price-container">
                                                        <div className="heading-style-h4 mod-numbers text-white"
                                                             original-value="2490">$2490
                                                        </div>
                                                        <div className="pricing_price-info">
                                                            <div
                                                                className="text-13 weight-regular lh-135 text-gray-400 mod-pricing">
                                                                <br/>/ month
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="spacer-24"></div>
                                                    <a calendly-link=""
                                                       className="button is-white w-variant-9877a804-44c7-fec3-6693-6e500a2d180f w-inline-block"
                                                       data-wf--button-white--variant="white-full-width"
                                                       href="https://app.awesomic.com/register" target="_blank">
                                                        <div>Get started</div>
                                                        <img alt="" className="button-icon" loading="lazy"
                                                             src={asset("/images/login-icon-black.svg")}/>
                                                    </a>
                                                    <div className="spacer-28"></div>
                                                    <div className="pricing_list">
                                                        <div className="pricing_list-item"><img alt="" loading="lazy"
                                                                                                src={asset("/images/checkmark-circle-white.svg")}/>
                                                            <div
                                                                className="text-15 weight-regular lh-145">Part\u2013time
                                                                talents
                                                            </div>
                                                        </div>
                                                        <div className="pricing_list-item"><img alt="" loading="lazy"
                                                                                                src={asset("/images/checkmark-circle-white.svg")}/>
                                                            <div
                                                                className="text-15 weight-regular lh-145 text-style-1line">All
                                                                design &amp; no-code services
                                                            </div>
                                                        </div>
                                                        <div className="pricing_list-item"><img alt="" loading="lazy"
                                                                                                src={asset("/images/slack-white.svg")}/>
                                                            <div className="text-15 weight-regular lh-145">Slack
                                                                integration
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="pricing_divider is-super"></div>
                                                <div className="spacer-20"></div>
                                                <a className="pricing_to-details w-inline-block" href="#">
                                                    <div className="text-13 weight-medium lh-135 text-white">View all
                                                        services
                                                    </div>
                                                    <img alt="" loading="lazy"
                                                         src={asset("/images/chevron-down-white.svg")}/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="pricing_item max-height-mod">
                                            <div className="pricing_top-info">
                                                <div>
                                                    <div className="pricing-header">
                                                        <div className="pricing-name"><img alt="" height="32"
                                                                                           loading="lazy"
                                                                                           src={asset("/images/rock-super_1rock-super.avif")}
                                                                                           width="32px"/>
                                                            <div className="text-20 weight-semibold lh-156">Super</div>
                                                        </div>
                                                    </div>
                                                    <div className="spacer-20"></div>
                                                    <div className="pricing_text-wrapper mod-super">
                                                        <div className="text-15 weight-regular lh-145">Perfect match for
                                                            startups and scaleups looking for experts in design, no-code
                                                            development, marketing and beyond.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="pricing_price-container">
                                                        <div className="heading-style-h4 mod-numbers"
                                                             original-value="4990">$4990
                                                        </div>
                                                        <div className="pricing_price-info">
                                                            <div
                                                                className="text-13 weight-regular lh-135 text-gray-400 mod-pricing">
                                                                <br/>/ month
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="spacer-24"></div>
                                                    <a button-black="" calendly-link=""
                                                       className="button w-variant-d66e8b99-9512-4f1b-0527-c00e632abd95 w-inline-block"
                                                       data-wf--button-black-m--variant="base-full-width"
                                                       href="https://app.awesomic.com/register" target="_blank">
                                                        <div className="z-index-1">Get started</div>
                                                        <img alt="" className="button-icon" height="20" loading="lazy"
                                                             src={asset("/images/login-icon-white.svg")}/>
                                                        <div
                                                            className="button-background w-variant-d66e8b99-9512-4f1b-0527-c00e632abd95"></div>
                                                    </a>
                                                    <div className="spacer-28"></div>
                                                    <div className="pricing_list">
                                                        <div className="pricing_list-item"><img alt="" loading="lazy"
                                                                                                src={asset("/images/checkmark-circle-dark.svg")}/>
                                                            <div
                                                                className="text-15 weight-regular lh-145">Part\u2013time
                                                                talents
                                                            </div>
                                                        </div>
                                                        <div className="pricing_list-item"><img alt="" loading="lazy"
                                                                                                src={asset("/images/checkmark-circle-dark.svg")}/>
                                                            <div className="text-15 weight-regular lh-145">All available
                                                                services
                                                            </div>
                                                        </div>
                                                        <div className="pricing_list-item"><img alt="" loading="lazy"
                                                                                                src={asset("/images/slack-dark.svg")}/>
                                                            <div className="text-15 weight-regular lh-145">Slack
                                                                integration
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="pricing_divider"></div>
                                                <div className="spacer-20"></div>
                                                <a className="pricing_to-details w-inline-block" href="#">
                                                    <div className="text-13 weight-medium lh-135">View all services
                                                    </div>
                                                    <img alt="" loading="lazy"
                                                         src={asset("/images/circle-chevron-down.svg")}/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="pricing_item max-height-mod">
                                            <div className="pricing_top-info gap-16">
                                                <div>
                                                    <div className="pricing-header">
                                                        <div className="pricing-name"><img alt="" height="32"
                                                                                           loading="lazy"
                                                                                           src={asset("/images/rock-1-1.avif")}
                                                                                           width="32px"/>
                                                            <div className="text-20 weight-semibold lh-156">1 to 1</div>
                                                        </div>
                                                    </div>
                                                    <div className="spacer-20"></div>
                                                    <div className="pricing_text-wrapper">
                                                        <div className="text-15 weight-regular lh-145">Ideal for
                                                            businesses looking for a full-time contractor. Accomplish
                                                            any of your design &amp; engineering projects with a top
                                                            talent!
                                                        </div>
                                                        <div className="spacer-20"></div>
                                                        <a className="pricing_to-details mod-talents w-inline-block"
                                                           href="https://app.awesomic.com/database/talents?tab=all"
                                                           target="_blank"><img alt="" loading="lazy"
                                                                                src={asset("/images/pricing-1-1-faces_1pricing-1-1-faces.avif")}
                                                                                width="49"/>
                                                            <div className="text-13 weight-medium lh-135">View all
                                                                talents
                                                            </div>
                                                            <img alt="" loading="lazy"
                                                                 src={asset("/images/new-page-black.svg")}/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="margin-0 w-form">
                                                        <form action="http://#" data-name="Email Form"
                                                              data-wf-element-id="65e9cec5-f5f5-787a-b314-885d388741ef"
                                                              data-wf-page-id="697b4beefe76cf9edba9761c" id="monthly"
                                                              method="get" name="email-form"><input
                                                            className="input w-input" data-name="Name" id="name"
                                                            maxLength="256" name="name" placeholder="Email address"
                                                            required type="text"/>
                                                            <div className="spacer-20"></div>
                                                            <div className="submit-button_wrapper"><input
                                                                className="submit-button w-button"
                                                                data-wait="Please wait..." type="submit"
                                                                value="Submit"/>
                                                                <a button-black="" calendly-link=""
                                                                   className="button w-variant-d66e8b99-9512-4f1b-0527-c00e632abd95 w-inline-block"
                                                                   data-wf--button-black-m--variant="base-full-width"
                                                                   href="#">
                                                                    <div className="z-index-1">Book demo</div>
                                                                    <img alt="" className="button-icon" height="20"
                                                                         loading="lazy"
                                                                         src={asset("/images/login-icon-white.svg")}/>
                                                                    <div
                                                                        className="button-background w-variant-d66e8b99-9512-4f1b-0527-c00e632abd95"></div>
                                                                </a>
                                                            </div>
                                                        </form>
                                                        <div className="w-form-done">
                                                            <div>Thank you! Your submission has been received!</div>
                                                        </div>
                                                        <div className="w-form-fail">
                                                            <div>Oops! Something went wrong while submitting the form.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="spacer-28"></div>
                                                    <div className="pricing_list">
                                                        <div className="pricing_list-item"><img alt="" loading="lazy"
                                                                                                src={asset("/images/checkmark-circle-dark.svg")}/>
                                                            <div className="text-15 weight-regular lh-145">Full-time
                                                                dedicated talent
                                                            </div>
                                                        </div>
                                                        <div className="pricing_list-item"><img alt="" loading="lazy"
                                                                                                src={asset("/images/checkmark-circle-dark.svg")}/>
                                                            <div className="text-15 weight-regular lh-145">All available
                                                                services
                                                            </div>
                                                        </div>
                                                        <div className="pricing_list-item"><img alt="" loading="lazy"
                                                                                                src={asset("/images/checkmark-circle-dark.svg")}/>
                                                            <div className="text-15 weight-regular lh-145">Choose your
                                                                workspace
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="pricing_divider"></div>
                                                <div className="spacer-20"></div>
                                                <a className="pricing_to-details w-inline-block" href="#">
                                                    <div className="text-13 weight-medium lh-135">View all services
                                                    </div>
                                                    <img alt="" loading="lazy"
                                                         src={asset("/images/circle-chevron-down.svg")}/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-tab-pane" data-w-tab="annual">
                                    <div className="pricing-grid">
                                        <div className="pricing_item max-height-mod">
                                            <div className="pricing_top-info gap-16">
                                                <div>
                                                    <div className="pricing-header">
                                                        <div className="pricing-name"><img alt="" height="32"
                                                                                           loading="lazy"
                                                                                           src={asset("/images/rock-light_1rock-light.avif")}
                                                                                           width="32px"/>
                                                            <div className="text-20 weight-semibold lh-156">Light</div>
                                                        </div>
                                                    </div>
                                                    <div className="spacer-20"></div>
                                                    <div className="pricing_text-wrapper">
                                                        <div className="text-15 weight-regular lh-145">Best fit for
                                                            startups and scaleups looking to achieve
                                                            fast &amp; high-quality graphic design results that will
                                                            bring their business to the next level!
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div
                                                        className="text-15 weight-regular lh-135 text-gray-400 text-style-strikethrough"
                                                        original-value="990">$990
                                                    </div>
                                                    <div className="spacer-8"></div>
                                                    <div className="pricing_price-container">
                                                        <div className="heading-style-h4 mod-numbers"
                                                             original-value="792">$792
                                                        </div>
                                                        <div className="pricing_price-info">
                                                            <div
                                                                className="text-13 weight-regular lh-135 text-gray-400">
                                                                billed monthly<br/>quarterly commitment
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="spacer-24"></div>
                                                    <a button-black="" calendly-link=""
                                                       className="button w-variant-d66e8b99-9512-4f1b-0527-c00e632abd95 w-inline-block"
                                                       data-wf--button-black-m--variant="base-full-width"
                                                       href="https://app.awesomic.com/register" target="_blank">
                                                        <div className="z-index-1">Get started</div>
                                                        <img alt="" className="button-icon" height="20" loading="lazy"
                                                             src={asset("/images/login-icon-white.svg")}/>
                                                        <div
                                                            className="button-background w-variant-d66e8b99-9512-4f1b-0527-c00e632abd95"></div>
                                                    </a>
                                                    <div className="spacer-28"></div>
                                                    <div className="pricing_list">
                                                        <div className="pricing_list-item"><img alt="" loading="lazy"
                                                                                                src={asset("/images/checkmark-circle-dark.svg")}/>
                                                            <div
                                                                className="text-15 weight-regular lh-145">Part\u2013time
                                                                talents
                                                            </div>
                                                        </div>
                                                        <div className="pricing_list-item"><img alt="" loading="lazy"
                                                                                                src={asset("/images/checkmark-circle-dark.svg")}/>
                                                            <div className="text-15 weight-regular lh-145">Graphic
                                                                design services
                                                            </div>
                                                        </div>
                                                        <div className="pricing_list-item"><img alt="" loading="lazy"
                                                                                                src={asset("/images/slack-dark.svg")}/>
                                                            <div className="text-15 weight-regular lh-145">Slack
                                                                integration
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="pricing_divider"></div>
                                                <div className="spacer-20"></div>
                                                <a className="pricing_to-details w-inline-block" href="#">
                                                    <div className="text-13 weight-medium lh-135">View all services
                                                    </div>
                                                    <img alt="" loading="lazy"
                                                         src={asset("/images/circle-chevron-down.svg")}/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="pricing_item is-black">
                                            <div className="pricing_top-info gap-16">
                                                <div>
                                                    <div className="pricing-header">
                                                        <div className="pricing-name"><img alt="" height="32"
                                                                                           loading="lazy"
                                                                                           src={asset("/images/rock-pro_1rock-pro.avif")}
                                                                                           width="32px"/>
                                                            <div className="text-20 weight-semibold lh-156">Pro</div>
                                                        </div>
                                                    </div>
                                                    <div className="spacer-20"></div>
                                                    <div className="pricing_text-wrapper">
                                                        <div className="text-15 weight-regular lh-145">Perfect match for
                                                            startups and enterprise companies. Full range of design
                                                            projects to help you leverage a design solutions you can
                                                            trust
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div
                                                        className="text-15 weight-regular lh-135 text-gray-400 text-style-strikethrough"
                                                        original-value="2490">$2490
                                                    </div>
                                                    <div className="spacer-8"></div>
                                                    <div className="pricing_price-container">
                                                        <div className="heading-style-h4 mod-numbers text-white"
                                                             original-value="1992">$1992
                                                        </div>
                                                        <div className="pricing_price-info">
                                                            <div
                                                                className="text-13 weight-regular lh-135 text-gray-400">
                                                                billed monthly<br/>quarterly commitment
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="spacer-24"></div>
                                                    <a calendly-link=""
                                                       className="button is-white w-variant-9877a804-44c7-fec3-6693-6e500a2d180f w-inline-block"
                                                       data-wf--button-white--variant="white-full-width"
                                                       href="https://app.awesomic.com/register" target="_blank">
                                                        <div>Get started</div>
                                                        <img alt="" className="button-icon" loading="lazy"
                                                             src={asset("/images/login-icon-black.svg")}/>
                                                    </a>
                                                    <div className="spacer-28"></div>
                                                    <div className="pricing_list">
                                                        <div className="pricing_list-item"><img alt="" loading="lazy"
                                                                                                src={asset("/images/checkmark-circle-white.svg")}/>
                                                            <div
                                                                className="text-15 weight-regular lh-145">Part\u2013time
                                                                talents
                                                            </div>
                                                        </div>
                                                        <div className="pricing_list-item"><img alt="" loading="lazy"
                                                                                                src={asset("/images/checkmark-circle-white.svg")}/>
                                                            <div
                                                                className="text-15 weight-regular lh-145 text-style-1line">All
                                                                design &amp; no-code services
                                                            </div>
                                                        </div>
                                                        <div className="pricing_list-item"><img alt="" loading="lazy"
                                                                                                src={asset("/images/slack-white.svg")}/>
                                                            <div className="text-15 weight-regular lh-145">Slack
                                                                integration
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="pricing_divider is-super"></div>
                                                <div className="spacer-20"></div>
                                                <a className="pricing_to-details w-inline-block" href="#">
                                                    <div className="text-13 weight-medium lh-135 text-white">View all
                                                        services
                                                    </div>
                                                    <img alt="" loading="lazy"
                                                         src={asset("/images/chevron-down-white.svg")}/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="pricing_item max-height-mod">
                                            <div className="pricing_top-info gap-16">
                                                <div>
                                                    <div className="pricing-header">
                                                        <div className="pricing-name"><img alt="" height="32"
                                                                                           loading="lazy"
                                                                                           src={asset("/images/rock-super_1rock-super.avif")}
                                                                                           width="32px"/>
                                                            <div className="text-20 weight-semibold lh-156">Super</div>
                                                        </div>
                                                    </div>
                                                    <div className="spacer-20"></div>
                                                    <div className="pricing_text-wrapper mod-super">
                                                        <div className="text-15 weight-regular lh-145">Perfect match for
                                                            startups and scaleups looking for experts in design, no-code
                                                            development, marketing and beyond.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div
                                                        className="text-15 weight-regular lh-135 text-gray-400 text-style-strikethrough"
                                                        original-value="4990">$4990
                                                    </div>
                                                    <div className="spacer-8"></div>
                                                    <div className="pricing_price-container">
                                                        <div className="heading-style-h4 mod-numbers"
                                                             original-value="3992">$3992
                                                        </div>
                                                        <div className="pricing_price-info">
                                                            <div
                                                                className="text-13 weight-regular lh-135 text-gray-400">
                                                                billed monthly<br/>quarterly commitment
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="spacer-24"></div>
                                                    <a button-black="" calendly-link=""
                                                       className="button w-variant-d66e8b99-9512-4f1b-0527-c00e632abd95 w-inline-block"
                                                       data-wf--button-black-m--variant="base-full-width"
                                                       href="https://app.awesomic.com/register" target="_blank">
                                                        <div className="z-index-1">Get started</div>
                                                        <img alt="" className="button-icon" height="20" loading="lazy"
                                                             src={asset("/images/login-icon-white.svg")}/>
                                                        <div
                                                            className="button-background w-variant-d66e8b99-9512-4f1b-0527-c00e632abd95"></div>
                                                    </a>
                                                    <div className="spacer-28"></div>
                                                    <div className="pricing_list">
                                                        <div className="pricing_list-item"><img alt="" loading="lazy"
                                                                                                src={asset("/images/checkmark-circle-dark.svg")}/>
                                                            <div
                                                                className="text-15 weight-regular lh-145">Part\u2013time
                                                                talents
                                                            </div>
                                                        </div>
                                                        <div className="pricing_list-item"><img alt="" loading="lazy"
                                                                                                src={asset("/images/checkmark-circle-dark.svg")}/>
                                                            <div className="text-15 weight-regular lh-145">All available
                                                                services
                                                            </div>
                                                        </div>
                                                        <div className="pricing_list-item"><img alt="" loading="lazy"
                                                                                                src={asset("/images/slack-dark.svg")}/>
                                                            <div className="text-15 weight-regular lh-145">Slack
                                                                integration
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="pricing_divider"></div>
                                                <div className="spacer-20"></div>
                                                <a className="pricing_to-details w-inline-block" href="#">
                                                    <div className="text-13 weight-medium lh-135">View all services
                                                    </div>
                                                    <img alt="" loading="lazy"
                                                         src={asset("/images/circle-chevron-down.svg")}/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="pricing_item max-height-mod">
                                            <div className="pricing_top-info gap-16">
                                                <div>
                                                    <div className="pricing-header">
                                                        <div className="pricing-name"><img alt="" height="32"
                                                                                           loading="lazy"
                                                                                           src={asset("/images/rock-1-1.avif")}
                                                                                           width="32px"/>
                                                            <div className="text-20 weight-semibold lh-156">1 to 1</div>
                                                        </div>
                                                    </div>
                                                    <div className="spacer-20"></div>
                                                    <div className="pricing_text-wrapper">
                                                        <div className="text-15 weight-regular lh-145">Ideal for
                                                            businesses looking for a full-time contractor. Accomplish
                                                            any of your design &amp; engineering projects with a top
                                                            talent!
                                                        </div>
                                                        <div className="spacer-20"></div>
                                                        <a className="pricing_to-details mod-talents w-inline-block"
                                                           href="https://app.awesomic.com/v2/hire-talent/talents"
                                                           target="_blank"><img alt="" loading="lazy"
                                                                                src={asset("/images/pricing-1-1-faces_1pricing-1-1-faces.avif")}
                                                                                width="49"/>
                                                            <div className="text-13 weight-medium lh-135">View all
                                                                talents
                                                            </div>
                                                            <div className="icon-16 w-embed">
                                                                <svg fill="none" height="16" viewBox="0 0 16 16"
                                                                     width="16" xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M12 8.5V13C12 13.2652 11.8946 13.5196 11.7071 13.7071C11.5196 13.8946 11.2652 14 11 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H7.5C7.63261 4 7.75979 4.05268 7.85355 4.14645C7.94732 4.24022 8 4.36739 8 4.5C8 4.63261 7.94732 4.75979 7.85355 4.85355C7.75979 4.94732 7.63261 5 7.5 5H3V13H11V8.5C11 8.36739 11.0527 8.24021 11.1464 8.14645C11.2402 8.05268 11.3674 8 11.5 8C11.6326 8 11.7598 8.05268 11.8536 8.14645C11.9473 8.24021 12 8.36739 12 8.5ZM14 2.5C14 2.36739 13.9473 2.24022 13.8536 2.14645C13.7598 2.05268 13.6326 2 13.5 2H9.5C9.40105 1.99992 9.30431 2.0292 9.22201 2.08414C9.13971 2.13908 9.07557 2.21719 9.03769 2.30861C8.99981 2.40002 8.98991 2.50061 9.00924 2.59765C9.02856 2.6947 9.07624 2.78382 9.14625 2.85375L10.7931 4.5L8.14625 7.14625C8.05243 7.24007 7.99972 7.36732 7.99972 7.5C7.99972 7.63268 8.05243 7.75993 8.14625 7.85375C8.24007 7.94757 8.36732 8.00028 8.5 8.00028C8.63268 8.00028 8.75993 7.94757 8.85375 7.85375L11.5 5.20688L13.1462 6.85375C13.2162 6.92376 13.3053 6.97144 13.4023 6.99076C13.4994 7.01009 13.6 7.00019 13.6914 6.96231C13.7828 6.92444 13.8609 6.86029 13.9159 6.77799C13.9708 6.69569 14.0001 6.59895 14 6.5V2.5Z"
                                                                        fill="currentColor"></path>
                                                                </svg>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="margin-0 w-form">
                                                        <form action="http://#" data-name="Email Form"
                                                              data-wf-element-id="65e9cec5-f5f5-787a-b314-885d388742b7"
                                                              data-wf-page-id="697b4beefe76cf9edba9761c" id="annual"
                                                              method="get" name="email-form"><input
                                                            className="input w-input" data-name="Name" id="name"
                                                            maxLength="256" name="name" placeholder="Email address"
                                                            required type="text"/>
                                                            <div className="spacer-20"></div>
                                                            <div className="submit-button_wrapper"><input
                                                                className="submit-button w-button"
                                                                data-wait="Please wait..." type="submit"
                                                                value="Submit"/>
                                                                <a button-black="" calendly-link=""
                                                                   className="button w-variant-d66e8b99-9512-4f1b-0527-c00e632abd95 w-inline-block"
                                                                   data-wf--button-black-m--variant="base-full-width"
                                                                   href="#">
                                                                    <div className="z-index-1">Book demo</div>
                                                                    <img alt="" className="button-icon" height="20"
                                                                         loading="lazy"
                                                                         src={asset("/images/login-icon-white.svg")}/>
                                                                    <div
                                                                        className="button-background w-variant-d66e8b99-9512-4f1b-0527-c00e632abd95"></div>
                                                                </a>
                                                            </div>
                                                        </form>
                                                        <div className="w-form-done">
                                                            <div>Thank you! Your submission has been received!</div>
                                                        </div>
                                                        <div className="w-form-fail">
                                                            <div>Oops! Something went wrong while submitting the form.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="spacer-28"></div>
                                                    <div className="pricing_list">
                                                        <div className="pricing_list-item"><img alt="" loading="lazy"
                                                                                                src={asset("/images/checkmark-circle-dark.svg")}/>
                                                            <div className="text-15 weight-regular lh-145">Full-time
                                                                dedicated talent
                                                            </div>
                                                        </div>
                                                        <div className="pricing_list-item"><img alt="" loading="lazy"
                                                                                                src={asset("/images/checkmark-circle-dark.svg")}/>
                                                            <div className="text-15 weight-regular lh-145">All available
                                                                services
                                                            </div>
                                                        </div>
                                                        <div className="pricing_list-item"><img alt="" loading="lazy"
                                                                                                src={asset("/images/checkmark-circle-dark.svg")}/>
                                                            <div className="text-15 weight-regular lh-145">Choose your
                                                                workspace
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="pricing_divider"></div>
                                                <div className="spacer-20"></div>
                                                <a className="pricing_to-details w-inline-block" href="#">
                                                    <div className="text-13 weight-medium lh-135">View all services
                                                    </div>
                                                    <img alt="" loading="lazy"
                                                         src={asset("/images/circle-chevron-down.svg")}/>
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
