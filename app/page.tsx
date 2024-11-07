import Features from "@/components/Features";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import UseCases from "@/components/UseCases";

export default function Home() {
  return (
    <>
    <Header />
    <MaxWidthWrapper>
    <UseCases />
    </MaxWidthWrapper>

    <div className="py-28 md:px-16 px-2.5">
    <Features />
    </div>

    <MaxWidthWrapper>
    <HowItWorks />
    </MaxWidthWrapper>

    <div className="bg-[#FAFAFA] py-28 md:px-16 px-2.5">
    <FinalCta />
    </div>

    <MaxWidthWrapper className="bg-[#FAFAFA]">
    <Footer />
    </MaxWidthWrapper>
    </>
  );
}
