export const ASSET_BASE =
  process.env.NEXT_PUBLIC_PSEO_ASSET_BASE?.replace(/\/$/, "") || "";

export function withAssetBase(html: string) {
  if (!ASSET_BASE) return html.replaceAll("__ASSET_BASE__", "");
  return html.replaceAll("__ASSET_BASE__", ASSET_BASE);
}
