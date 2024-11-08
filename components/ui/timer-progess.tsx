"use client";

import * as React from "react";
import Image from "next/image";
import { Heading } from "../heading";

export default function UseCases() {
  const [activeCase, setActiveCase] = React.useState("case-0");
  const caseData = [
    {
      id: "case-0",
      title: "Hyperscale Data Center for a Tech Giant",
      content:
        "Voltient can identify optimal data center locations for tech companies looking to balance power needs, sustainability, and cost-efficiency in their cloud infrastructure expansion.",
      image: "/image11.svg",
    },
    {
      id: "case-1",
      title: "Sustainable Edge Computing for IoT Services Provider",
      content:
        "Voltient helps IoT providers establish edge data centers in urban areas, enabling low-latency service for smart city applications while leveraging local renewable energy sources.",
      image: "/image12.svg",
    },
    {
      id: "case-2",
      title: "Disaster-Resilient Data Centers for Financial Services",
      content:
        "Voltient enables financial institutions to select disaster-resilient data center locations, ensuring operational continuity and compliance in extreme weather or disaster-prone areas.",
      image: "/image13.svg",
    },
  ];

  return (
    <div className="w-full mx-auto">
       <div>
          <h2 className="text-center text-base/7 font-semibold text-[#059669]">
            Use Cases
          </h2>
          <Heading className="text-3xl font-semibold text-center mb-16"> Use Cases of Voltient</Heading>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          {caseData.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveCase(item.id)}
              className={`cursor-pointer transition-all duration-300 rounded-lg hover:bg-black/[0.02]
                ${activeCase === item.id ? 'bg-black/5 p-4' : 'p-2'}`}
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>
        <div className="relative md:col-span-2 bg-muted rounded-lg overflow-hidden">
          <Image
            src={caseData.find((item) => item.id === activeCase)?.image || ""}
            alt="Use case illustration"
            fill
            className="object-cover transition-opacity duration-300"
          />
        </div>
      </div>
    </div>
  );
}