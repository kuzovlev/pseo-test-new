import type {PseoPageData} from "@/lib/pseo-types";

const ASSET_BASE = process.env.NEXT_PUBLIC_ASSET_BASE ?? "";
const asset = (src: string) => `${ASSET_BASE}${src.startsWith("/") ? src : `/${src}`}`;

export function SectionRelatedRoles(_props: { data?: PseoPageData }) {
    return (
        <section className="background-gray-100 section-radius">
            <div className="spacer-80 tablet_spacer-64"></div>
            <div className="padding-global">
                <div className="container-1344">
                    <h2 className="heading-style-h3 text-align-center">Related roles you may need</h2>
                    <div className="spacer-20"></div>
                    <div className="max-width-534 align-center">
                        <div className="text-16 weight-regular lh-150 text-align-center">If your scope goes beyond
                            product design, explore adjacent roles teams often add for full delivery across design and
                            build.
                        </div>
                    </div>
                    <div className="spacer-40"></div>
                    <div className="webflow-cards">
                        <div className="swiper-wrapper">
                            <div className="role-card swiper-slide">
                                <div className="why-webflow-icon_outer smaller">
                                    <div className="whe-webflow-icon_inner smaller"><img alt="" height="20"
                                                                                         loading="lazy"
                                                                                         src={asset("/images/layers-icon-black-20.svg")}
                                                                                         width="20"/></div>
                                </div>
                                <div>
                                    <div className="text-20 weight-semibold lh-156">Product Designer</div>
                                    <div className="spacer-8"></div>
                                    <div className="text-14 weight-book lh-168">End-to-end product design across
                                        discovery, flows, UI, and iterative improvements.
                                    </div>
                                </div>
                            </div>
                            <div className="role-card swiper-slide">
                                <div className="why-webflow-icon_outer smaller">
                                    <div className="whe-webflow-icon_inner smaller"><img alt="" height="20"
                                                                                         loading="lazy"
                                                                                         src={asset("/images/stars-icon-black.svg")}
                                                                                         width="20"/></div>
                                </div>
                                <div>
                                    <div className="text-20 weight-semibold lh-156">UX Researcher</div>
                                    <div className="spacer-8"></div>
                                    <div className="text-14 weight-book lh-168">Usability testing, interviews, insights
                                        synthesis, and recommendations to guide decisions.
                                    </div>
                                </div>
                            </div>
                            <div className="role-card swiper-slide">
                                <div className="why-webflow-icon_outer smaller">
                                    <div className="whe-webflow-icon_inner smaller"><img alt="" height="20"
                                                                                         loading="lazy"
                                                                                         src={asset("/images/stars-icon-black.svg")}
                                                                                         width="20"/></div>
                                </div>
                                <div>
                                    <div className="text-20 weight-semibold lh-156">Webflow developer</div>
                                    <div className="spacer-8"></div>
                                    <div className="text-14 weight-book lh-168">Usability testing, interviews, insights
                                        synthesis, and recommendations to guide decisions.
                                    </div>
                                </div>
                            </div>
                            <div className="role-card swiper-slide">
                                <div className="why-webflow-icon_outer smaller">
                                    <div className="whe-webflow-icon_inner smaller"><img alt="" height="20"
                                                                                         loading="lazy"
                                                                                         src={asset("/images/stars-icon-black.svg")}
                                                                                         width="20"/></div>
                                </div>
                                <div>
                                    <div className="text-20 weight-semibold lh-156">UX Researcher</div>
                                    <div className="spacer-8"></div>
                                    <div className="text-14 weight-book lh-168">Build marketing pages from Figma with
                                        responsive behavior and clean handoff.
                                    </div>
                                </div>
                            </div>
                            <div className="role-card swiper-slide">
                                <div className="why-webflow-icon_outer smaller">
                                    <div className="whe-webflow-icon_inner smaller"><img alt="" height="20"
                                                                                         loading="lazy"
                                                                                         src={asset("/images/stars-icon-black.svg")}
                                                                                         width="20"/></div>
                                </div>
                                <div>
                                    <div className="text-20 weight-semibold lh-156">UX Researcher</div>
                                    <div className="spacer-8"></div>
                                    <div className="text-14 weight-book lh-168">Build marketing pages from Figma with
                                        responsive behavior and clean handoff.
                                    </div>
                                </div>
                            </div>
                            <div className="role-card swiper-slide">
                                <div className="why-webflow-icon_outer smaller">
                                    <div className="whe-webflow-icon_inner smaller"><img alt="" height="20"
                                                                                         loading="lazy"
                                                                                         src={asset("/images/stars-icon-black.svg")}
                                                                                         width="20"/></div>
                                </div>
                                <div>
                                    <div className="text-20 weight-semibold lh-156">UX Researcher</div>
                                    <div className="spacer-8"></div>
                                    <div className="text-14 weight-book lh-168">Build marketing pages from Figma with
                                        responsive behavior and clean handoff.
                                    </div>
                                </div>
                            </div>
                            <div className="role-card swiper-slide">
                                <div className="why-webflow-icon_outer smaller">
                                    <div className="whe-webflow-icon_inner smaller"><img alt="" height="20"
                                                                                         loading="lazy"
                                                                                         src={asset("/images/stars-icon-black.svg")}
                                                                                         width="20"/></div>
                                </div>
                                <div>
                                    <div className="text-20 weight-semibold lh-156">UX Researcher</div>
                                    <div className="spacer-8"></div>
                                    <div className="text-14 weight-book lh-168">Build marketing pages from Figma with
                                        responsive behavior and clean handoff.
                                    </div>
                                </div>
                            </div>
                            <div className="role-card swiper-slide">
                                <div className="why-webflow-icon_outer smaller">
                                    <div className="whe-webflow-icon_inner smaller"><img alt="" height="20"
                                                                                         loading="lazy"
                                                                                         src={asset("/images/stars-icon-black.svg")}
                                                                                         width="20"/></div>
                                </div>
                                <div>
                                    <div className="text-20 weight-semibold lh-156">UX Researcher</div>
                                    <div className="spacer-8"></div>
                                    <div className="text-14 weight-book lh-168">Build marketing pages from Figma with
                                        responsive behavior and clean handoff.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spacer-144 tablet_spacer-128"></div>
        </section>
    );
}
