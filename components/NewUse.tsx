import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"

export default function NewUse() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 space-y-40">
      {/* Step 1 */}
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Sourcing renewable energy
          </h2>
          <p className="text-gray-500 text-lg">
          Voltient can identify optimal data center locations for tech companies looking to balance power needs, sustainability, and cost-efficiency in their cloud infrastructure expansion.
          </p>
          
        </div>
        <Card className="overflow-hidden relative bg-gray-900">
          <CardContent className="p-0">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Code editor preview"
              width={800}
              height={600}
              className="w-full object-cover opacity-75"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full bg-primary/90 p-4 text-white">
                <Play className="h-8 w-8" />
              </div>
            </div>
          </CardContent>
        </Card>
       
      </div>

      {/* Step 2 */}
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div className="order-2 md:order-1">
          <Card className="overflow-hidden relative bg-gray-900">
            <CardContent className="p-0">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Customization preview"
                width={800}
                height={600}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full bg-primary/90 p-4 text-white">
                  <Play className="h-8 w-8" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4 order-1 md:order-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Decade-long climate change predictions
          </h2>
          <p className="text-gray-500 text-lg">
          Voltient helps IoT providers establish edge data centers in urban areas, enabling low-latency service for smart city applications while leveraging local renewable energy sources.
          </p>
          
        </div>
      </div>

      {/* Step 3 */}
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Optimizing real estate for affordable edge
          </h2>
          <p className="text-gray-500 text-lg">
          Voltient enables financial institutions to select disaster-resilient data center locations, ensuring operational continuity and compliance in extreme weather or disaster-prone areas.
          </p>
         
        </div>
        <Card className="overflow-hidden relative bg-gray-900">
          <CardContent className="p-0">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Code editor preview"
              width={800}
              height={600}
              className="w-full object-cover opacity-75"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full bg-primary/90 p-4 text-white">
                <Play className="h-8 w-8" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}