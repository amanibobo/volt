"use client";

import { Button } from "@/components/ui/button";

export default function Header() {

  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAFA] pt-14 md:pt-24">
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
                  Optimize your data center locations with advanced AI analytics
                  for a sustainable, high-performance future.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Button className="h-10 gap-2 bg-[#059669] hover:bg-[#047857] rounded-3xl">
                  Start for Free
                </Button>
                <Button className="rounded-3xl h-10" variant="outline">
                  Demo Video
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="flex justify-center px-4 sm:px-6 lg:px-[125px] pb-12">
        <video controls playsInline className="h-full w-full rounded-lg object-cover">
          <source src="/voltient-demo-vid.webm" type="video/webm"/>
        </video>
      </div>
    </div>
  );
}
