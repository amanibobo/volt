'use client'

import { HeroVideoDialogDemoTopInBottomOut } from "./MagicVersion";
import { useScroll } from "./ui/scroll-context";

export default function DemoVid() {
  const { demoRef } = useScroll()

  return (
    <>
      <div id="demo" className="w-full mx-auto">
        <div className="mb-16 flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
          See Voltient in action
          </h2>
          <p ref={demoRef} className="mx-auto max-w-4xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Optimize your data center locations with advanced AI analytics for a
            sustainable, high-performance future.          
            </p>
        </div>
         
        </div>

        <div className="flex justify-center px-4 sm:px-6 lg:px-[125px]">
         <HeroVideoDialogDemoTopInBottomOut />
        </div>
      </div>
    </>
  );
}
