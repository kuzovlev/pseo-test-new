import type { PseoPageData } from "@/lib/pseo-types";

const ASSET_BASE = process.env.NEXT_PUBLIC_ASSET_BASE ?? "";

const img = (src: string, alt = "", className = "", props: Record<string, string> = {}) => (
    <img src={`${ASSET_BASE}${src}`} alt={alt} className={className} loading="lazy" {...props} />
);

export function Navbar(_props: { data?: PseoPageData }) {
  return (
      <div
          className="navbar_component w-nav"
          data-animation="default"
          data-collapse="medium"
          data-duration="400"
          data-easing="ease"
          data-easing2="ease"
          data-w-id="07cb5ef4-0384-fb78-8b8e-242a2068d912"
          data-wf--navbar--variant="base"
          fs-scrolldisable-element="smart-nav"
          role="banner"
      >
        {/* ChiliPiper booking popup */}
        <div className="booking-popup">
          <iframe className="chili-frame" />
          <div className="chili-popup_close" />
        </div>

        <div className="navbar_container">
          {/* Logo */}
          <a className="navbar_logo-link w-nav-brand" href="https://www.awesomic.com/">
            {img("/images-static/awesomic-logo.svg", "Awesomic Logo", "navbar_logo wide")}
            {img("/images-static/awesomic-smile-menu.svg", "", "navbar_logo small")}
          </a>

          {/* Main nav */}
          <nav className="navbar_menu is-page-height-tablet w-nav-menu" role="navigation">
            <div className="navbar_menu navigation-list">

              <a className="navbar-link" href="https://awesomic.com/pricing">Pricing</a>

              {/* Our work dropdown */}
              <div className="navbar-dropdown w-dropdown" data-delay="0" data-hover="true">
                <div className="navbar-link is-dropdown w-dropdown-toggle">
                  <div>Our work</div>
                  {img("/images-static/dropdown-chevron.svg", "", "dropdown-chevron")}
                </div>
                <nav className="dropdown-navigation w-dropdown-list">
                  <div className="dropdown-navigation inner single-col">
                    <div className="dropdown-column">
                      <div className="dropdown-section">
                        <DropdownLink href="https://awesomic.com/case-study" icon="/images/case-study-icon.svg" label="Case studies" />
                        <DropdownLink href="https://awesomic.com/design-menu/web" icon="/images/design-menu-icon.svg" label="Design menu" isNew />
                      </div>
                    </div>
                  </div>
                </nav>
              </div>

              {/* Services & solutions dropdown */}
              <div className="navbar-dropdown w-dropdown" data-delay="0" data-hover="true">
                <div className="navbar-link is-dropdown w-dropdown-toggle">
                  <div>Services &amp; solutions</div>
                  {img("/images-static/dropdown-chevron.svg", "", "dropdown-chevron")}
                </div>
                <nav className="dropdown-navigation w-dropdown-list">
                  <div className="dropdown-navigation inner">

                    {/* Left column — services */}
                    <div className="dropdown-column">
                      <div className="dropdown-section">
                        <div className="dropdown_section-name">Services:</div>
                        <DropdownLink href="https://awesomic.com/?tab=design#services-block"   icon="/images/magic-wand-16-n.svg"       label="Design services" />
                        <DropdownLink href="https://awesomic.com/video"                    icon="/images/video-production-icon.svg" label="Video production" />
                        <DropdownLink href="https://awesomic.com/web-design"               icon="/images/web-dis-icon.svg"          label="Web design" isNew />
                        <DropdownLink href="https://awesomic.com/branding"                 icon="/images/branding-icon.svg"         label="Branding" />
                        <DropdownLink href="https://awesomic.com/graphic"                  icon="/images/graph-des-icon-nav.svg"    label="Graphic design" isNew />
                        <DropdownLink href="https://awesomic.com/?tab=nocode#services-block"   icon="/images/brick-icon-dark.svg"       label="No-code development" />
                        <DropdownLink href="https://awesomic.com/?tab=marketing#services-block" icon="/images/stats-icon-dark.svg"      label="Marketing services" />
                        <DropdownLink href="https://awesomic.com/?tab=software#services-block" icon="/images/settings-icon-dark.svg"   label="Software development" />
                      </div>
                    </div>

                    {/* Right column — solutions + industry */}
                    <div className="dropdown-column">
                      <div className="dropdown-section">
                        <div className="dropdown_section-name">Solutions:</div>
                        <DropdownLink href="https://awesomic.com/webflow"   icon="/images/webflow-menu-icon.svg" label="Webflow" />
                        <DropdownLink href="https://awesomic.com/framer"    icon="/images/framer-menu-icon.svg"  label="Framer" />
                        <DropdownLink href="https://awesomic.com/wordpress" icon="/images/wp-menu-icon.svg"      label="Wordpress" />
                      </div>
                      <div className="dropdown-section">
                        <div className="dropdown_section-name">Industry:</div>
                        <DropdownLink href="https://awesomic.com/agencies" icon="/images/agencies-menu-icon.svg" label="Agencies" />
                      </div>
                    </div>

                  </div>
                </nav>
              </div>

              <a className="navbar-link" href="https://awesomic.com/about">About us</a>
              <a className="navbar-link" href="https://awesomic.com/blog">Blog</a>
              <a className="navbar-link _w-icon w-inline-block" href="wall-of-love.html">
                {img("/images-static/heart-icon.svg", "", "tablet_hide")}
                <div>Love</div>
              </a>
              <a className="navbar-link" href="https://awesomic.com/talent">
                Apply<span className="medium_show inline">&nbsp;&nbsp;as a talent</span>
              </a>
            </div>

            {/* Mobile CTA (visible on tablet and below) */}
            <div className="mobile-nabar-cta tablet_show">
              <a className="button is-white w-inline-block" href="https://app.awesomic.com/" target="_blank">
                {img("/images-static/login-icon-black.svg", "", "button-icon_navbar")}
                <div>Log in</div>
              </a>
              <div className="main-navbar-button-wrapper">
                <a
                    className="button w-variant-d66e8b99-9512-4f1b-0527-c00e632abd95 w-inline-block"
                    button-black=""
                    calendly-link="https://calendly.com/awesomic/demo?hide_gdpr_banner=1"
                    data-wf--button-black-m--variant="base-full-width"
                    href="#"
                >
                  <div className="z-index-1">Book demo</div>
                  {img("/images-static/login-icon-white.svg", "", "button-icon", { height: "20" })}
                  <div className="button-background w-variant-d66e8b99-9512-4f1b-0527-c00e632abd95" />
                </a>
              </div>
              <div className="hiring-page-navbar-main-button max-width-full">
                <a
                    className="button w-variant-d66e8b99-9512-4f1b-0527-c00e632abd95 w-inline-block"
                    button-black=""
                    calendly-link=""
                    data-wf--button-black-m--variant="base-full-width"
                    href="https://careers.awesomic.com/jobs"
                    target="_blank"
                >
                  <div className="z-index-1">Apply now</div>
                  {img("/images-static/login-icon-white.svg", "", "button-icon", { height: "20" })}
                  <div className="button-background w-variant-d66e8b99-9512-4f1b-0527-c00e632abd95" />
                </a>
              </div>
            </div>
          </nav>

          {/* Desktop CTA buttons */}
          <div className="navbar_button-wrapper" id="w-node-_07cb5ef4-0384-fb78-8b8e-242a2068d928-2068d912">
            <div className="navbar_button-wrapper tablet_hide">
              <a
                  className="button is-white w-variant-2c9bf72f-8ee3-90cf-f1f6-7d7020c93aef w-inline-block"
                  calendly-link=""
                  data-wf--button-white--variant="login-button"
                  href="https://app.awesomic.com"
                  target="_blank"
              >
                <div>Log in</div>
                {img("/images-static/login-icon-black.svg", "", "button-icon w-variant-2c9bf72f-8ee3-90cf-f1f6-7d7020c93aef")}
              </a>
              <div className="main-navbar-button-wrapper">
                <a
                    className="button w-inline-block"
                    button-black=""
                    calendly-link="https://calendly.com/awesomic/demo?hide_gdpr_banner=1"
                    data-wf--button-black-m--variant="base"
                    href="#"
                >
                  <div className="z-index-1">Book demo</div>
                  {img("/images-static/faq_two-faces.avif", "", "button-icon", { height: "20" })}
                  <div className="button-background" />
                </a>
              </div>
              <div className="hiring-page-navbar-main-button">
                <a
                    className="button w-inline-block"
                    button-black=""
                    calendly-link=""
                    data-wf--button-black-m--variant="base"
                    href="https://careers.awesomic.com/jobs"
                    target="_blank"
                >
                  <div className="z-index-1">Apply now</div>
                  {img("/images-static/faq_two-faces.avif", "", "button-icon", { height: "20" })}
                  <div className="button-background" />
                </a>
              </div>
            </div>

            {/* Hamburger */}
            <div className="navbar_menu-button w-nav-button">
              <div className="menu-icon">
                <div className="menu-icon2_line-top" />
                <div className="menu-icon2_line-middle">
                  <div className="menu-icon2_line-middle-inner" />
                </div>
                <div className="menu-icon2_line-bottom" />
              </div>
            </div>
          </div>
        </div>

        <div className="navbar-overlay" />
      </div>
  );
}

// ---------------------------------------------------------------------------
// Sub-component — keeps the dropdown link markup DRY
// ---------------------------------------------------------------------------
interface DropdownLinkProps {
  href: string;
  icon: string;
  label: string;
  isNew?: boolean;
}

function DropdownLink({ href, icon, label, isNew }: DropdownLinkProps) {
  return (
      <a className="dropdown-link w-inline-block" href={href}>
        <div className="dropdown_inner-container">
          <img
              src={`${ASSET_BASE}${icon}`}
              alt=""
              className="dropdown-icon"
              loading="lazy"
          />
          <div className="text-13 weight-medium lh-125 text-gray-900">{label}</div>
          {isNew && <div className="nav_new-badge">new</div>}
        </div>
        <img
            src={`${ASSET_BASE}/images/new-page-black.svg`}
            alt=""
            className="dropdown-hover-icon"
            loading="lazy"
        />
      </a>
  );
}