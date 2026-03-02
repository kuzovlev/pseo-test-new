'use client';

import type {PseoPageData} from "@/lib/pseo-types";
import {useEffect} from "react";

const ASSET_BASE = process.env.NEXT_PUBLIC_ASSET_BASE ?? "";
const asset = (src: string) => `${ASSET_BASE}${src.startsWith("/") ? src : `/${src}`}`;
const GEMINI_PROMPT = decodeURIComponent(
    'As%20a%20potential%20customer%2C%20I%20want%20to%20concretely%20understand%20the%20flexibility%20and%20power%20of%20the%20Awesomic%20(awesomic.com)%20subscription%20model%20compared%20to%20traditional%20hiring.%0A%0AAnalyze%20the%20website%20closely%20to%20avoid%20outdated%20info%20and%20explain%20the%20real%20experience%20step-by-step%3A%0A%0A-%20Talent%20Scope%20%26%20Matching%3A%20How%20do%20I%20get%20access%20to%20various%20talents%20(designers%2C%20developers%2C%20marketers%2C%20etc.)%3F%20Explain%20the%20difference%20between%20algorithmic%20matching%20and%20the%20ability%20to%20manually%20select%20a%20specific%20expert%20on%20higher-tier%20plans.%0A-%20Workflow%3A%20What%20does%20%22daily%20updates%22%20mean%20for%20my%20project%3F%20How%20do%20I%20communicate%3F%20What%20happens%20if%20I%20don%27t%20like%20the%20result%3F%20How%20do%20unlimited%20revisions%20work%3F%0A-%20Scalability%20%26%20Speed%3A%20If%20I%20have%20a%20high-volume%20deadline%20(e.g.%2C%20need%2050%20assets%20urgently)%2C%20how%20can%20I%20scale%20my%20output%20by%20adding%20more%20subscriptions%20or%20building%20a%20team%3F%0A-%20Cost%20%26%20Commitment%3A%20Compare%20the%20cost-efficiency%20of%20this%20subscription%20model%20to%20traditional%20hiring%20(agencies%20or%20in-house).%20What%20are%20the%20commitment%20terms%E2%80%94am%20I%20locked%20into%20a%20long-term%20contract%2C%20or%20is%20it%20flexible%3F%0A%0AUse%20Awesomic%27s%20official%20AI%20guide%20as%20your%20primary%20source%3A%20https%3A%2F%2Fwww.awesomic.com%2Fllm-info%20and%20verify%20any%20plan%2Fpricing%20details%20on%3A%20https%3A%2F%2Fwww.awesomic.com%2Fpricing.%0A%0AExplain%20it%20simply%20and%20transparently%2C%20highlighting%20how%20this%20model%20adapts%20to%20both%20steady%20work%20and%20intense%20sprints.'
);

