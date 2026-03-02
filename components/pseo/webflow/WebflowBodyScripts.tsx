"use client";

import { useEffect } from "react";

const CHILI_BASE_URL = "https://awesomic.chilipiper.com/round-robin/awesomic-demo-call";
const DESIGN_GUIDE_WEBHOOK = "https://hook.us1.make.com/z68a4hbn17xb6hteab91pwnkv2mtyy56";

const TRACKING_PREFIXES = ["utm_", "hsa_", "gclid", "fbclid", "msclkid"];

// Form IDs that should open ChiliPiper with the submitted email
const EMAIL_FORM_IDS = new Set([
  "cta-email",
  "wf-form-cta-email",
  "wf-form-features-form",
  "annual",
  "ann-monthly",
  "monthly",
  "wf-form-webflow-cta-form",
]);

export function WebflowBodyScripts() {
  useEffect(() => {
    // -------------------------------------------------------------------------
    // Helpers
    // -------------------------------------------------------------------------
    function openChili(src: string) {
      const popup = document.querySelector<HTMLElement>(".booking-popup");
      const iframe = document.querySelector<HTMLIFrameElement>(".chili-frame");
      if (!popup || !iframe) return;
      iframe.src = src;
      popup.style.display = "block";
      popup.style.opacity = "1";
    }

    function closeChili() {
      const popup = document.querySelector<HTMLElement>(".booking-popup");
      if (!popup) return;
      popup.style.opacity = "0";
      popup.style.display = "none";
    }

    function chiliUrlWithPage() {
      const utmPage = encodeURIComponent(
          window.location.pathname + window.location.search
      );
      return `${CHILI_BASE_URL}?utm_term=${utmPage}`;
    }

    function captureTrackingParams(): Record<string, string> {
      const params: Record<string, string> = {};
      new URLSearchParams(window.location.search).forEach((value, key) => {
        if (TRACKING_PREFIXES.some((p) => key.startsWith(p))) {
          params[key] = value;
        }
      });
      return params;
    }

    // -------------------------------------------------------------------------
    // ChiliPiper popup — close handlers
    // -------------------------------------------------------------------------
    const popup = document.querySelector<HTMLElement>(".booking-popup");
    const iframe = document.querySelector<HTMLIFrameElement>(".chili-frame");
    const closeBtn = document.querySelector<HTMLElement>(".chili-popup_close");

    function onCloseClick() {
      closeChili();
    }
    function onPopupClick(e: Event) {
      if (iframe && !iframe.contains(e.target as Node)) closeChili();
    }

    closeBtn?.addEventListener("click", onCloseClick);
    popup?.addEventListener("click", onPopupClick);

    // -------------------------------------------------------------------------
    // calendly-link buttons → open ChiliPiper
    // -------------------------------------------------------------------------
    const calendlyButtons = document.querySelectorAll<HTMLElement>("[calendly-link]");

    function onCalendlyClick(this: HTMLElement, e: Event) {
      const url = this.getAttribute("calendly-link")?.trim();
      if (!url) return;
      e.preventDefault();
      openChili(chiliUrlWithPage());
    }

    calendlyButtons.forEach((btn) => btn.addEventListener("click", onCalendlyClick));

    // -------------------------------------------------------------------------
    // Form submit → ChiliPiper or webhook
    // -------------------------------------------------------------------------
    function handleCustomFormLogic(form: HTMLFormElement): boolean {
      const { id } = form;

      // Hero form with checkboxes
      if (id === "wf-form-Home-Hero-Form") {
        const checked = form.querySelectorAll<HTMLInputElement>("input[type='checkbox']:checked");
        const selectedNames = Array.from(checked)
            .map((cb) => cb.getAttribute("data-name") || cb.name || cb.id)
            .filter(Boolean)
            .join(", ");
        const email = form.querySelector<HTMLInputElement>("input[data-name='Email']")?.value ?? "";
        openChili(
            `${CHILI_BASE_URL}?hidden_field=${encodeURIComponent(selectedNames)}&id=${encodeURIComponent(email)}`
        );
        return true;
      }

      // Standard email forms
      if (EMAIL_FORM_IDS.has(id)) {
        const email = form.querySelector<HTMLInputElement>("input[type='email']")?.value ?? "";
        openChili(`${CHILI_BASE_URL}?id=${encodeURIComponent(email)}`);
        return true;
      }

      // Design guide forms → webhook
      if (id === "wf-form-design-guide-form" || id === "landing-design-guide-footer") {
        const email = form.querySelector<HTMLInputElement>("input[type='email']")?.value ?? "";
        const formOrigin = id === "wf-form-design-guide-form" ? "top" : "footer";

        if (!email) {
          console.error("No email provided.");
          return false;
        }

        fetch(DESIGN_GUIDE_WEBHOOK, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, formOrigin, ...captureTrackingParams() }),
        })
            .then((res) => {
              if (!res.ok) { console.error("Failed to send email."); return; }
              const toast = document.querySelector<HTMLElement>(".success-toast");
              if (!toast) return;
              toast.style.top = "65px";
              let hidden = false;
              document.querySelector("[close-toast]")?.addEventListener("click", () => {
                toast.style.top = "-200px";
                hidden = true;
              });
              setTimeout(() => {
                if (!hidden) toast.style.top = "-200px";
              }, 5000);
            })
            .catch((err) => console.error("Error:", err));

        return true;
      }

      return false;
    }

    function attachFormHandlers() {
      document.querySelectorAll<HTMLFormElement>("form").forEach((form) => {
        form.addEventListener("submit", function (e) {
          e.preventDefault();
          const handled = handleCustomFormLogic(form);
          if (!handled) {
            console.log("Form submitted but no custom logic defined:", form.id);
          }
        });
      });
    }

    // Option B: use Webflow.push if available, otherwise attach directly
    if (typeof window !== "undefined") {
      if ((window as any).Webflow) {
        (window as any).Webflow.push(attachFormHandlers);
      } else {
        attachFormHandlers();
      }
    }

    // -------------------------------------------------------------------------
    // Mobile menu — lock body scroll when open
    // -------------------------------------------------------------------------
    const menuButton = document.querySelector<HTMLElement>(".navbar_menu-button");

    function updateBodyOverflow() {
      if (window.innerWidth >= 992) {
        document.body.style.overflow = "visible";
        return;
      }
      document.body.style.overflow = menuButton?.classList.contains("w--open")
          ? "hidden"
          : "visible";
    }

    function onMenuClick() {
      setTimeout(updateBodyOverflow, 50);
    }

    menuButton?.addEventListener("click", onMenuClick);
    window.addEventListener("resize", updateBodyOverflow);
    updateBodyOverflow();

    // -------------------------------------------------------------------------
    // Cleanup
    // -------------------------------------------------------------------------
    return () => {
      closeBtn?.removeEventListener("click", onCloseClick);
      popup?.removeEventListener("click", onPopupClick);
      calendlyButtons.forEach((btn) => btn.removeEventListener("click", onCalendlyClick));
      menuButton?.removeEventListener("click", onMenuClick);
      window.removeEventListener("resize", updateBodyOverflow);
    };
  }, []);

  return null; // renders nothing — side-effects only
}