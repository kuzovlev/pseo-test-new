"use client";

import {useEffect} from "react";
import type {PseoPageData} from "@/lib/pseo-types";

const ASSET_BASE = process.env.NEXT_PUBLIC_ASSET_BASE ?? "";
const asset = (src: string) => `${ASSET_BASE}${src.startsWith("/") ? src : `/${src}`}`;

export function SectionTestimonials(_props: { data?: PseoPageData }) {
    useEffect(() => {
        (function () {
            document.addEventListener('click', function (e) {
                /* ---------- PLAY ---------- */
                const clickedPlaceholder = e.target.closest('.video-placeholder');
                if (clickedPlaceholder) {
                    const block = clickedPlaceholder.closest('.video-review_content');
                    if (!block) return;
                    const video = block.querySelector('.video-review');
                    const source = video?.querySelector('source[data-src]');
                    // no real video \u2192 do nothing
                    if (!video || !source || !source.dataset.src) return;
                    if (!video.dataset.loaded) {
                        video.src = source.dataset.src;
                        video.load();
                        video.dataset.loaded = 'true';
                    }
                    video.play().catch(() => {
                    });
                    clickedPlaceholder.style.opacity = '0';
                    clickedPlaceholder.style.pointerEvents = 'none';
                    video.style.zIndex = '2';
                    return;
                }
                /* ---------- PAUSE ---------- */
                const clickedVideo = e.target.closest('.video-review');
                if (!clickedVideo) return;
                if (clickedVideo.paused) return;
                const block = clickedVideo.closest('.video-review_content');
                const placeholder = block?.querySelector('.video-placeholder');
                if (!placeholder) return;
                clickedVideo.pause();
                placeholder.style.opacity = '1';
                placeholder.style.pointerEvents = 'auto';
                clickedVideo.style.zIndex = '0';
            });
            /* ---------- RESET ON END ---------- */
            document.addEventListener(
                'ended',
                function (e) {
                    const video = e.target.closest('.video-review');
                    if (!video) return;
                    const block = video.closest('.video-review_content');
                    const placeholder = block?.querySelector('.video-placeholder');
                    if (!placeholder) return;
                    placeholder.style.opacity = '1';
                    placeholder.style.pointerEvents = 'auto';
                    video.style.zIndex = '0';
                },
                true
            );
        })();
        const moreReviewsBlock = document.querySelector(".more-reviews_block");
        const buttonWhiteS = moreReviewsBlock?.querySelector(".button.is-white");
        const reviewsComponent = document.querySelector(".reviews-component");
        if (buttonWhiteS && reviewsComponent) {
            const isSmallScreen = window.innerWidth <= 478;
            const initialMaxHeight = isSmallScreen ? "2000px" : "1460px";
            reviewsComponent.style.maxHeight = initialMaxHeight;
            reviewsComponent.style.overflow = "hidden";
            reviewsComponent.style.transition = "max-height 0.5s ease";
        }

        (function () {
            const previewVideos = document.querySelectorAll(
                '.w-background-video video'
            );
            if (!previewVideos.length) return;
            const activateVideo = (video) => {
                if (video.dataset.activated) return;
                const source = video.querySelector('source[data-src]');
                if (!source || !source.dataset.src) return;
                // Attach src ONLY now
                source.src = source.dataset.src;
                video.load();
                video.muted = true;
                video.playsInline = true;
                video.setAttribute('playsInline', '');
                video.setAttribute('webkit-playsInline', '');
                const p = video.play();
                if (p && p.catch) p.catch(() => {
                });
                video.dataset.activated = 'true';
            };
            /* -------- IntersectionObserver (modern browsers) -------- */
            if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                activateVideo(entry.target);
                                observer.unobserve(entry.target);
                            }
                        });
                    },
                    {
                        rootMargin: '200px', // preload just before visible
                        threshold: 0.01
                    }
                );
                previewVideos.forEach(video => observer.observe(video));
            }
            /* -------- Safari fallback (very old versions) -------- */
            else {
                previewVideos.forEach(video => {
                    activateVideo(video);
                });
            }
        })();
    }, []);

    return (
        <section className="background-gray-100 section-radius">
            <div className="spacer-64"></div>
            <div className="padding-global">
                <div className="container-1344">
                    <div className="w-layout-hflex flex-h_center-center gap-6">
                        <div className="text-tag"><img alt="" loading="lazy"
                                                       src={asset("/images-static/google_symbol.svg_1.svg")}/>
                            <div>4.9</div>
                        </div>
                        <div className="text-tag"><img alt="" loading="lazy"
                                                       src={asset("/images-static/google_symbol.svg.svg")}/>
                            <div>4.8</div>
                        </div>
                    </div>
                    <div className="spacer-28"></div>
                    <h2 className="heading-style-h3 text-align-center">
                        {_props.data.testimonials_title}
                    </h2>
                    <div className="spacer-12"></div>
                    <div className="text-16 weight-regular lh-150 text-align-center">
                        {_props.data.testimonials_description}
                    </div>
                    <div className="spacer-40"></div>
                    <div className="carousel-component">
                        <div className="carousel">
                            <div className="logo-carousel-overlay"></div>
                            <div className="logo-carousel-wrap" style={{
                                WebkitTransform: 'translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                MozTransform: 'translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                MsTransform: 'translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                transform: 'translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                            }}>
                                <ul className="logo-carousel" role="list">
                                    <li className="logo-carousel_item">
                                        <a className="logo-link w-inline-block" href="#"><img alt="Y Combinator logo"
                                                                                              className="logo-image"
                                                                                              loading="lazy"
                                                                                              src={asset("/images-static/Ycombinator-carousel-logo.svg")}/></a>
                                    </li>
                                    <li className="logo-carousel_item">
                                        <a className="logo-link w-inline-block" href="#"><img alt="Coca-Cola logo"
                                                                                              className="logo-image"
                                                                                              loading="lazy"
                                                                                              src={asset("/images-static/CocaCola.svg")}/></a>
                                    </li>
                                    <li className="logo-carousel_item">
                                        <a className="logo-link w-inline-block" href="#"><img alt="Disney Logo"
                                                                                              className="logo-image"
                                                                                              loading="lazy"
                                                                                              src={asset("/images-static/Disney.svg")}/></a>
                                    </li>
                                    <li className="logo-carousel_item">
                                        <a className="logo-link w-inline-block" href="#"><img alt="Genesis Logo"
                                                                                              className="logo-image"
                                                                                              loading="lazy"
                                                                                              src={asset("/images-static/genesis.avif")}
                                                                                              width="58"/></a>
                                    </li>
                                    <li className="logo-carousel_item">
                                        <a className="logo-link w-inline-block" href="#"><img alt="Udemy Logo"
                                                                                              className="logo-image"
                                                                                              loading="lazy"
                                                                                              src={asset("/images-static/udemy.svg")}/></a>
                                    </li>
                                    <li className="logo-carousel_item">
                                        <a className="logo-link w-inline-block" href="#"><img alt="EY logo"
                                                                                              className="logo-image"
                                                                                              loading="lazy"
                                                                                              src={asset("/images-static/EY-logo.svg")}/></a>
                                    </li>
                                    <li className="logo-carousel_item">
                                        <a className="logo-link w-inline-block" href="#"><img alt="PandaDoc logo"
                                                                                              className="logo-image"
                                                                                              loading="lazy"
                                                                                              src={asset("/images-static/pandadoc.svg")}/></a>
                                    </li>
                                </ul>
                                <div className="logo-carousel-clone">
                                    <ul className="logo-carousel" role="list">
                                        <li className="logo-carousel_item">
                                            <a className="logo-link w-inline-block" href="#"><img
                                                alt="Y Combinator logo" className="logo-image" loading="lazy"
                                                src={asset("/images-static/Ycombinator-carousel-logo.svg")}/></a>
                                        </li>
                                        <li className="logo-carousel_item">
                                            <a className="logo-link w-inline-block" href="#"><img alt="Coca-Cola logo"
                                                                                                  className="logo-image"
                                                                                                  loading="lazy"
                                                                                                  src={asset("/images-static/CocaCola.svg")}/></a>
                                        </li>
                                        <li className="logo-carousel_item">
                                            <a className="logo-link w-inline-block" href="#"><img alt="Disney Logo"
                                                                                                  className="logo-image"
                                                                                                  loading="lazy"
                                                                                                  src={asset("/images-static/Disney.svg")}/></a>
                                        </li>
                                        <li className="logo-carousel_item">
                                            <a className="logo-link w-inline-block" href="#"><img alt="Genesis Logo"
                                                                                                  className="logo-image"
                                                                                                  loading="lazy"
                                                                                                  src={asset("/images-static/genesis.avif")}
                                                                                                  width="58"/></a>
                                        </li>
                                        <li className="logo-carousel_item">
                                            <a className="logo-link w-inline-block" href="#"><img alt="Udemy Logo"
                                                                                                  className="logo-image"
                                                                                                  loading="lazy"
                                                                                                  src={asset("/images-static/udemy.svg")}/></a>
                                        </li>
                                        <li className="logo-carousel_item">
                                            <a className="logo-link w-inline-block" href="#"><img alt="EY logo"
                                                                                                  className="logo-image"
                                                                                                  loading="lazy"
                                                                                                  src={asset("/images-static/EY-logo.svg")}/></a>
                                        </li>
                                        <li className="logo-carousel_item">
                                            <a className="logo-link w-inline-block" href="#"><img alt="PandaDoc logo"
                                                                                                  className="logo-image"
                                                                                                  loading="lazy"
                                                                                                  src={asset("/images-static/pandadoc.svg")}/></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="logo-carousel-overlay is-right"></div>
                        </div>
                    </div>
                    <div className="trusted_companies-container"></div>
                    <div className="spacer-48"></div>
                    <div className="reviews-component">
                        <div className="reviews-column" id="w-node-_8efc79c4-f9aa-9972-7604-482e7d1bace7-dba9761c">
                            <div className="review_item" data-wf--review-item--variant="base" timing="0,10000"
                                 video-url="">
                                <div className="review_header">
                                    <div className="review_author-photo-wrapper"><img alt=""
                                                                                      className="review_author-photo"
                                                                                      loading="lazy"
                                                                                      src={asset("/images-static/Rakesh-Goyal-photo_1Rakesh Goyal photo.avif")}/>
                                    </div>
                                    <div className="review_author-info">
                                        <div className="text-20 weight-bold lh-148 text-gray-900">Rakesh Goyal</div>
                                        <div className="author_position-info">
                                            <div className="text-14 weight-book lh-168">Co-Founder &amp; CEO</div>
                                            <div className="text-14 weight-book lh-168">at</div>
                                            <div className="text-14 weight-semibold lh-168">Velt</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_content">
                                    <div className="text-16 weight-regular lh-150">Love Awesomic – When we started
                                        out we got all our design and landing page work done from them. They are fast
                                        and high quality!
                                    </div>
                                </div>
                            </div>
                            <div className="show-mobile-landscape">
                                <div className="review_item w-variant-6fce41fb-4bcb-0c9a-0e28-63b62bb4d75a"
                                     data-wf--review-item--variant="video-review" timing="0,10000"
                                     video-url="https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/New%20Vera%20Health%20%E2%80%93FEEDBACK%20(1).mp4">
                                    <div className="review_header">
                                        <div className="review_author-photo-wrapper"><img alt="Maxime Allouch Photo"
                                                                                          className="review_author-photo"
                                                                                          loading="lazy"
                                                                                          src={asset("/images-static/Maxime-Allouch_1Maxime-Allouch.png")}/>
                                        </div>
                                        <div className="review_author-info">
                                            <div className="text-20 weight-bold lh-148 text-gray-900">Maxime Allouch
                                            </div>
                                            <div className="author_position-info">
                                                <div className="text-14 weight-book lh-168">Co-Founder</div>
                                                <div className="text-14 weight-book lh-168">at</div>
                                                <div className="text-14 weight-semibold lh-168">Vera Health</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review_content w-variant-6fce41fb-4bcb-0c9a-0e28-63b62bb4d75a">
                                        <div
                                            className="text-16 weight-regular lh-150 w-variant-6fce41fb-4bcb-0c9a-0e28-63b62bb4d75a">We
                                            are subscribing Pro and have only good words for the awesome works! Fast
                                            matching, outstanding communication, quality works and cost saving! We
                                            highly recommend Awesomic and enjoy peace of mind!
                                        </div>
                                        <div
                                            className="video-review_content w-variant-6fce41fb-4bcb-0c9a-0e28-63b62bb4d75a">
                                            <div className="video-placeholder"><img alt=""
                                                                                    className="max-width-full placeholder-image w-variant-6fce41fb-4bcb-0c9a-0e28-63b62bb4d75a"
                                                                                    loading="lazy"
                                                                                    src={asset("/images-static/maxime-allouch-new.avif")}/>
                                                <div
                                                    className="review_play-icon w-variant-6fce41fb-4bcb-0c9a-0e28-63b62bb4d75a">
                                                    <img alt="" height="26" loading="lazy"
                                                         src={asset("/images-static/polygon-play-talent.svg")} width="Auto"/>
                                                </div>
                                            </div>
                                            <div
                                                className="video_preview-code w-background-video w-background-video-atom"
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    position: 'absolute',
                                                    top: '0',
                                                    left: '0',
                                                    zIndex: '1'
                                                }}>
                                                <video autoPlay="" data-object-fit="cover" data-wf-ignore="true" loop=""
                                                       playsInline="">
                                                    <source
                                                        data-src="https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/covers%20for%20video%20feedbacks/Vera%20health%20cover.mp4"
                                                        data-wf-ignore="true"/>
                                                </video>
                                            </div>
                                            <video
                                                className="video-review w-variant-6fce41fb-4bcb-0c9a-0e28-63b62bb4d75a">
                                                <source
                                                    data-src="https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/New%20Vera%20Health%20%E2%80%93FEEDBACK%20(1).mp4"
                                                    type="video/mp4"/>
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="review_item" data-wf--review-item--variant="base" timing="0,10000"
                                 video-url="">
                                <div className="review_header">
                                    <div className="review_author-photo-wrapper"><img alt=""
                                                                                      className="review_author-photo"
                                                                                      loading="lazy"
                                                                                      src={asset("/images-static/Ben-Warren-photo_1Ben Warren photo.avif")}/>
                                    </div>
                                    <div className="review_author-info">
                                        <div className="text-20 weight-bold lh-148 text-gray-900">Ben Warren</div>
                                        <div className="author_position-info">
                                            <div className="text-14 weight-book lh-168">Co-Founder &amp; CTO</div>
                                            <div className="text-14 weight-book lh-168">at</div>
                                            <div className="text-14 weight-semibold lh-168">Snowpilot</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_content">
                                    <div className="text-16 weight-regular lh-150">We used Awesomic for our logo design
                                        and have received lots of unprompted compliments. Highly recommended!
                                    </div>
                                </div>
                            </div>
                            <div className="review_item" data-wf--review-item--variant="base" timing="0,10000"
                                 video-url="">
                                <div className="review_header">
                                    <div className="review_author-photo-wrapper"><img alt=""
                                                                                      className="review_author-photo"
                                                                                      loading="lazy"
                                                                                      src={asset("/images-static/Erick-Enriquez-photo_1Erick Enriquez photo.avif")}/>
                                    </div>
                                    <div className="review_author-info">
                                        <div className="text-20 weight-bold lh-148 text-gray-900">Erick Enriquez</div>
                                        <div className="author_position-info">
                                            <div className="text-14 weight-book lh-168">Co-Founder &amp; CEO</div>
                                            <div className="text-14 weight-book lh-168">at</div>
                                            <div className="text-14 weight-semibold lh-168">InQuery</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_content">
                                    <div className="text-16 weight-regular lh-150">Awesomic really quickly matched me to
                                        a designer for what I thought would be a short engagement but who we ended up
                                        keeping around for a full month. She was awesome to work with and highly
                                        responsive and engaged. Will definitely be returning to Awesomic for future
                                        design needs.
                                    </div>
                                </div>
                            </div>
                            <div className="review_item" data-wf--review-item--variant="base" timing="0,10000"
                                 video-url="">
                                <div className="review_header">
                                    <div className="review_author-photo-wrapper"><img alt=""
                                                                                      className="review_author-photo"
                                                                                      loading="lazy"
                                                                                      src={asset("/images-static/Ivan-Tsybaev-photo_1Ivan Tsybaev photo.avif")}/>
                                    </div>
                                    <div className="review_author-info">
                                        <div className="text-20 weight-bold lh-148 text-gray-900">Ivan Tsybaev</div>
                                        <div className="author_position-info">
                                            <div className="text-14 weight-book lh-168">Co-Founder &amp; CEO</div>
                                            <div className="text-14 weight-book lh-168">at</div>
                                            <div className="text-14 weight-semibold lh-168">Careerist</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_content">
                                    <div className="text-16 weight-regular lh-150">Amazing service for such a good
                                        price! Especially with this offer. We\u2019ve been their customers for some time
                                        now and are happy. They are reliable and hassle-free to work with.
                                    </div>
                                </div>
                            </div>
                            <div className="review_item" data-wf--review-item--variant="base" timing="0,10000"
                                 video-url="">
                                <div className="review_header">
                                    <div className="review_author-photo-wrapper"><img alt="Photo of Sander Andersen"
                                                                                      className="review_author-photo"
                                                                                      loading="lazy"
                                                                                      src={asset("/images-static/Sander-Andersen_1Sander Andersen.avif")}/>
                                    </div>
                                    <div className="review_author-info">
                                        <div className="text-20 weight-bold lh-148 text-gray-900">Sander Andersen</div>
                                        <div className="author_position-info">
                                            <div className="text-14 weight-book lh-168">Co-founder</div>
                                            <div className="text-14 weight-book lh-168">at</div>
                                            <div className="text-14 weight-semibold lh-168">Entirebody</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_content">
                                    <div className="text-16 weight-regular lh-150">What I love about Awesomic is that we
                                        can collaborate with a really good designer. And the only thing that might make
                                        us cancel the subscription is hiring an in-house team. To be honest, I
                                        don\u2019t think we\u2019ll need that in the foreseeable future - Awesomic
                                        covers all our needs.
                                    </div>
                                </div>
                            </div>
                            <div className="review_item" data-wf--review-item--variant="base" timing="0,10000"
                                 video-url="">
                                <div className="review_header">
                                    <div className="review_author-photo-wrapper"><img alt="Photo of Jack Solomon"
                                                                                      className="review_author-photo"
                                                                                      loading="lazy"
                                                                                      src={asset("/images-static/Jack-Solomon---photo_1Jack Solomon - photo.avif")}/>
                                    </div>
                                    <div className="review_author-info">
                                        <div className="text-20 weight-bold lh-148 text-gray-900">Jack Solomon</div>
                                        <div className="author_position-info">
                                            <div className="text-14 weight-book lh-168">Co-Founder</div>
                                            <div className="text-14 weight-book lh-168">at</div>
                                            <div className="text-14 weight-semibold lh-168">Guac</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_content">
                                    <div className="text-16 weight-regular lh-150">So good! We've got them to do our
                                        logo, sales deck, and a Ul design in &lt; 2 weeks; super responsive, lots of
                                        revisions, so much easier than finding freelancers - and super super happy with
                                        the quality. 100% recommend.
                                    </div>
                                </div>
                            </div>
                            <div className="review_item" data-wf--review-item--variant="base" timing="0,10000"
                                 video-url="">
                                <div className="review_header">
                                    <div className="review_author-photo-wrapper"><img alt="Photo of Charles Bai"
                                                                                      className="review_author-photo"
                                                                                      loading="lazy"
                                                                                      src={asset("/images-static/Charles-Bai_1Charles Bai.avif")}/>
                                    </div>
                                    <div className="review_author-info">
                                        <div className="text-20 weight-bold lh-148 text-gray-900">Charles Bai</div>
                                        <div className="author_position-info">
                                            <div className="text-14 weight-book lh-168">Co-Founder</div>
                                            <div className="text-14 weight-book lh-168">at</div>
                                            <div className="text-14 weight-semibold lh-168">Paces</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_content">
                                    <div className="text-16 weight-regular lh-150">Amazing, we used Awesomic to redesign
                                        our marketing site, we got matched to a designer instantly and after the design
                                        a webflow engineer helped up implemented the website. We will continue to use
                                        Awesomic in the future for design tasks.
                                    </div>
                                </div>
                            </div>
                            <div className="review_item" data-wf--review-item--variant="base" timing="0,10000"
                                 video-url="">
                                <div className="review_header">
                                    <div className="review_author-photo-wrapper"><img alt="Photo of Lyn Chen"
                                                                                      className="review_author-photo"
                                                                                      loading="lazy"
                                                                                      src={asset("/images-static/Lyn-Chen_1Lyn Chen.avif")}/>
                                    </div>
                                    <div className="review_author-info">
                                        <div className="text-20 weight-bold lh-148 text-gray-900">Lyn Chen</div>
                                        <div className="author_position-info">
                                            <div className="text-14 weight-book lh-168">Co-Founder</div>
                                            <div className="text-14 weight-book lh-168">at</div>
                                            <div className="text-14 weight-semibold lh-168">Webapp.io</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_content">
                                    <div className="text-16 weight-regular lh-150">Had them re-design my whole dang
                                        website. They are fantastic and I\u2019ve been recommending them to everyone.
                                    </div>
                                </div>
                            </div>
                            <div className="review_item" data-wf--review-item--variant="base" timing="0,10000"
                                 video-url="">
                                <div className="review_header">
                                    <div className="review_author-photo-wrapper"><img alt="Photo of Nathan Shinder"
                                                                                      className="review_author-photo"
                                                                                      loading="lazy"
                                                                                      src={asset("/images-static/Nathan-Shinder_1Nathan Shinder.avif")}/>
                                    </div>
                                    <div className="review_author-info">
                                        <div className="text-20 weight-bold lh-148 text-gray-900">Nathan Shinder</div>
                                        <div className="author_position-info">
                                            <div className="text-14 weight-book lh-168">Co-Founder</div>
                                            <div className="text-14 weight-book lh-168">at</div>
                                            <div className="text-14 weight-semibold lh-168">Playhouse</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_content">
                                    <div className="text-16 weight-regular lh-150">We were lucky to meet Awesomic during
                                        Y Combinator\u2019s summer \u201921 batch - they\u2019ve done a ton of design
                                        work for us since. Most recently, they designed and developed Playhouse\u2019s
                                        landing page. Having no in-house Webflow expertise they were the perfect
                                        plug-n-play solution. We provided some high level requirements and went live in
                                        a matter of days. We continue working with Awesomic across multiple projects and
                                        always highly recommend!
                                    </div>
                                </div>
                            </div>
                            <div className="review_item" data-wf--review-item--variant="base" timing="0,10000"
                                 video-url="">
                                <div className="review_header">
                                    <div className="review_author-photo-wrapper"><img alt="Photo of Giorgi Tsurtsumia"
                                                                                      className="review_author-photo"
                                                                                      loading="lazy"
                                                                                      src={asset("/images-static/Giorgi-Tsurtsumia_1Giorgi Tsurtsumia.avif")}/>
                                    </div>
                                    <div className="review_author-info">
                                        <div className="text-20 weight-bold lh-148 text-gray-900">Giorgi Tsurtsumia
                                        </div>
                                        <div className="author_position-info">
                                            <div className="text-14 weight-book lh-168">Founder</div>
                                            <div className="text-14 weight-book lh-168">at</div>
                                            <div className="text-14 weight-semibold lh-168">Filta</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_content">
                                    <div className="text-16 weight-regular lh-150">What a great decision it turned out
                                        to be, we were matched with very smart UX designer who iterated literally on
                                        daily basis! Customer service and designer commitment was top notch! Highly
                                        recommended!
                                    </div>
                                </div>
                            </div>
                            <div className="review_item" data-wf--review-item--variant="base" timing="0,10000"
                                 video-url="">
                                <div className="review_header">
                                    <div className="review_author-photo-wrapper"><img alt="Photo of Rajiv Bhat"
                                                                                      className="review_author-photo"
                                                                                      loading="lazy"
                                                                                      src={asset("/images-static/Rajiv-Bhat-photo_1Rajiv Bhat photo.avif")}/>
                                    </div>
                                    <div className="review_author-info">
                                        <div className="text-20 weight-bold lh-148 text-gray-900">Rajiv Bhat</div>
                                        <div className="author_position-info">
                                            <div className="text-14 weight-book lh-168">Senior Venture partner</div>
                                            <div className="text-14 weight-book lh-168">at</div>
                                            <div className="text-14 weight-semibold lh-168">Pioneer Fund</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_content">
                                    <div className="text-16 weight-regular lh-150">\u201cAbsolutely phenomenal! Awesomic
                                        has become a big part of everything design at our startup. The team is so
                                        passionate about doing great work and such a delight to collaborate with.\u201d
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="reviews-column" id="w-node-_8efc79c4-f9aa-9972-7604-482e7d1bacd2-dba9761c">
                            <div className="review_item" data-wf--review-item--variant="base" timing="0,10000"
                                 video-url="">
                                <div className="review_header">
                                    <div className="review_author-photo-wrapper"><img alt=""
                                                                                      className="review_author-photo"
                                                                                      loading="lazy"
                                                                                      src={asset("/images-static/Ng-Yi-Ying-photo_1Ng Yi Ying photo.avif")}/>
                                    </div>
                                    <div className="review_author-info">
                                        <div className="text-20 weight-bold lh-148 text-gray-900">Ng Yi Ying</div>
                                        <div className="author_position-info">
                                            <div className="text-14 weight-book lh-168">Founder</div>
                                            <div className="text-14 weight-book lh-168">at</div>
                                            <div className="text-14 weight-semibold lh-168">AllSome</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_content">
                                    <div className="text-16 weight-regular lh-150">We are subscribing Pro and have only
                                        good words for the awesome works! Fast matching, outstanding communication,
                                        quality works and cost saving! We highly recommend Awesomic and enjoy peace of
                                        mind!
                                    </div>
                                </div>
                            </div>
                            <div className="review_item w-variant-6fce41fb-4bcb-0c9a-0e28-63b62bb4d75a"
                                 data-wf--review-item--variant="video-review" timing="0,10000"
                                 video-url="https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/New%20Vera%20Health%20%E2%80%93FEEDBACK%20(1).mp4">
                                <div className="review_header">
                                    <div className="review_author-photo-wrapper"><img alt="Maxime Allouch Photo"
                                                                                      className="review_author-photo"
                                                                                      loading="lazy"
                                                                                      src={asset("/images-static/Maxime-Allouch_1Maxime-Allouch.png")}/>
                                    </div>
                                    <div className="review_author-info">
                                        <div className="text-20 weight-bold lh-148 text-gray-900">Maxime Allouch</div>
                                        <div className="author_position-info">
                                            <div className="text-14 weight-book lh-168">Co-Founder</div>
                                            <div className="text-14 weight-book lh-168">at</div>
                                            <div className="text-14 weight-semibold lh-168">Vera Health</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_content w-variant-6fce41fb-4bcb-0c9a-0e28-63b62bb4d75a">
                                    <div
                                        className="text-16 weight-regular lh-150 w-variant-6fce41fb-4bcb-0c9a-0e28-63b62bb4d75a">We
                                        are subscribing Pro and have only good words for the awesome works! Fast
                                        matching, outstanding communication, quality works and cost saving! We highly
                                        recommend Awesomic and enjoy peace of mind!
                                    </div>
                                    <div
                                        className="video-review_content w-variant-6fce41fb-4bcb-0c9a-0e28-63b62bb4d75a">
                                        <div className="video-placeholder"><img alt=""
                                                                                className="max-width-full placeholder-image w-variant-6fce41fb-4bcb-0c9a-0e28-63b62bb4d75a"
                                                                                loading="lazy"
                                                                                src={asset("/images-static/maxime-allouch-new.avif")}/>
                                            <div
                                                className="review_play-icon w-variant-6fce41fb-4bcb-0c9a-0e28-63b62bb4d75a">
                                                <img alt="" height="26" loading="lazy"
                                                     src={asset("/images-static/polygon-play-talent.svg")} width="Auto"/>
                                            </div>
                                        </div>
                                        <div className="video_preview-code w-background-video w-background-video-atom"
                                             style={{
                                                 width: '100%',
                                                 height: '100%',
                                                 position: 'absolute',
                                                 top: '0',
                                                 left: '0',
                                                 zIndex: '1'
                                             }}>
                                            <video autoPlay="" data-object-fit="cover" data-wf-ignore="true" loop=""
                                                   playsInline="">
                                                <source
                                                    data-src="https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/covers%20for%20video%20feedbacks/Vera%20health%20cover.mp4"
                                                    data-wf-ignore="true"/>
                                            </video>
                                        </div>
                                        <video className="video-review w-variant-6fce41fb-4bcb-0c9a-0e28-63b62bb4d75a">
                                            <source
                                                data-src="https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/New%20Vera%20Health%20%E2%80%93FEEDBACK%20(1).mp4"
                                                type="video/mp4"/>
                                        </video>
                                    </div>
                                </div>
                            </div>
                            <div className="review_item" data-wf--review-item--variant="base" timing="0,10000"
                                 video-url="">
                                <div className="review_header">
                                    <div className="review_author-photo-wrapper"><img alt=""
                                                                                      className="review_author-photo"
                                                                                      loading="lazy"
                                                                                      src={asset("/images-static/Max-Ahrens-photo_1Max Ahrens photo.avif")}/>
                                    </div>
                                    <div className="review_author-info">
                                        <div className="text-20 weight-bold lh-148 text-gray-900">Max Ahrens</div>
                                        <div className="author_position-info">
                                            <div className="text-14 weight-book lh-168">Co-Founder &amp; CEO</div>
                                            <div className="text-14 weight-book lh-168">at</div>
                                            <div className="text-14 weight-semibold lh-168">Maihem</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_content">
                                    <div className="text-16 weight-regular lh-150">They\u2019ve done some really great
                                        yet cost effective design work for us. At first, we\u2019ve been sceptical, but
                                        once we started using Awesomic the only thing we were annoyed about is that we
                                        hadn\u2019t tried it earlier.
                                    </div>
                                </div>
                            </div>
                            <div className="review_item" data-wf--review-item--variant="base" timing="0,10000"
                                 video-url="">
                                <div className="review_header">
                                    <div className="review_author-photo-wrapper"><img alt="Shaunak Turaga photo"
                                                                                      className="review_author-photo"
                                                                                      loading="lazy"
                                                                                      src={asset("/images-static/Shaunak-Turaga-photo_1Shaunak Turaga photo.avif")}/>
                                    </div>
                                    <div className="review_author-info">
                                        <div className="text-20 weight-bold lh-148 text-gray-900">Shaunak Turaga</div>
                                        <div className="author_position-info">
                                            <div className="text-14 weight-book lh-168">Co-founder &amp; CEO</div>
                                            <div className="text-14 weight-book lh-168">at</div>
                                            <div className="text-14 weight-semibold lh-168">Docsum</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_content">
                                    <div className="text-16 weight-regular lh-150">Awesomic has been awesome for logo,
                                        website, and sales material needs!
                                    </div>
                                </div>
                            </div>
                            <div className="review_item" data-wf--review-item--variant="base" timing="0,10000"
                                 video-url="">
                                <div className="review_header">
                                    <div className="review_author-photo-wrapper"><img alt=""
                                                                                      className="review_author-photo"
                                                                                      loading="lazy"
                                                                                      src={asset("/images-static/David-J.-Phillips-phtoto_1David J. Phillips phtoto.avif")}/>
                                    </div>
                                    <div className="review_author-info">
                                        <div className="text-20 weight-bold lh-148 text-gray-900">David J. Phillips
                                        </div>
                                        <div className="author_position-info">
                                            <div className="text-14 weight-book lh-168">Founder &amp; CEO</div>
                                            <div className="text-14 weight-book lh-168">at</div>
                                            <div className="text-14 weight-semibold lh-168">Fondo</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_content">
                                    <div className="text-16 weight-regular lh-150">This is one of the best deals on
                                        bookface very happy Awesomic customer here! Their software is beautiful and
                                        elegant, and their designs are A+. The turnaround time is super impressive.
                                    </div>
                                </div>
                            </div>
                            <div className="review_item w-variant-6fce41fb-4bcb-0c9a-0e28-63b62bb4d75a"
                                 data-wf--review-item--variant="video-review" timing="0,10000"
                                 video-url="https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/John%20Banner_Final%20feedback_02.04.24.mp4">
                                <div className="review_header">
                                    <div className="review_author-photo-wrapper"><img alt="Photo of John Banner"
                                                                                      className="review_author-photo"
                                                                                      loading="lazy"
                                                                                      src={asset("/images-static/john-banner-photo_1john banner photo.avif")}/>
                                    </div>
                                    <div className="review_author-info">
                                        <div className="text-20 weight-bold lh-148 text-gray-900">John Banner</div>
                                        <div className="author_position-info">
                                            <div className="text-14 weight-book lh-168">CEO, Founder</div>
                                            <div className="text-14 weight-book lh-168">at</div>
                                            <div className="text-14 weight-semibold lh-168">Respaid</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_content w-variant-6fce41fb-4bcb-0c9a-0e28-63b62bb4d75a">
                                    <div
                                        className="text-16 weight-regular lh-150 w-variant-6fce41fb-4bcb-0c9a-0e28-63b62bb4d75a">Had
                                        them re-design my whole dang website. They are fantastic and I\u2019ve been
                                        recommending them to everyone.
                                    </div>
                                    <div
                                        className="video-review_content w-variant-6fce41fb-4bcb-0c9a-0e28-63b62bb4d75a">
                                        <div className="video-placeholder"><img
                                            alt="John Banner Review placeholder image"
                                            className="max-width-full placeholder-image w-variant-6fce41fb-4bcb-0c9a-0e28-63b62bb4d75a"
                                            loading="lazy" sizes="100vw"
                                            src={asset("/images-static/johnBanner-placeholder-image_1johnBanner-placeholder-image.avif")}
                                            srcSet="__ASSET_BASE__/images/johnBanner-placeholder-image_1johnBanner-placeholder-image.avif 500w, images/johnBanner-placeholder-image_1johnBanner-placeholder-image.avif 800w, images/johnBanner-placeholder-image_1johnBanner-placeholder-image.avif 880w"/>
                                            <div
                                                className="review_play-icon w-variant-6fce41fb-4bcb-0c9a-0e28-63b62bb4d75a">
                                                <img alt="" height="26" loading="lazy"
                                                     src={asset("/images-static/polygon-play-talent.svg")} width="Auto"/>
                                            </div>
                                        </div>
                                        <div className="video_preview-code w-background-video w-background-video-atom"
                                             style={{
                                                 width: '100%',
                                                 height: '100%',
                                                 position: 'absolute',
                                                 top: '0',
                                                 left: '0',
                                                 zIndex: '1'
                                             }}>
                                            <video autoPlay="" data-object-fit="cover" data-wf-ignore="true" loop=""
                                                   playsInline="">
                                                <source
                                                    data-src="https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/covers%20for%20video%20feedbacks/Vera%20health%20cover.mp4"
                                                    data-wf-ignore="true"/>
                                            </video>
                                        </div>
                                        <video className="video-review w-variant-6fce41fb-4bcb-0c9a-0e28-63b62bb4d75a">
                                            <source
                                                data-src="https://awesomic-prod.nyc3.cdn.digitaloceanspaces.com/site/John%20Banner_Final%20feedback_02.04.24.mp4"
                                                type="video/mp4"/>
                                        </video>
                                    </div>
                                </div>
                            </div>
                            <div className="review_item" data-wf--review-item--variant="base" timing="0,10000"
                                 video-url="">
                                <div className="review_header">
                                    <div className="review_author-photo-wrapper"><img alt="Photo of Jean Carlos"
                                                                                      className="review_author-photo"
                                                                                      loading="lazy"
                                                                                      src={asset("/images-static/jean-carlos-photo_1jean carlos photo.avif")}/>
                                    </div>
                                    <div className="review_author-info">
                                        <div className="text-20 weight-bold lh-148 text-gray-900">Jeane Carlos</div>
                                        <div className="author_position-info">
                                            <div className="text-14 weight-book lh-168">Founder</div>
                                            <div className="text-14 weight-book lh-168">at</div>
                                            <div className="text-14 weight-semibold lh-168">RecipeUI</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_content">
                                    <div className="text-16 weight-regular lh-150">The designers here are similar to
                                        FAANG quality! Both customer support and designers have great and quick
                                        communication.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="reviews-column last-col"
                             id="w-node-_8efc79c4-f9aa-9972-7604-482e7d1bacfe-dba9761c">
                            <div className="review_item" data-wf--review-item--variant="base" timing="0,10000"
                                 video-url="">
                                <div className="review_header">
                                    <div className="review_author-photo-wrapper"><img alt=""
                                                                                      className="review_author-photo"
                                                                                      loading="lazy"
                                                                                      src={asset("/images-static/Nik-Kotov-photo_1Nik Kotov photo.avif")}/>
                                    </div>
                                    <div className="review_author-info">
                                        <div className="text-20 weight-bold lh-148 text-gray-900">Nik Kotov</div>
                                        <div className="author_position-info">
                                            <div className="text-14 weight-book lh-168">Founder &amp; CEO</div>
                                            <div className="text-14 weight-book lh-168">at</div>
                                            <div className="text-14 weight-semibold lh-168">Atomized</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_content">
                                    <div className="text-16 weight-regular lh-150">Recently engaged Awesomic for a side
                                        project I`m working on. Saw results literally on day 1. Overall, very
                                        impressed and will definitely continue to use their services for my graphic
                                        design needs!
                                    </div>
                                </div>
                            </div>
                            <div className="review_item" data-wf--review-item--variant="base" timing="0,10000"
                                 video-url="">
                                <div className="review_header">
                                    <div className="review_author-photo-wrapper"><img alt=""
                                                                                      className="review_author-photo"
                                                                                      loading="lazy"
                                                                                      src={asset("/images-static/Tal-Feld-photo_1Tal Feld photo.avif")}/>
                                    </div>
                                    <div className="review_author-info">
                                        <div className="text-20 weight-bold lh-148 text-gray-900">Tal Feld</div>
                                        <div className="author_position-info">
                                            <div className="text-14 weight-book lh-168">Co-Founder &amp; CEO</div>
                                            <div className="text-14 weight-book lh-168">at</div>
                                            <div className="text-14 weight-semibold lh-168">Echo</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_content">
                                    <div className="text-16 weight-regular lh-150">We did the 1 to 1 plan, exceeded our
                                        expectations. Amazing support. Highly recommend.
                                    </div>
                                </div>
                            </div>
                            <div className="review_item" data-wf--review-item--variant="base" timing="0,10000"
                                 video-url="">
                                <div className="review_header">
                                    <div className="review_author-photo-wrapper"><img alt=""
                                                                                      className="review_author-photo"
                                                                                      loading="lazy"
                                                                                      src={asset("/images-static/David-Head-photo_1David Head photo.avif")}/>
                                    </div>
                                    <div className="review_author-info">
                                        <div className="text-20 weight-bold lh-148 text-gray-900">David Head</div>
                                        <div className="author_position-info">
                                            <div className="text-14 weight-book lh-168">Founder &amp; CEO</div>
                                            <div className="text-14 weight-book lh-168">at</div>
                                            <div className="text-14 weight-semibold lh-168">Sixty</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_content">
                                    <div className="text-16 weight-regular lh-150">Only a week into using Awesomic and
                                        they already have an entire brand identity done that my team and I are super
                                        happy with. Normally they say you can\u2019t get speed, quality, and cost all
                                        together but somehow Awesomic\u2019s pulled it off here.
                                    </div>
                                </div>
                            </div>
                            <div className="review_item" data-wf--review-item--variant="base" timing="0,10000"
                                 video-url="">
                                <div className="review_header">
                                    <div className="review_author-photo-wrapper"><img alt="Photo of Miles Penn"
                                                                                      className="review_author-photo"
                                                                                      loading="lazy"
                                                                                      src={asset("/images-static/Miles-Penn_1Miles Penn.avif")}/>
                                    </div>
                                    <div className="review_author-info">
                                        <div className="text-20 weight-bold lh-148 text-gray-900">Miles Penn</div>
                                        <div className="author_position-info">
                                            <div className="text-14 weight-book lh-168">Founder</div>
                                            <div className="text-14 weight-book lh-168">at</div>
                                            <div className="text-14 weight-semibold lh-168">Mtailor</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_content">
                                    <div className="text-16 weight-regular lh-150">Incredible deal and awesome service.
                                        We've been using them for a while and just doubled our capacity / usage, because
                                        they're reliable, good, and easy to work with, with no need to manage someone.
                                    </div>
                                </div>
                            </div>
                            <div className="review_item" data-wf--review-item--variant="base" timing="0,10000"
                                 video-url="">
                                <div className="review_header">
                                    <div className="review_author-photo-wrapper"><img alt="Photo of Graham Doig"
                                                                                      className="review_author-photo"
                                                                                      loading="lazy"
                                                                                      src={asset("/images-static/Graham-Doig_1Graham Doig.avif")}/>
                                    </div>
                                    <div className="review_author-info">
                                        <div className="text-20 weight-bold lh-148 text-gray-900">Graham Doig</div>
                                        <div className="author_position-info">
                                            <div className="text-14 weight-book lh-168">Founder</div>
                                            <div className="text-14 weight-book lh-168">at</div>
                                            <div className="text-14 weight-semibold lh-168">Seaflight</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_content">
                                    <div className="text-16 weight-regular lh-150">Awesomic has been excellent for us -
                                        we got paired with a great designer who quickly understood the brief and the
                                        company and came up with an excellent logo, brand guidelines and various graphic
                                        elements for web, a website mockup, and some cool motion graphics that we
                                        didn\u2019t even know we wanted until we saw how excellent they were. Highly
                                        recommend.
                                    </div>
                                </div>
                            </div>
                            <div className="review_item" data-wf--review-item--variant="base" timing="0,10000"
                                 video-url="">
                                <div className="review_header">
                                    <div className="review_author-photo-wrapper"><img alt="Photo of Miles Penn"
                                                                                      className="review_author-photo"
                                                                                      loading="lazy"
                                                                                      src={asset("/images-static/Miles-Penn_1Miles Penn.avif")}/>
                                    </div>
                                    <div className="review_author-info">
                                        <div className="text-20 weight-bold lh-148 text-gray-900">Miles Penn</div>
                                        <div className="author_position-info">
                                            <div className="text-14 weight-book lh-168">Founder</div>
                                            <div className="text-14 weight-book lh-168">at</div>
                                            <div className="text-14 weight-semibold lh-168">Mtailor</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_content">
                                    <div className="text-16 weight-regular lh-150">Incredible deal and awesome service.
                                        We've been using them for a while and just doubled our capacity / usage, because
                                        they're reliable, good, and easy to work with, with no need to manage someone.
                                    </div>
                                </div>
                            </div>
                            <div className="review_item" data-wf--review-item--variant="base" timing="0,10000"
                                 video-url="">
                                <div className="review_header">
                                    <div className="review_author-photo-wrapper"><img alt="Photo of Daniel Osvath"
                                                                                      className="review_author-photo"
                                                                                      loading="lazy"
                                                                                      src={asset("/images-static/Daniel-Osvath_1Daniel Osvath.avif")}/>
                                    </div>
                                    <div className="review_author-info">
                                        <div className="text-20 weight-bold lh-148 text-gray-900">Daniel Osvath</div>
                                        <div className="author_position-info">
                                            <div className="text-14 weight-book lh-168">Venture partner</div>
                                            <div className="text-14 weight-book lh-168">at</div>
                                            <div className="text-14 weight-semibold lh-168">Pioneer Fund</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_content">
                                    <div className="text-16 weight-regular lh-150">Awesomic has been an incredible team
                                        to work with. In only a few weeks we went from an idea, to a top-notch website
                                        design, and then to a flawless Webflow implementation by the Awesomic team. The
                                        daily turnaround times for small tasks make feedback and revisions very simple,
                                        and they have a talented team with specialists in all areas.
                                    </div>
                                </div>
                            </div>
                            <div className="review_item" data-wf--review-item--variant="base" timing="0,10000"
                                 video-url="">
                                <div className="review_header">
                                    <div className="review_author-photo-wrapper"><img alt="Photo of Anahi Sosa"
                                                                                      className="review_author-photo"
                                                                                      loading="lazy"
                                                                                      src={asset("/images-static/Anahi-Sosa-photo_1Anahi Sosa photo.avif")}/>
                                    </div>
                                    <div className="review_author-info">
                                        <div className="text-20 weight-bold lh-148 text-gray-900">Anahi Sosa</div>
                                        <div className="author_position-info">
                                            <div className="text-14 weight-book lh-168">Co-founder</div>
                                            <div className="text-14 weight-book lh-168">at</div>
                                            <div className="text-14 weight-semibold lh-168">Perfecto</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_content">
                                    <div className="text-16 weight-regular lh-150">Awesomic has been the ideal solution
                                        for us at Perfecto since we had so many design &amp; UI tasks to complete right
                                        away but didn\u2019t want to hire a FTE yet. Amazing tool and really great team
                                        of designers!
                                    </div>
                                </div>
                            </div>
                            <div className="review_item" data-wf--review-item--variant="base" timing="0,10000"
                                 video-url="">
                                <div className="review_header">
                                    <div className="review_author-photo-wrapper"><img alt="Photo of Chris Horne"
                                                                                      className="review_author-photo"
                                                                                      loading="lazy"
                                                                                      src={asset("/images-static/Chris-Horne_photo_1Chris Horne_photo.avif")}/>
                                    </div>
                                    <div className="review_author-info">
                                        <div className="text-20 weight-bold lh-148 text-gray-900">Chris Horne</div>
                                        <div className="author_position-info">
                                            <div className="text-14 weight-book lh-168">Founder</div>
                                            <div className="text-14 weight-book lh-168">at</div>
                                            <div className="text-14 weight-semibold lh-168">Filta</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_content">
                                    <div className="text-16 weight-regular lh-150">Had them re-design my whole dang
                                        website. They are fantastic and I\u2019ve been recommending them to everyone.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hide w-embed w-script">
                            <style dangerouslySetInnerHTML={{
                                __html: `
      /* === BACKGROUND VIDEO SHOULD NEVER BLOCK CLICKS === */
      .w-background-video,
      .w-background-video video {
        pointer-events: none;
      }
      /* === SMOOTH PREVIEW FADE === */
      .video-placeholder {
        transition: opacity 0.35s ease;
      }
      /* === HIDE BG VIDEO ON MOBILE (autoPlay IS BLOCKED ANYWAY) === */
      @media (max-width: 767px) {
        .w-background-video:not(.ai-service_bg-video) {
          display: none !important;
        }
      }
    `
                            }}/>


                        </div>
                        <div className="spacer-144 tablet_spacer-128"
                             id="w-node-_8efc79c4-f9aa-9972-7604-482e7d1bad15-dba9761c"></div>
                        <div className="more-reviews_block" id="w-node-_8efc79c4-f9aa-9972-7604-482e7d1bad16-dba9761c">
                            <a calendly-link=""
                               className="button is-white w-variant-9aff5deb-9bed-fb3a-6140-c699312d49d7 w-inline-block"
                               data-wf--button-white--variant="white-icon-right" href="https://awesomic.com/wall-of-love"
                               target="_blank">
                                <div>Read more</div>
                                <img alt="" className="button-icon w-variant-9aff5deb-9bed-fb3a-6140-c699312d49d7"
                                     loading="lazy" src={asset("/images-static/new-page-black.svg")}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