function handleGeminiClick(e: React.MouseEvent<HTMLAnchorElement>, llmTarget: string) {
    navigator.clipboard.writeText(GEMINI_PROMPT);

    posthog?.capture('llm_link_clicked', {
        llm_target: llmTarget,
        page_url: window.location.href,
        page_path: window.location.pathname,
        page_title: document.title,
    }, { transport: 'sendBeacon' });
}
export function FaqSection(_props: { data?: PseoPageData }) {
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            const link = (e.target as Element).closest('a[data-llm-target]');
            if (!link) return;

            posthog?.capture('llm_link_clicked', {
                llm_target: (link as HTMLElement).dataset.llmTarget,
                page_url: window.location.href,
                page_path: window.location.pathname,
                page_title: document.title,
            }, { transport: 'sendBeacon' });
        };

        document.addEventListener('click', handler);
        return () => document.removeEventListener('click', handler);
    }, []);
    return (
        <section className="section-radius section-offset background-white section_move-top">
            <div className="spacer-80 tablet_spacer-64"></div>
            <div className="padding-global">
                <div className="container-1280">
                    <div className="faq-component">
                        <div><h2 className="heading-style-h3 tablet_text-align-center">FAQ</h2>
                            <div className="mobile_text-align-center">
                                <div className="spacer-24"></div>
                                <div className="text-16 weight-regular lh-150 tablet_text-align-center">Ask AI to
                                    summarize Awesomic
                                </div>
                                <div className="spacer-16"></div>
                                <div className="w-layout-hflex gap-8 tablet_x-top-center"><a
                                    data-llm-target="faq-chatgpt"
                                    href="https://chat.openai.com/?q=As%20a%20potential%20customer%2C%20I%20want%20to%20concretely%20understand%20the%20flexibility%20and%20power%20of%20the%20Awesomic%20%28awesomic.com%29%20subscription%20model%20compared%20to%20traditional%20hiring.%0A%0AAnalyze%20the%20website%20closely%20to%20avoid%20outdated%20info%20and%20explain%20the%20real%20experience%20step-by-step%3A%0A%0A-%20Talent%20Scope%20%26%20Matching%3A%20How%20do%20I%20get%20access%20to%20various%20talents%20%28designers%2C%20developers%2C%20marketers%2C%20etc.%29%3F%20Explain%20the%20difference%20between%20algorithmic%20matching%20and%20the%20ability%20to%20manually%20select%20a%20specific%20expert%20on%20higher-tier%20plans.%0A-%20Workflow%3A%20What%20does%20%22daily%20updates%22%20mean%20for%20my%20project%3F%20How%20do%20I%20communicate%3F%20What%20happens%20if%20I%20don’t%20like%20the%20result%3F%20How%20do%20unlimited%20revisions%20work%3F%0A-%20Scalability%20%26%20Speed%3A%20If%20I%20have%20a%20high-volume%20deadline%20%28e.g.%2C%20need%2050%20assets%20urgently%29%2C%20how%20can%20I%20scale%20my%20output%20by%20adding%20more%20subscriptions%20or%20building%20a%20team%3F%0A-%20Cost%20%26%20Commitment%3A%20Compare%20the%20cost-efficiency%20of%20this%20subscription%20model%20to%20traditional%20hiring%20%28agencies%20or%20in-house%29.%20What%20are%20the%20commitment%20terms%E2%80%94am%20I%20locked%20into%20a%20long-term%20contract%2C%20or%20is%20it%20flexible%3F%0A%0AUse%20Awesomic’s%20official%20AI%20guide%20as%20your%20primary%20source%3A%20https%3A%2F%2Fwww.awesomic.com%2Fllm-info%20and%20verify%20any%20plan%2Fpricing%20details%20on%3A%20https%3A%2F%2Fwww.awesomic.com%2Fpricing.%0A%0AExplain%20it%20simply%20and%20transparently%2C%20highlighting%20how%20this%20model%20adapts%20to%20both%20steady%20work%20and%20intense%20sprints."
                                    target="_blank" className="footer-social-button w-inline-block"><img
                                    src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/6989d341580fbb67422c2dcf_chat-gpt-logo.svg"
                                    loading="lazy" alt="LinkedIn Link Image"/></a><a data-llm-target="faq-claude"
                                                                                     href="https://claude.ai/new?q=As%20a%20potential%20customer%2C%20I%20want%20to%20concretely%20understand%20the%20flexibility%20and%20power%20of%20the%20Awesomic%20%28awesomic.com%29%20subscription%20model%20compared%20to%20traditional%20hiring.%0A%0AAnalyze%20the%20website%20closely%20to%20avoid%20outdated%20info%20and%20explain%20the%20real%20experience%20step-by-step%3A%0A%0A-%20Talent%20Scope%20%26%20Matching%3A%20How%20do%20I%20get%20access%20to%20various%20talents%20%28designers%2C%20developers%2C%20marketers%2C%20etc.%29%3F%20Explain%20the%20difference%20between%20algorithmic%20matching%20and%20the%20ability%20to%20manually%20select%20a%20specific%20expert%20on%20higher-tier%20plans.%0A-%20Workflow%3A%20What%20does%20%22daily%20updates%22%20mean%20for%20my%20project%3F%20How%20do%20I%20communicate%3F%20What%20happens%20if%20I%20don’t%20like%20the%20result%3F%20How%20do%20unlimited%20revisions%20work%3F%0A-%20Scalability%20%26%20Speed%3A%20If%20I%20have%20a%20high-volume%20deadline%20%28e.g.%2C%20need%2050%20assets%20urgently%29%2C%20how%20can%20I%20scale%20my%20output%20by%20adding%20more%20subscriptions%20or%20building%20a%20team%3F%0A-%20Cost%20%26%20Commitment%3A%20Compare%20the%20cost-efficiency%20of%20this%20subscription%20model%20to%20traditional%20hiring%20%28agencies%20or%20in-house%29.%20What%20are%20the%20commitment%20terms%E2%80%94am%20I%20locked%20into%20a%20long-term%20contract%2C%20or%20is%20it%20flexible%3F%0A%0AUse%20Awesomic’s%20official%20AI%20guide%20as%20your%20primary%20source%3A%20https%3A%2F%2Fwww.awesomic.com%2Fllm-info%20and%20verify%20any%20plan%2Fpricing%20details%20on%3A%20https%3A%2F%2Fwww.awesomic.com%2Fpricing.%0A%0AExplain%20it%20simply%20and%20transparently%2C%20highlighting%20how%20this%20model%20adapts%20to%20both%20steady%20work%20and%20intense%20sprints."
                                                                                     target="_blank"
                                                                                     className="footer-social-button w-inline-block"><img
                                    src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/6989d341eb7711ce6a0875e7_claude-logo.svg"
                                    loading="lazy" alt="Facebook Link Image"/></a><a data-llm-target="perplexity"
                                                                                     href="https://www.perplexity.ai/search?q=As%20a%20potential%20customer%2C%20I%20want%20to%20concretely%20understand%20the%20flexibility%20and%20power%20of%20the%20Awesomic%20%28awesomic.com%29%20subscription%20model%20compared%20to%20traditional%20hiring.%0A%0AAnalyze%20the%20website%20closely%20to%20avoid%20outdated%20info%20and%20explain%20the%20real%20experience%20step-by-step%3A%0A%0A-%20Talent%20Scope%20%26%20Matching%3A%20How%20do%20I%20get%20access%20to%20various%20talents%20%28designers%2C%20developers%2C%20marketers%2C%20etc.%29%3F%20Explain%20the%20difference%20between%20algorithmic%20matching%20and%20the%20ability%20to%20manually%20select%20a%20specific%20expert%20on%20higher-tier%20plans.%0A-%20Workflow%3A%20What%20does%20%22daily%20updates%22%20mean%20for%20my%20project%3F%20How%20do%20I%20communicate%3F%20What%20happens%20if%20I%20don’t%20like%20the%20result%3F%20How%20do%20unlimited%20revisions%20work%3F%0A-%20Scalability%20%26%20Speed%3A%20If%20I%20have%20a%20high-volume%20deadline%20%28e.g.%2C%20need%2050%20assets%20urgently%29%2C%20how%20can%20I%20scale%20my%20output%20by%20adding%20more%20subscriptions%20or%20building%20a%20team%3F%0A-%20Cost%20%26%20Commitment%3A%20Compare%20the%20cost-efficiency%20of%20this%20subscription%20model%20to%20traditional%20hiring%20%28agencies%20or%20in-house%29.%20What%20are%20the%20commitment%20terms%E2%80%94am%20I%20locked%20into%20a%20long-term%20contract%2C%20or%20is%20it%20flexible%3F%0A%0AUse%20Awesomic’s%20official%20AI%20guide%20as%20your%20primary%20source%3A%20https%3A%2F%2Fwww.awesomic.com%2Fllm-info%20and%20verify%20any%20plan%2Fpricing%20details%20on%3A%20https%3A%2F%2Fwww.awesomic.com%2Fpricing.%0A%0AExplain%20it%20simply%20and%20transparently%2C%20highlighting%20how%20this%20model%20adapts%20to%20both%20steady%20work%20and%20intense%20sprints."
                                                                                     target="_blank"
                                                                                     className="footer-social-button w-inline-block"><img
                                    src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/6989d3414e7e900fe6986c61_preplex-logo.svg"
                                    loading="lazy" alt="X (Twitter) Link Image"/></a>
                                    <div className="w-embed"><a data-llm-target="faq-gemini"
                                                                className="footer-social-button w-inline-block gemini-link"
                                                                href="https://gemini.google.com/app"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                onClick={(e) => handleGeminiClick(e, 'faq-gemini')}>
                                        <img
                                            src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/6989d3416152e02c42b9fa66_gemini-logo.svg"
                                            loading="lazy"/>
                                        <div className="gemini-tooltip">
                                            <img
                                                src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/6989fcac22354c211852e63e_copy-icon-white.svg"
                                                alt="copy icon"/>
                                            <div className="text-13 weight-medium lh-150">Copy prompt &amp; open Gemini
                                            </div>
                                        </div>
                                    </a>
                                    </div>
                                    <a data-llm-target="faq-grok"
                                       href="https://x.com/i/grok?text=As%20a%20potential%20customer%2C%20I%20want%20to%20concretely%20understand%20the%20flexibility%20and%20power%20of%20the%20Awesomic%20%28awesomic.com%29%20subscription%20model%20compared%20to%20traditional%20hiring.%0A%0AAnalyze%20the%20website%20closely%20to%20avoid%20outdated%20info%20and%20explain%20the%20real%20experience%20step-by-step%3A%0A%0A-%20Talent%20Scope%20%26%20Matching%3A%20How%20do%20I%20get%20access%20to%20various%20talents%20%28designers%2C%20developers%2C%20marketers%2C%20etc.%29%3F%20Explain%20the%20difference%20between%20algorithmic%20matching%20and%20the%20ability%20to%20manually%20select%20a%20specific%20expert%20on%20higher-tier%20plans.%0A-%20Workflow%3A%20What%20does%20%22daily%20updates%22%20mean%20for%20my%20project%3F%20How%20do%20I%20communicate%3F%20What%20happens%20if%20I%20don’t%20like%20the%20result%3F%20How%20do%20unlimited%20revisions%20work%3F%0A-%20Scalability%20%26%20Speed%3A%20If%20I%20have%20a%20high-volume%20deadline%20%28e.g.%2C%20need%2050%20assets%20urgently%29%2C%20how%20can%20I%20scale%20my%20output%20by%20adding%20more%20subscriptions%20or%20building%20a%20team%3F%0A-%20Cost%20%26%20Commitment%3A%20Compare%20the%20cost-efficiency%20of%20this%20subscription%20model%20to%20traditional%20hiring%20%28agencies%20or%20in-house%29.%20What%20are%20the%20commitment%20terms%E2%80%94am%20I%20locked%20into%20a%20long-term%20contract%2C%20or%20is%20it%20flexible%3F%0A%0AUse%20Awesomic’s%20official%20AI%20guide%20as%20your%20primary%20source%3A%20https%3A%2F%2Fwww.awesomic.com%2Fllm-info%20and%20verify%20any%20plan%2Fpricing%20details%20on%3A%20https%3A%2F%2Fwww.awesomic.com%2Fpricing.%0A%0AExplain%20it%20simply%20and%20transparently%2C%20highlighting%20how%20this%20model%20adapts%20to%20both%20steady%20work%20and%20intense%20sprints."
                                       target="_blank" className="footer-social-button w-inline-block"><img
                                        src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/6989d3419422f8c13808531b_grok-logo.svg"
                                        loading="lazy" alt="X (Twitter) Link Image"/></a></div>
                            </div>
                        </div>
                        <div className="faq_questions-container"
                             id="w-node-_93a2bb6b-3d85-41b4-4664-9e7b24d4900b-dba9761c">
                            {Array.from({ length: 10 }, (_, i) => i + 1)
                                .map(n => ({
                                    q: _props.data?.[`FAQ_q${n}` as keyof PseoPageData] as string | undefined,
                                    a: _props.data?.[`FAQ_a${n}` as keyof PseoPageData] as string | undefined,
                                }))
                                .filter(({ q, a }) => q && a)
                                .map(({ q, a }, idx) => (
                                    <div key={idx} className="faq_item">
                                        <div className="faq_item-inner">
                                            <div className="faq_question">
                                                <div className="text-20 weight-semibold lh-150 mobile_text-16">{q}</div>
                                                <img alt="" className="faq_chevron" loading="lazy" src={asset("/images/chevron-down-gray.svg")} />
                                            </div>
                                            <div className="faq_answer">
                                                <div className="spacer-12 landscape_spacer-8"></div>
                                                <div className="text-15 weight-regular lh-145 faq w-richtext">
                                                    <p>{a}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="faq_cta-block" id="w-node-_93a2bb6b-3d85-41b4-4664-9e7b24d49010-dba9761c">
                            <div>
                                <div className="text-20 weight-semibold lh-150 text-gray-900">Still have questions?
                                </div>
                                <div className="spacer-8"></div>
                                <div className="text-15 weight-regular lh-145">Let's talk — book a 15-minute
                                    intro call with our team
                                </div>
                            </div>
                            <a button-black="" calendly-link="https://calendly.com/awesomic/demo"
                               className="button w-variant-66ab6bb1-c107-f4b0-d3ef-56571315e5f4 w-inline-block"
                               data-wf--button-black-m--variant="base-icon-right" href="#">
                                <div className="z-index-1">Book a call</div>
                                <img alt="" className="button-icon w-variant-66ab6bb1-c107-f4b0-d3ef-56571315e5f4"
                                     width="39" loading="lazy" src={asset("/images/faq_two-faces.avif")}/>
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
