"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useScroll } from "./ui/scroll-context";
import { useScroll2 } from "./ui/scroll-context2";

export default function Header() {
  const { scrollToDemo } = useScroll();
  const { scrollToDemo2 } = useScroll2();

  return (        
    <div className="relative w-full bg-[#FAFAFA] flex min-h-screen flex-col pt-14 md:pt-12 overflow-hidden">
      <div className="w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <main className="flex-1 px-4 sm:px-6 lg:px-8 xl:px-16">
          <section className="w-full py-12 md:py-24 lg:py-24">
            <div className="container mx-auto">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-5">
                  <h1 className="text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                    Powering the next era
                    <br />
                    of AI-driven data centers.
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl">
                    Optimize your data center locations with advanced AI
                    analytics for a sustainable, high-performance future.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button 
                    onClick={scrollToDemo2}
                    className="h-10 gap-2 bg-[#059669] hover:bg-[#047857] rounded-3xl"
                  >
                    Book a Demo
                  </Button>
                  <Button
                    onClick={scrollToDemo}
                    className="rounded-3xl h-10"
                    variant="outline"
                  >
                    See how it works
                  </Button>
                </div>
              </div>
              <div className="mt-20 flex flex-wrap justify-center items-center gap-8 sm:gap-14">
  <Image
    src="/edgeer.png"
    alt="React"
    width={200}
    height={5}
    className="opacity-80 grayscale w-auto h-auto max-w-[160px] sm:max-w-[200px]"
  />
  <Image
    src="/duoooo.png"
    alt="TypeScript"
    width={70}
    height={20}
    className="opacity-80 grayscale w-auto h-auto max-w-[70px] sm:max-w-[90px]"
  />
</div>
            </div>
          </section>
        </main>
        <div className="flex justify-center px-4 sm:px-6 lg:px-8 xl:px-16 pb-12">
          <Image
            src="/voltient-demo-compc.png"
            alt="b"
            width={1080}
            height={1080}
            quality={100}
            className="rounded-xl border w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}
