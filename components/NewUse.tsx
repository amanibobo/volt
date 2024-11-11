import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function NewUse() {
  return (
    <div className="w-full max-w-7xl mx-auto py-28 space-y-40">
      {/* Step 1 */}
      <div className="grid gap-16 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#059669]">
            Sourcing renewable energy
          </h2>
          <p className="text-gray-500 text-lg">
            Voltient can identify optimal data center locations for tech
            companies looking to balance power needs, sustainability, and
            cost-efficiency in their AI infrastructure expansion.{" "}
          </p>
        </div>
        <Card className="overflow-hidden relative">
          <CardContent className="p-0">
            <Image
              src="/Frame1.gif?height=600&width=800"
              alt="Code editor preview"
              width={800}
              height={600}
              className="w-full object-cover opacity-75"
            />
          </CardContent>
        </Card>
      </div>

      {/* Step 2 */}
      <div className="grid gap-16 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <Card className="overflow-hidden relative bg-gray-900">
            <CardContent className="p-0">
              <video
                autoPlay
                loop
                muted
                controls
                playsInline
                className="w-full object-cover"
              >
                <source
                  src="/bigvolt.webm?height=600&width=800"
                  type="video/webm"
                />
              </video>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4 order-1 md:order-2">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#059669]">
            Decade-long climate change predictions
          </h2>
          <p className="text-gray-500 text-lg">
            Voltient helps providers quickly work with long-term projections for
            extreme weather, protecting data center infrastructure from future,
            climate-change-exacerbated events.
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="grid gap-16 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#059669]">
            Optimizing real estate for affordable edge
          </h2>
          <p className="text-gray-500 text-lg">
            Due to power constraints for 500MW+ data centers, hyperscalers are
            shifting to distributed edge data centers. Voltient helps them
            identify cost-effective locations with fiber access.
          </p>
        </div>
        <Card className="overflow-hidden relative">
          <CardContent className="p-0">
            <Image
              src="/Frame3.png?height=600&width=800"
              alt="Code editor preview"
              width={800}
              height={600}
              className="w-full object-cover"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
