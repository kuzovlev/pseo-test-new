import type {PseoPageData} from "@/lib/pseo-types";

const ASSET_BASE = process.env.NEXT_PUBLIC_ASSET_BASE ?? "";
const asset = (src: string) => `${ASSET_BASE}${src.startsWith("/") ? src : `/${src}`}`;

export function SectionWhite2(_props: { data?: PseoPageData }) {
    return (
        <section className="section-radius section-offset background-white section_move-top">
            <div className="spacer-80 tablet_spacer-64"></div>
            <div className="padding-global">
                <div className="container-1280">
                    <div className="faq-component">
                        <h2 className="heading-style-h3 tablet_text-align-center">FAQ</h2>
                        <div className="faq_questions-container"
                             id="w-node-_93a2bb6b-3d85-41b4-4664-9e7b24d4900b-dba9761c">
                            <div className="faq_item">
                                <div className="faq_item-inner">
                                    <div className="faq_question">
                                        <div className="text-20 weight-semibold lh-150 mobile_text-16">What is
                                            Awesomic?
                                        </div>
                                        <img alt="" className="faq_chevron" loading="lazy"
                                             src={asset("/images/chevron-down-gray.svg")}/>
                                    </div>
                                    <div className="faq_answer">
                                        <div className="spacer-12 landscape_spacer-8"></div>
                                        <div className="text-15 weight-regular lh-145 faq w-richtext">
                                            <p>Awesomic is a revolutionary app that matches companies with vetted
                                                professionals across 30+ skill sets, from design and development to
                                                marketing and product. Based in San Francisco with a global core team,
                                                we offer a faster and more flexible alternative to traditional hiring
                                                through a subscription-based model. Awesomic delivers high-quality
                                                talent on demand, without the delays of recruiting.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="faq_item">
                                <div className="faq_item-inner">
                                    <div className="faq_question">
                                        <div className="text-20 weight-semibold lh-150 mobile_text-16">How does Awesomic
                                            work?
                                        </div>
                                        <img alt="" className="faq_chevron" loading="lazy"
                                             src={asset("/images/chevron-down-gray.svg")}/>
                                    </div>
                                    <div className="faq_answer">
                                        <div className="spacer-12 landscape_spacer-8"></div>
                                        <div className="text-15 weight-regular lh-145 faq w-richtext">
                                            <p>We function as a subscription-based service that matches you to top-tier,
                                                vetted talent. Submit a project in just a few clicks and start receiving
                                                deliverables in as little as 24 hours. Scale your Awesomic plan up or
                                                down as your business needs change.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="faq_item">
                                <div className="faq_item-inner">
                                    <div className="faq_question">
                                        <div className="text-20 weight-semibold lh-150 mobile_text-16">How many
                                            revisions can I request for a project?
                                        </div>
                                        <img alt="" className="faq_chevron" loading="lazy"
                                             src={asset("/images/chevron-down-gray.svg")}/>
                                    </div>
                                    <div className="faq_answer">
                                        <div className="spacer-12 landscape_spacer-8"></div>
                                        <div className="text-15 weight-regular lh-145 faq w-richtext">
                                            <p>Every Awesomic subscription comes with <strong>unlimited
                                                revisions</strong>. You receive daily progress updates via the app, and
                                                you can provide feedback or request iterations as needed. If your
                                                project requires a different approach, you can request a <strong>talent
                                                    rematch at any time</strong>, at no extra cost. You can also add
                                                teammates to collaborate and streamline feedback</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="faq_item">
                                <div className="faq_item-inner">
                                    <div className="faq_question">
                                        <div className="text-20 weight-semibold lh-150 mobile_text-16">What\u2019s a
                                            talent marketplace?
                                        </div>
                                        <img alt="" className="faq_chevron" loading="lazy"
                                             src={asset("/images/chevron-down-gray.svg")}/>
                                    </div>
                                    <div className="faq_answer">
                                        <div className="spacer-12 landscape_spacer-8"></div>
                                        <div className="text-15 weight-regular lh-145 faq w-richtext">
                                            <p>A talent marketplace is a platform that utilizes data and intelligent
                                                matching algorithms to connect professionals with projects based on
                                                their skills, experience, and availability. While often used internally
                                                by large companies, Awesomic applies this model at scale, matching
                                                vetted global talent to your most critical business needs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="faq_item">
                                <div className="faq_item-inner">
                                    <div className="faq_question">
                                        <div className="text-20 weight-semibold lh-150 mobile_text-16">Why choose
                                            Awesomic over traditional hiring or freelancing platforms?
                                        </div>
                                        <img alt="" className="faq_chevron" loading="lazy"
                                             src={asset("/images/chevron-down-gray.svg")}/>
                                    </div>
                                    <div className="faq_answer">
                                        <div className="spacer-12 landscape_spacer-8"></div>
                                        <div className="text-15 weight-regular lh-145 faq w-richtext">
                                            <p>Hiring is time-consuming, expensive, and risky. Awesomic eliminates that
                                                problem. We rigorously vet all talent for technical ability,
                                                communication, and soft skills, ensuring only senior-level professionals
                                                work on your projects. You skip the job posts, interviews, and delays,
                                                and get straight to results.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="faq_item">
                                <div className="faq_item-inner">
                                    <div className="faq_question">
                                        <div className="text-20 weight-semibold lh-150 mobile_text-16">Is Awesomic just
                                            a design subscription service?
                                        </div>
                                        <img alt="" className="faq_chevron" loading="lazy"
                                             src={asset("/images/chevron-down-gray.svg")}/>
                                    </div>
                                    <div className="faq_answer">
                                        <div className="spacer-12 landscape_spacer-8"></div>
                                        <div className="text-15 weight-regular lh-145 faq w-richtext">
                                            <p>No, Awesomic goes beyond design. While many clients utilize us for
                                                branding, UI/UX design, or motion graphics, we also provide vetted
                                                talent in no-code web development, product design, marketing, and more.
                                                Think of us as an extension of your team. A flexible, high-performing
                                                creative partner from planning to execution, whether you're building
                                                awesome products or scaling your team.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="faq_item">
                                <div className="faq_item-inner">
                                    <div className="faq_question">
                                        <div className="text-20 weight-semibold lh-150 mobile_text-16">How does
                                            communication with Awesomic work?
                                        </div>
                                        <img alt="" className="faq_chevron" loading="lazy"
                                             src={asset("/images/chevron-down-gray.svg")}/>
                                    </div>
                                    <div className="faq_answer">
                                        <div className="spacer-12 landscape_spacer-8"></div>
                                        <div className="text-15 weight-regular lh-145 faq w-richtext">
                                            <p>You can talk directly with your matched talent via the Awesomic app,
                                                connect via Slack, email, or schedule video calls. No matter the plan,
                                                you\u2019ll receive daily updates in the app for every active task. You
                                                can also tag us in for any issues through our in-app customer chat.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="faq_cta-block" id="w-node-_93a2bb6b-3d85-41b4-4664-9e7b24d49010-dba9761c">
                            <div>
                                <div className="text-20 weight-semibold lh-150 text-gray-900">Still have questions?
                                </div>
                                <div className="spacer-8"></div>
                                <div className="text-15 weight-regular lh-145">Let\u2019s talk \u2014 book a 15-minute
                                    intro call with our team
                                </div>
                            </div>
                            <a button-black="" calendly-link="https://calendly.com/awesomic/demo"
                               className="button w-variant-66ab6bb1-c107-f4b0-d3ef-56571315e5f4 w-inline-block"
                               data-wf--button-black-m--variant="base-icon-right" href="#">
                                <div className="z-index-1">Book a call</div>
                                <img alt="" className="button-icon w-variant-66ab6bb1-c107-f4b0-d3ef-56571315e5f4"
                                     height="20" loading="lazy" src={asset("/images/faq_two-faces.avif")}/>
                                <div className="button-background"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spacer-144 tablet_spacer-128"></div>
        </section>
    );
}
