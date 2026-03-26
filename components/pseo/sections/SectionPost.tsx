import type { PseoPageData } from "@/lib/pseo-types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";

const ASSET_BASE = process.env.NEXT_PUBLIC_ASSET_BASE ?? "";
const asset = (src: string) => `${ASSET_BASE}${src.startsWith("/") ? src : `/${src}`}`;

export function SectionPost(_props: { data?: PseoPageData }) {
    return (
        <section className="section-radius section-offset background-white">
            <div className="spacer-80 tablet_spacer-64"></div>

            <div className="padding-global">
                <div className="container-1280">
                    <div className="about-hiring">
                        <div className="about-hiring_left">
                            <h2 className="heading-style-h3 tablet_text-align-center">Hiring guide:</h2>

                            <div className="case-cta_wrapper">
                                <div className="case-cta_inner">
                                    <div className="max-width-260 align-center">
                                        <div className="text-20 weight-semibold lh-150 text-align-center">
                                            Scale your <span className="hero_faces mod_case-cta"> </span> team, not your overhead
                                        </div>
                                    </div>

                                    <a
                                        button-black=""
                                        calendly-link="https://calendly.com/awesomic/demo?hide_gdpr_banner=1"
                                        className="button is-large is-animated w-inline-block"
                                        href="#"
                                    >
                                        <div className="button-animation-wrapper">
                                            <img
                                                alt=""
                                                className="animated-icon-first"
                                                loading="lazy"
                                                src={asset("/images-static/animation-chevron.svg")}
                                            />
                                            <img
                                                alt=""
                                                className="animated-icon-second"
                                                loading="lazy"
                                                src={asset("/images-static/animation-chevron.svg")}
                                            />
                                            <img
                                                alt=""
                                                className="animated-icon-third"
                                                loading="lazy"
                                                src={asset("/images-static/animation-chevron.svg")}
                                            />
                                        </div>

                                        <div className="z-index-1">Get started</div>

                                        <div className="button-animation-wrapper">
                                            <img
                                                alt=""
                                                className="animated-icon-third"
                                                loading="lazy"
                                                src={asset("/images-static/animation-chevron-reverse.svg")}
                                            />
                                            <img
                                                alt=""
                                                className="animated-icon-second"
                                                loading="lazy"
                                                src={asset("/images-static/animation-chevron-reverse.svg")}
                                            />
                                            <img
                                                alt=""
                                                className="animated-icon-first"
                                                loading="lazy"
                                                src={asset("/images-static/animation-chevron-reverse.svg")}
                                            />
                                        </div>

                                        <div className="button-background"></div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="prose max-w-none legal_richtext w-richtext">
                            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]}>
                                {_props.data?.content_html ?? ""}
                            </ReactMarkdown>
                        </div>
                    </div>
                </div>
            </div>

            <div className="spacer-144 tablet_spacer-128"></div>
        </section>
    );
}