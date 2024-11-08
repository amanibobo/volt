"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                <Button className="h-10 gap-2 bg-[#059669] hover:bg-[#0d7cb0] rounded-3xl">
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
        <Image
          src="/placeholder-vid.svg"
          alt="Voltiant Logo"
          width={1120}
          height={1080}
          quality={100}
          className="rounded-3xl border w-full h-auto"
          priority
        />
      </div>
    </div>
  );
}
