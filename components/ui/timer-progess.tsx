"use client"

import * as React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"

export default function TimerProgess() {
  const [activeAccordion, setActiveAccordion] = React.useState("item-0")
  const [progress, setProgress] = React.useState(0)
  
  const accordionData = [
    {
      id: "item-0",
      title: "Hyperscale Data Center for a Tech Giant",
      content: "Voltient can identify optimal data center locations for tech companies looking to balance power needs, sustainability, and cost-efficiency in their cloud infrastructure expansion.",
      image: "/image11.svg"
    },
    {
      id: "item-1",
      title: "Sustainable Edge Computing for IoT Services Provider",
      content: "Voltient helps IoT providers establish edge data centers in urban areas, enabling low-latency service for smart city applications while leveraging local renewable energy sources.",
      image: "/image12.svg"
    },
    {
      id: "item-2",
      title: "Disaster-Resilient Data Centers for Financial Services",
      content: "Voltient enables financial institutions to select disaster-resilient data center locations, ensuring operational continuity and compliance in extreme weather or disaster-prone areas.",
      image: "/image13.svg"
    }
  ]

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          // Move to next accordion
          const currentIndex = accordionData.findIndex(item => item.id === activeAccordion)
          const nextIndex = (currentIndex + 1) % accordionData.length
          setActiveAccordion(accordionData[nextIndex].id)
          return 0
        }
        return oldProgress + 2 // Increment by 2 to complete in 5 seconds (100 / 2 * 100ms = 5000ms)
      })
    }, 100)

    return () => clearInterval(timer)
  }, [activeAccordion, progress])

  return (
    <div className="w-full mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-8">Use Cases To Automate at Scale</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Accordion
            type="single"
            value={activeAccordion}
            onValueChange={(value) => {
              setActiveAccordion(value);
              setProgress(0); // Reset progress when a new accordion is selected
            }}
            className="w-full"
          >
            {accordionData.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="text-xl font-semibold">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p>{item.content}</p>
                    {activeAccordion === item.id && (
                        <Progress value={progress} className="h-1 [&>div]:bg-[#0EA5E9]" />                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="relative aspect-[4/3] bg-muted rounded-lg overflow-hidden">
          <Image
            src={accordionData.find(item => item.id === activeAccordion)?.image || ""}
            alt="Accordion illustration"
            fill
            className="object-cover transition-opacity duration-300"
          />
        </div>
      </div>
    </div>
  )
}