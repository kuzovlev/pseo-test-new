import type { PseoPageData } from "@/lib/pseo-types";
import { Navbar } from "./sections/Navbar";
import HeroSection from "./sections/HeroSection";
import { SectionPricing } from "./sections/SectionPricing";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { SectionTestimonials } from "./sections/SectionTestimonials";
import { WhyAwesomic } from "./sections/WhyAwesomic";
import { CtaSection } from "./sections/CtaSection";
import { FaqSection } from "./sections/FaqSection";
import { SectionRelatedRoles } from "./sections/SectionRelatedRoles";
import { SectionPost } from "./sections/SectionPost";
import { FooterSection } from "./sections/FooterSection";
import { SectionRtb } from "@/components/pseo/sections/SectionRtb";

export function PseoTemplate({ data }: { data: PseoPageData }) {
  return (
      <div className="page-wrapper">
        <div className="main-wrapper">
          <Navbar data={data} />
          <HeroSection data={data} />
          <SectionPricing data={data} />
          <HowItWorksSection data={data} />
          <SectionTestimonials data={data} />
          <WhyAwesomic data={data} />
          <CtaSection data={data} />
          <SectionRtb data={data} />
          <FaqSection data={data} />
          <SectionRelatedRoles data={data} />
          <SectionPost data={data} />
          <FooterSection data={data} />
        </div>
      </div>
  );
}