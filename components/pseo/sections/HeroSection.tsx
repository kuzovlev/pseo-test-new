"use client";

import {useEffect} from "react";
import type {PseoPageData} from "@/lib/pseo-types";

const ASSET_BASE = process.env.NEXT_PUBLIC_ASSET_BASE ?? "";
const asset = (src: string) => `${ASSET_BASE}${src.startsWith("/") ? src : `/${src}`}`;

const CLIENT_LOGOS = [
    {src: "/images-static/yc-new-png.png", alt: "YC logo"},
    {src: "/images-static/coca-cola-new-png.png", alt: "Coca-Cola logo"},
    {src: "/images-static/disney-new-png.png", alt: "Disney logo"},
    {src: "/images-static/genesis.avif", alt: "Genesis logo"},
    {src: "/images-static/udemy-new-png.png", alt: "Udemy logo"},
    {src: "/images-static/ey-new-png_1ey-new-png.png", alt: "EY logo"},
    {src: "/images-static/panda-doc-new-png.png", alt: "PandaDoc logo"},
];

interface HeroSectionProps {
    data?: PseoPageData;
}

export default function HeroSection({data}: HeroSectionProps) {
    // Sets CSS variable for dynamic checkbox background images-static (Webflow pattern)
    useEffect(() => {
        document
            .querySelectorAll<HTMLElement>(".hero_dynamic-checkbox")
            .forEach((label) => {
                const uncheckedImage = label.getAttribute("data-bg");
                if (!uncheckedImage) return;
                const target = label.querySelector<HTMLElement>(".dynamic-checkbox_label");
                if (!target) return;
                target.style.setProperty("--unchecked-bg", `url('${uncheckedImage}')`);
            });
    }, []);

    return (
        <section>
            <div className="spacer-96 tablet_spacer-64"/>
            <div className="padding-global">
                <div className="container-1280">

                    {/* Hero layout */}
                    <div className="homepage_hero-block pseo-mod">

                        {/* ── Left — headline ── */}
                        <div className="pseo_hero-left">
                            <div className="homepage_hero-tags updated-hero">
                                <div className="text-tag gap-8">
                                    <img
                                        src={asset("/images-static/YC-small-badge.svg")}
                                        loading="lazy"
                                        alt="YC small logo"
                                    />
                                    <div>Backed by Y Combinator</div>
                                </div>
                                <div className="text-tag gap-8 mobile_hide">
                                    <div className="w-layout-hflex flex-h_center-center gap-4">
                                        <img
                                            src={asset("/images-static/google_symbol.svg_1.svg")}
                                            loading="lazy"
                                            alt="Google Play logo"
                                            height={16}
                                        />
                                        <div>4.9</div>
                                    </div>
                                    <div className="w-layout-hflex flex-h_center-center gap-4">
                                        <img
                                            src={asset("/images-static/google_symbol.svg.svg")}
                                            loading="lazy"
                                            alt="Trustpilot logo"
                                            height={16}
                                        />
                                        <div>4.9</div>
                                    </div>
                                </div>
                            </div>

                            <div className="spacer-20"/>
                            <h1 className="pseo_h1">
                                {data?.Name_h1}
                            </h1>
                        </div>

                        {/* ── Right — CTA block ── */}
                        <div
                            id="w-node-_7d67ae3d-ea84-e2bc-dd27-47e5c7e20372-b043a3e3"
                            className="pseo_cta-block"
                        >
                            <p className="pseo-hero-text">
                                {data?.hero_description}
                            </p>

                            <div className="pseo-hero-button-wrapper">
                                <div className="spacer-32"/>

                                {/* Email capture form */}
                                <div className="features_form-block pseo-mod w-form">
                                    <form
                                        id="wf-form-features-form"
                                        name="wf-form-features-form"
                                        data-name="features-form"
                                        className="features_form pseo-mod"
                                    >
                                        <input
                                            className="input cta_input w-input"
                                            maxLength={256}
                                            name="email"
                                            data-name="email"
                                            placeholder="Email address"
                                            type="email"
                                            id="features-email"
                                            required
                                        />
                                        <div className="submit-button_wrapper">
                                            {/* Hidden native submit — JS intercepts via form id */}
                                            <input
                                                type="submit"
                                                data-wait="Please wait..."
                                                className="submit-button w-button"
                                                value="Submit"
                                            />
                                            <a
                                                calendly-link=""
                                                button-black=""
                                                data-wf--button-black-l--variant="base"
                                                href="#"
                                                className="button is-large w-inline-block"
                                            >
                                                <div className="z-index-1">
                                                    {data?.hero_button_text}
                                                </div>
                                                <div className="button-background"/>
                                                <img
                                                    src={asset("/images-static/login-icon-white.svg")}
                                                    loading="lazy"
                                                    alt=""
                                                    height={20}
                                                    className="button-icon"
                                                />
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

                        {/* ── Stats ── */}
                        <div className="pseo-hero_numbers mobile-stack">
                            <div className="hero_numbers-item">
                                <div className="heading-style-h4 mod-numbers">{data?.bullet_1_number}</div>
                                <div className="text-13 weight-medium lh-135" style={{maxWidth: "150px"}}>
                                    {data?.bullet_1_text}
                                </div>
                            </div>
                            <div className="hero_numbers-item">
                                <div className="heading-style-h4 mod-numbers">{data?.bullet_2_number}</div>
                                <div className="text-13 weight-medium lh-135" style={{maxWidth: "150px"}}>
                                    {data?.bullet_2_text}
                                </div>
                            </div>
                        </div>

                        {/* ── Logo carousel ── */}
                        <div
                            id="w-node-_6ab224c0-2334-a9de-be3b-cd4c0d0cce36-beb9ff5c"
                            className="pseo-logos-wrapper"
                        >
                            <LogoCarousel logos={CLIENT_LOGOS}/>
                        </div>

                    </div>
                    {/* end homepage_hero-block */}

                    <div className="spacer-64"/>

                    {/* ── Talent iframe ── */}
                    <div className="position-relative">
                        <iframe
                            src="https://app.awesomic.com/hire-talent/talents"
                            width="100%"
                            height={700}
                            style={{border: 0}}
                            loading="lazy"
                            title="Awesomic talent pool"
                        />
                        {/* Overlay captures clicks and opens the full app in a new tab */}
                        <a
                            href="https://app.awesomic.com/hire-talent/talents"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="talent-iframe_overlay w-inline-block"
                            aria-label="Browse all talents"
                        />
                    </div>

                </div>
            </div>
            <div className="spacer-144 tablet_spacer-128"/>
        </section>
    );
}

// ---------------------------------------------------------------------------
// Logo carousel — duplicated list creates the infinite scroll illusion
// ---------------------------------------------------------------------------
interface Logo {
    src: string;
    alt: string;
}

function LogoCarousel({logos}: { logos: Logo[] }) {
    return (
        <div className="carousel-component">
            <div className="carousel">
                <div className="logo-carousel-overlay_white"/>
                <div className="logo-carousel-wrap">
                    <LogoList logos={logos}/>
                    {/* Clone for seamless infinite scroll */}
                    <div className="logo-carousel-clone">
                        <LogoList logos={logos}/>
                    </div>
                </div>
                <div className="logo-carousel-overlay_white is-right"/>
            </div>
        </div>
    );
}

function LogoList({logos}: { logos: Logo[] }) {
    return (
        <ul role="list" className="logo-carousel">
            {logos.map((logo) => (
                <li key={logo.src} className="logo-carousel_item">
                    <img
                        src={asset(logo.src)}
                        alt={logo.alt}
                        className="logo-image small"
                        loading="lazy"
                    />
                </li>
            ))}
        </ul>
    );
}