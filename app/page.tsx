import DemoVid from "@/components/Demo";
import Features from "@/components/Features";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/marketing/navbar";
import { ScrollProvider } from "@/components/ui/scroll-context";
import { ScrollProvider2 } from "@/components/ui/scroll-context2";

export default function Home() {
  return (
    <>
    <ScrollProvider2>
      <Navbar />
      
      <ScrollProvider>
        <Header />
        <MaxWidthWrapper>
          <Features />
        </MaxWidthWrapper>

        <div className="py-28 bg-[#FAFAFA]">
          <DemoVid />
        </div>
      </ScrollProvider>
      <MaxWidthWrapper>
        <HowItWorks />
      </MaxWidthWrapper>

      <div className="bg-[#FAFAFA] py-28 md:px-[125px] px-2.5">
        <FinalCta />
      </div>
      </ScrollProvider2>

      <MaxWidthWrapper className="bg-[#FAFAFA]">
        <Footer />
      </MaxWidthWrapper>
    </>
  );
}
