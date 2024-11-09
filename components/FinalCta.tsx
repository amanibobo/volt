import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function FinalCta() {
  return (
    <Card className="w-full border-2 border-dashed bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <CardContent className="flex flex-col items-center text-center gap-8 p-12">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight">Ready to Elevate Your Data Center Strategy?</h2>
          <p className="text-muted-foreground">
          Get a customized solution tailored to your data center needs. Join the forefront of sustainable AI-powered infrastructure.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button className="h-10 gap-2 bg-[#059669] hover:bg-[#047857] rounded-3xl">
          Start Optimizing Today
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button className="rounded-3xl h-10" variant="outline">Demo</Button>
        </div>
      </CardContent>
    </Card>
  )
}