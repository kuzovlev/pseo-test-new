import { withAssetBase } from "@/lib/pseo-assets";
import type { PseoPageData } from "@/lib/pseo-types";

const HTML = `
<section>
  ...
  <div class="tablet_max-width-600 align-center">
    <h1 class="pseo_h1">__HERO_H1__</h1>
  </div>
  ...
  <div class="pseo-hero-text">__HERO_SUBTITLE__</div>
  ...
</section>
`;

function escapeHtml(input: string) {
  return input
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
}

export function HeroSection(props: { data?: PseoPageData }) {
  const h1 = escapeHtml(props.data?.hero_h1 ?? "Hire product designer for clear product flows");
  const subtitle = escapeHtml(
      props.data?.hero_subtitle ??
      "Get a vetted product designer who improves usability, designs production-ready, and helps your team ship faster — matched to your product stage, priorities, and workflow."
  );

  const html = withAssetBase(HTML)
      .replace("__HERO_H1__", h1)
      .replace("__HERO_SUBTITLE__", subtitle);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}