import type {PseoPageData} from "@/lib/pseo-types";

const ASSET_BASE = process.env.NEXT_PUBLIC_ASSET_BASE ?? "";
const asset = (src: string) => `${ASSET_BASE}${src.startsWith("/") ? src : `/${src}`}`;

export function SectionWhite3(_props: { data?: PseoPageData }) {
    return (
        <section className="section-radius section-offset background-white section_move-top">
            <div className="spacer-80 tablet_spacer-64"></div>
            <div className="padding-global">
                <div className="container-1280">
                    <div className="about-hiring">
                        <div className="about-hiring_left">
                            <h2 className="heading-style-h3 tablet_text-align-center">Hiring guide:</h2>
                            <div className="case-cta_wrapper">
                                <div className="case-cta_inner">
                                    <div className="max-width-260 align-center">
                                        <div className="text-20 weight-semibold lh-150 text-align-center">Scale
                                            your <span className="hero_faces mod_case-cta">\u00a0</span>\u00a0team,\u2028not
                                            your overhead
                                        </div>
                                    </div>
                                    <a button-black=""
                                       calendly-link="https://calendly.com/awesomic/demo?hide_gdpr_banner=1"
                                       className="button is-large is-animated w-inline-block" href="#">
                                        <div className="button-animation-wrapper"><img alt=""
                                                                                       className="animated-icon-first"
                                                                                       loading="lazy"
                                                                                       src={asset("/images/animation-chevron.svg")}/><img
                                            alt="" className="animated-icon-second" loading="lazy"
                                            src={asset("/images/animation-chevron.svg")}/><img alt=""
                                                                                                 className="animated-icon-third"
                                                                                                 loading="lazy"
                                                                                                 src={asset("/images/animation-chevron.svg")}/>
                                        </div>
                                        <div className="z-index-1">Get started</div>
                                        <div className="button-animation-wrapper"><img alt=""
                                                                                       className="animated-icon-third"
                                                                                       loading="lazy"
                                                                                       src={asset("/images/animation-chevron-reverse.svg")}/><img
                                            alt="" className="animated-icon-second" loading="lazy"
                                            src={asset("/images/animation-chevron-reverse.svg")}/><img alt=""
                                                                                                         className="animated-icon-first"
                                                                                                         loading="lazy"
                                                                                                         src={asset("/images/animation-chevron-reverse.svg")}/>
                                        </div>
                                        <div className="button-background"></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="heading-style-h3 tablet_text-align-center">How to hire product designers
                            </div>
                            <div className="spacer-24"></div>
                            <div className="text-18 weight-regular lh-145">Awesomic matches product designers and
                                professionals with companies in as few as 24 hours to craft top-class products capable
                                of disrupting industries.<br/><br/>Do you remember the iconic Pringles can? We bet you
                                do. Its creator, Fredric John Baur, liked its design so much that he asked to be buried
                                in one of those famous tubes. So, try to guess where his children saved his ashes when
                                he passed away in 2008. That\u2019s right \u2014 in an original Pringles can.
                            </div>
                            <div className="spacer-40"></div>
                            <div className="case_double-images"><img alt="Perseus Logo Safezone"
                                                                     className="case-pic margin-0"
                                                                     id="w-node-_2a923dd9-d113-5939-729b-cd3e0637c9a6-dba9761c"
                                                                     loading="lazy"
                                                                     sizes="(max-width: 991px) 100vw, 785px"
                                                                     src={asset("/images/Frame-2147224249_1Frame-2147224249.avif")}
                                                                     srcset="__ASSET_BASE__/images/Frame-2147224249_1Frame-2147224249.avif 500w, images/Frame-2147224249_1Frame-2147224249.avif 800w, images/Frame-2147224249_1Frame-2147224249.avif 1080w, images/Frame-2147224249_1Frame-2147224249.avif 1636w"/>
                            </div>
                            <div className="spacer-40"></div>
                            <div className="text-18 weight-regular lh-145">That\u2019s the spirit you\u2019re looking
                                for in a product designer. But to find such a specialist, you\u2019d have to go through
                                more than Indiana Jones did in search of the Lost Ark.<br/>\u200d<br/>Don\u2019t fret;
                                every adventurer has a sidekick. And today, Awesomic will be your helpful
                                assistant.<br/>\u200d<br/>We\u2019ve prepared this article, where you\u2019ll find the
                                answers about what a product designer is and how they can help your business.
                                You\u2019ll get some pro tips on how to find and hire someone who\u2019s a perfect fit
                                for your company.
                            </div>
                            <div className="spacer-64"></div>
                            <div className="heading-style-h4">Do I need a product designer vs a UX designer?</div>
                            <div className="spacer-40"></div>
                            <div className="text-18 weight-regular lh-145">The digital product designer position has
                                existed for about two decades. However, employers and designers still confuse this
                                profession with others since it\u2019s hard to encapsulate all possible product design
                                services one may need. For instance, a designer may apply for a product designer
                                position, but the company needs a UX designer. \u00a0<br/><br/>To avoid this confusion,
                                let\u2019s first clarify the difference between these two since both may create visuals
                                that improve users\u2019 interactions with your product.<br/><br/>Firstly, let\u2019s
                                understand that \u201cproduct designer\u201d is a broader term than \u201cUX
                                designer.\u201d A product designer uses a more holistic approach to design. They analyze
                                complex data, define your goals while aligning them with your user\u2019s objectives,
                                and integrate your ambitions into the product design. Meanwhile, the primary
                                responsibility of a UX designer is to ensure that such a product is usable and
                                enjoyable.<br/><br/>Henry Wu, a product design manager at Hubspot, summarizes these
                                senses in the following statement: \u201cA Product Designer, at its core, is a problem
                                solver.\u201d<br/><br/>Simply put, if both specialists are on your team, the product
                                design services will most often be in the decision-making while the UX designer prepares
                                design pitches and does the technical work.
                            </div>
                            <div className="spacer-40"></div>
                            <div className="text-20 weight-semibold lh-128">Similarities</div>
                            <div className="spacer-20"></div>
                            <ul className="unordered-list" role="list">
                                <li className="text-18 weight-regular lh-145">Both specialists focus on creating a
                                    better overall product and experience for the end-user.
                                </li>
                                <li className="text-18 weight-regular lh-145">UX and product designers use critical
                                    thinking to analyze complex data and do market research.
                                </li>
                                <li className="text-18 weight-regular lh-145">They often use similar wireframing tools,
                                    such as Balsamiq and Sketch, as well as user mapping software, like LucidChart and
                                    Overflow.
                                </li>
                                <li className="text-18 weight-regular lh-145">UX designers, as well as product
                                    designers, base their processes on users\u2019 needs and requests.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spacer-144 tablet_spacer-128"></div>
        </section>
    );
}
