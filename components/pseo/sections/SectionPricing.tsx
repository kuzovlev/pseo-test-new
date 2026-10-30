import type {PseoPageData} from "@/lib/pseo-types";
import PricingBlock from "@/components/pseo/pricing/PricingBlock";

// The pricing block from awesomic.com/pricing (Agentic plans, expert plans
// and the summary card), same on every /hire/* page. It sits in the grey
// rounded section the old pricing used, so the next section still overlaps
// it the same way. hd3-page--v6 puts the homepage grass behind the summary
// card, and #hire-pricing carries the /pricing phone tweaks
// (hire-pricing.css). No Supabase fields here.
export function SectionPricing(_props: { data?: PseoPageData }) {
    return (
        <div id="hire-pricing" className="background-gray-100 section-radius hd3-page--v2 hd3-page--v6">
            <PricingBlock includesLight/>
        </div>
    );
}
