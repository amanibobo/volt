"use client"

import { useScroll2 } from "./ui/scroll-context2";

export default function FinalCta() {

  const { demoRef2 } = useScroll2()


  return (
    <>
      <div ref={demoRef2} className="flex flex-col items-center gap-16 sm:gap-20">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            Schedule for a Demo
          </h2>
        </div>

        <div className="aspect-[16/9] w-full overflow-hidden rounded-lg shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://calendly.com/amanibobo1/voltient-demo-1"
            title="Calendly Scheduling Page"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}
