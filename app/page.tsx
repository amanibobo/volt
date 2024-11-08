import Features from "@/components/Features";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import UseCases from "@/components/UseCases";
import Navbar from "@/components/marketing/navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <MaxWidthWrapper>
    <UseCases />
    </MaxWidthWrapper>

    <div className="bg-[#FAFAFA] py-28 md:px-[125px] px-2.5">
    <Features />
    </div>

    <MaxWidthWrapper>
    <HowItWorks />
    </MaxWidthWrapper>

    <div className="bg-[#FAFAFA] py-28 md:px-[125px] px-2.5">
    <FinalCta />
    </div>

    <MaxWidthWrapper className="bg-[#FAFAFA]">
    <Footer />
    </MaxWidthWrapper>
    </>
  );
}
