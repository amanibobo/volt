"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useScroll } from "./ui/scroll-context";

export default function Header() {
  const { scrollToDemo } = useScroll();

  return (        
        <div className="relative h-full w-full bg-[#FAFAFA] flex min-h-screen flex-col pt-14 md:pt-24">
        <div className=" h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
          <main className="flex-1 px-4 sm:px-6 lg:px-[125px]">
            <section className="w-full py-12 md:py-24 lg:py-24">
              <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-5">
                    <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                      Powering the next era
                      <br />
                      of AI-driven data centers.
                    </h1>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      Optimize your data center locations with advanced AI
                      analytics for a sustainable, high-performance future.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 min-[400px]:flex-row">
                    <Button className="h-10 gap-2 bg-[#059669] hover:bg-[#047857] rounded-3xl">
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
              </div>
            </section>
          </main>
          <div className="flex justify-center px-4 sm:px-6 lg:px-[125px] pb-12">
            <Image
              src={"/voltient-demo-compc.png"}
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
