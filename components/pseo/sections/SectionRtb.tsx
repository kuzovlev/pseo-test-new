import type {PseoPageData} from "@/lib/pseo-types";

const ASSET_BASE = process.env.NEXT_PUBLIC_ASSET_BASE ?? "";
const asset = (src: string) => `${ASSET_BASE}${src.startsWith("/") ? src : `/${src}`}`;

export function SectionRtb(_props: { data?: PseoPageData }) {
    return (
        <section className="background-gray-100 section-radius section_move-top section-offset">
                <div className="spacer-64"></div>
                <div className="padding-global">
                    <div className="container-1344">
                        <div className="mobile_max-width-300 align-center">
                            <h2 className="heading-style-h3 text-align-center">
                                {_props.data?.rtb_title}
                            </h2>
                            <div className="spacer-20"></div>
                            <div className="text-16 weight-regular lh-150 text-align-center">
                                {_props.data?.rtb_description}
                            </div>
                        </div>
                        <div className="spacer-48"></div>
                        <div data-w-id="22ab82f0-6bc3-c5a4-8ae2-e9bdf54e81ec" className="steps-component">
                            <div className="steps-component_item step-1">
                                <div className="step_inner-top">
                                    <div className="category-tag first-step">Step 1</div>
                                    <div className="spacer-12"></div>
                                    <div className="text-20 weight-semibold lh-156">
                                        {_props.data?.rtb_step_1_title}
                                    </div>
                                    <div className="spacer-40"></div>
                                    <div className="heading-style-h3 mod-numbers text-white"><span duration="1"
                                                                                                   counter="true"
                                                                                                   start-number="10">
                                        {_props.data?.rtb_step_1_number}
                                    </span>%
                                    </div>
                                    <div className="text-15 weight-regular lh-145 text-white-90">
                                        {_props.data?.['rtb_step_1_line-1']}
                                    </div>
                                    <div className="spacer-8"></div>
                                    <div className="text-15 weight-regular lh-145 text-white-90">
                                        {_props.data?.['rtb_step_1_line-2']}
                                    </div>
                                </div>
                                <div className="approvement-faces_wrapper"><img
                                    src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfab0b_face_7.avif"
                                    loading="lazy" alt="" className="approve_face-image is-first"/><img
                                    src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfab07_face_6.avif"
                                    loading="lazy" alt="" className="approve_face-image"/><img
                                    src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfab0d_face_5.avif"
                                    loading="lazy" alt="" className="approve_face-image"/><img
                                    src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfab0a_face_4.avif"
                                    loading="lazy" alt=""
                                    className="approve_face-image medium_show landscape_show"/><img
                                    src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfab08_face_3.avif"
                                    loading="lazy" alt="" className="approve_face-image large_show landscape_show"/><img
                                    src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfab06_face_2.avif"
                                    loading="lazy" alt="" className="approve_face-image large_show landscape_show"/><img
                                    src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfab09_face_1.avif"
                                    loading="lazy" alt="" className="approve_face-image"/><img
                                    src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfab0c_faces_60.avif"
                                    loading="lazy" alt="" className="approve_face-image"/></div>
                            </div>
                            <div className="steps-component_item">
                                <div className="step_inner-top">
                                    <div className="category-tag">Step 2</div>
                                    <div className="spacer-12"></div>
                                    <div className="text-20 weight-semibold lh-156 text-gray-900">
                                        {_props.data?.rtb_step_2_title}
                                    </div>
                                </div>
                                <div className="step_inner-bottom">
                                    <div className="step-details">
                                        <div className="heading-style-h3 mod-numbers"><span delay="400" counter="true"
                                                                                            start-number="0"
                                                                                            duration="0.5">
                                            {_props.data?.rtb_step_2_number}
                                        </span>%
                                        </div>
                                        <div className="text-15 weight-regular lh-145">
                                            {_props.data?.['rtb_step_2_line-1']}
                                        </div>
                                        <div className="spacer-8"></div>
                                        <div className="text-15 weight-regular lh-145">
                                            {_props.data?.['rtb_step_2_line-2']}
                                        </div>
                                    </div>
                                    <div className="step-2-fill">
                                        <div className="approvement-faces_wrapper"><img
                                            src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfab23_face-9.avif"
                                            loading="lazy" alt=""
                                            className="approve_face-image is-first is-step-2"/><img
                                            src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfab0d_face_5.avif"
                                            loading="lazy" alt="" className="approve_face-image is-step-2"/><img
                                            src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfab0b_face_7.avif"
                                            loading="lazy" alt=""
                                            className="approve_face-image is-step-2 medium_show landscape_show"/><img
                                            src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfab0a_face_4.avif"
                                            loading="lazy" alt="" className="approve_face-image is-step-2"/><img
                                            src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfab09_face_1.avif"
                                            loading="lazy" alt=""
                                            className="approve_face-image is-step-2 large_show landscape_show"/><img
                                            src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfab08_face_3.avif"
                                            loading="lazy" alt="" className="approve_face-image is-step-2"/><img
                                            src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfab06_face_2.avif"
                                            loading="lazy" alt=""
                                            className="approve_face-image is-step-2 large_show landscape_show"/><img
                                            src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfab0e_faces_19.svg"
                                            loading="lazy" alt="" className="approve_face-image is-step-2"/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="steps-component_item">
                                <div className="step_inner-top">
                                    <div className="category-tag">Step 3</div>
                                    <div className="spacer-12"></div>
                                    <div className="text-20 weight-semibold lh-156 text-gray-900">
                                        {_props.data?.rtb_step_3_title}
                                    </div>
                                </div>
                                <div className="step_inner-bottom">
                                    <div className="step-details">
                                        <div className="heading-style-h3 mod-numbers"><span delay="550" counter="true"
                                                                                            start-number="10"
                                                                                            duration="1">
                                            {_props.data?.rtb_step_3_number}
                                        </span>%
                                        </div>
                                        <div className="text-15 weight-regular lh-145">
                                            {_props.data?.['rtb_step_3_line-1']}
                                        </div>
                                        <div className="spacer-8"></div>
                                        <div className="text-15 weight-regular lh-145">
                                            {_props.data?.['rtb_step_3_line-2']}
                                        </div>
                                    </div>
                                    <div className="step-3-fill">
                                        <div className="approvement-faces_wrapper"><img
                                            src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfab0d_face_5.avif"
                                            loading="lazy" alt=""
                                            className="approve_face-image is-first is-step-3"/><img
                                            src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfab09_face_1.avif"
                                            loading="lazy" alt="" className="approve_face-image is-step-3"/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="steps-component_item step-4">
                                <div className="step_inner-top">
                                    <div className="category-tag">Step 4</div>
                                    <div className="spacer-12"></div>
                                    <div className="text-20 weight-semibold lh-156">
                                        {_props.data?.rtb_step_4_title}
                                    </div>
                                </div>
                                <div className="step_inner-bottom"
                                     style={{
                                         transform: "translate3d(0px, 68px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                         transformStyle: "preserve-3d",
                                     }}>
                                    <div className="step-details"><img
                                        src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfaac5_step-4-image.avif"
                                        loading="lazy" width="112" alt=""/>
                                        <div className="spacer-36"></div>
                                        <div className="heading-style-h3 mod-numbers"><span delay="700" counter="true"
                                                                                            start-number="0"
                                                                                            duration="0.6">
                                            {_props.data?.rtb_step_4_number}
                                        </span>%
                                        </div>
                                        <div className="text-15 weight-regular lh-145">
                                            {_props.data?.['rtb_step_4_line-1']}
                                        </div>
                                        <div className="spacer-8"></div>
                                        <div className="text-15 weight-regular lh-145">
                                            {_props.data?.['rtb_step_4_line-2']}
                                        </div>
                                    </div>
                                    <div className="step-4-fill">
                                        <div className="max-width-full tablet_hide"><a
                                            calendly-link="https://calendly.com/awesomic/demo?hide_gdpr_banner=1"
                                            button-black="" data-wf--button-black-m--variant="full-width-with-icon"
                                            href="#"
                                            className="button w-variant-5f244f9e-d3c8-a2d9-6fe1-f6f094f3745a w-inline-block">
                                            <div className="z-index-1">Book a demo</div>
                                            <img
                                                src="https://cdn.prod.website-files.com/68c2a33d71ce477bc4cfa871/68c2a33d71ce477bc4cfaaa4_open-link-icon.svg"
                                                loading="lazy" alt="" height="20"
                                                className="button-icon w-variant-5f244f9e-d3c8-a2d9-6fe1-f6f094f3745a"/>
                                            <div className="button-background"></div>
                                        </a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="spacer-144 tablet_spacer-128"></div>
        </section>
    )
}