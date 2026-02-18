import type { PseoPageData } from "@/lib/pseo-types";
import { Navbar } from "./sections/Navbar";
import { HeroSection } from "./sections/HeroSection";
import { SectionGray1 } from "./sections/SectionGray1";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { SectionGray2 } from "./sections/SectionGray2";
import { SectionWhite1 } from "./sections/SectionWhite1";
import { CtaSection } from "./sections/CtaSection";
import { SectionWhite2 } from "./sections/SectionWhite2";
import { SectionGray3 } from "./sections/SectionGray3";
import { SectionWhite3 } from "./sections/SectionWhite3";
import { FooterSection } from "./sections/FooterSection";

export function PseoTemplate({ data }: { data: PseoPageData }) {
  return (
      <div className="page-wrapper">
        <div className="main-wrapper">
          <Navbar data={data} />
          <HeroSection data={data} />
          <SectionGray1 data={data} />
          <HowItWorksSection data={data} />
          <SectionGray2 data={data} />
          <SectionWhite1 data={data} />
          <CtaSection data={data} />
          <SectionWhite2 data={data} />
          <SectionGray3 data={data} />
          <SectionWhite3 data={data} />
          <FooterSection data={data} />
        </div>
      </div>
  );
}