/**
 * Renders a Phosphor icon for a given role name.
 * Works in both server and client components.
 * Icons: https://phosphoricons.com/?weight=fill
 */

import { getIconForRole } from "@/lib/roleIconMap";

// Phosphor hosts SVGs on their CDN at this pattern:
// https://raw.githubusercontent.com/phosphor-icons/core/main/assets/{weight}/{name}-{weight}.svg
const PHOSPHOR_CDN = "https://raw.githubusercontent.com/phosphor-icons/core/main/assets";

type Props = {
    roleName: string | null | undefined;
    size?: number;
    weight?: "fill" | "regular" | "bold" | "thin" | "light" | "duotone";
    className?: string;
};

export function RoleIcon({ roleName, size = 20, weight = "fill", className }: Props) {
    const iconName = getIconForRole(roleName);
    const src = `${PHOSPHOR_CDN}/${weight}/${iconName}-${weight}.svg`;

    return (
        <img
            alt=""
            height={size}
            width={size}
            loading="lazy"
            src={src}
            className={className}
        />
    );
}