import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function Header() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAFA]">
      <header className="sticky top-0 z-50 bg-[#ffffff] border-b">
        <div className="mx-auto px-16">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link className="flex items-center justify-center mr-6" href="#">
                <Image
                src="/voltiant-lockup-optimized.svg"
                alt="Voltiant Logo"
                width={120}
                height={40}
                priority
              />
            </Link>
            <nav className="flex gap-6">
              <Button
                variant="ghost"
                className="text-sm font-medium text-gray-600 hover:bg-black/5"
              >
                Features
              </Button>
              <Button
                variant="ghost"
                className="text-sm font-medium text-gray-600 hover:bg-black/5"
              >
                Pricing
              </Button>
              <Button
                variant="ghost"
                className="text-sm font-medium text-gray-600 hover:bg-black/5"
              >
                Blogs
              </Button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant={"outline"}>Log in</Button>
            <Button className="bg-[#0EA5E9] hover:bg-[#0d7cb0]">Sign up</Button>
          </div>
        </div>
        </div>
      </header>
      <main className="flex-1 px-16">
        <section className="w-full py-12 md:py-24 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-5">
                <h1 className="text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl">
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
                <Button className="h-10 gap-2 bg-[#0EA5E9] hover:bg-[#0d7cb0] rounded-3xl">
                  Start for Free
                </Button>
                <Button className="rounded-3xl h-10" variant="outline">Demo Video</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="flex justify-center px-16 pb-12">
        <Image
          src="/placeholder-vid.svg"
          alt="Voltiant Logo"
          width={1120}
          height={1080}
          quality={100}
          className="rounded-3xl border"
          priority
        />
      </div>
    </div>
  );
}
