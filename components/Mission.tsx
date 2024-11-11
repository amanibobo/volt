import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface OpenSections {
  aiScale: boolean;
  edgeComputing: boolean;
  solutions: boolean;
}

interface AccordionItemProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  isOpen,
  onToggle,
  children,
}) => (
  <div className="border border-gray-200 rounded-lg mb-2">
    <button
      onClick={onToggle}
      className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors"
    >
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      {isOpen ? (
        <Minus className="w-5 h-5 text-gray-600" />
      ) : (
        <Plus className="w-5 h-5 text-gray-600" />
      )}
    </button>
    {isOpen && (
      <div className="p-4 bg-white border-t border-gray-200">{children}</div>
    )}
  </div>
);

const MissionAccordion: React.FC = () => {
  const [openSections, setOpenSections] = useState<OpenSections>({
    aiScale: false,
    edgeComputing: false,
    solutions: false,
  });

  const toggleSection = (section: keyof OpenSections): void => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="p-4">
      {/* Title and Description Section */}
      <div className="mb-8">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            Mission Statement
          </h2>
        </div>
        <p className="text-gray-700 leading-relaxed text-lg">
          Voltient empowers the future of artificial intelligence by
          strategically optimizing data center locations to accelerate
          sustainable grid decarbonization. As AI reshapes our world, data
          centers have become the backbone of technological progress and are
          projected to be the most energy-intensive infrastructure segment in
          the coming decades.
        </p>
      </div>

      {/* Critical Challenges Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Critical Challenges
        </h2>

        <AccordionItem
          title="Power for AI Scale"
          isOpen={openSections.aiScale}
          onToggle={() => toggleSection("aiScale")}
        >
          <p className="text-gray-700">
            The development of next-generation AI models (beyond GPT-4 scale) is
            primarily constrained by available computing power and energy
            capacity. Securing sustainable power sources is crucial for
            advancing AI capabilities.
          </p>
        </AccordionItem>

        <AccordionItem
          title="Edge Computing Proximity"
          isOpen={openSections.edgeComputing}
          onToggle={() => toggleSection("edgeComputing")}
        >
          <p className="text-gray-700">
            The future of AI applications—from autonomous vehicles to
            robotics—depends on low-latency inference at the edge. This requires
            a distributed network of data centers strategically positioned near
            end users and use cases.
          </p>
        </AccordionItem>
      </div>

      {/* Solutions Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Approach
        </h2>
        <AccordionItem
          title="Voltient Solutions"
          isOpen={openSections.solutions}
          onToggle={() => toggleSection("solutions")}
        >
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              Strategic site selection optimized for power availability and grid
              impact
            </li>
            <li>Comprehensive risk evaluation and mitigation strategies</li>
            <li>
              Accelerated deployment timelines through streamlined processes
            </li>
            <li>
              Integration of renewable energy sources to support grid
              decarbonization
            </li>
            <li>
              Strategic positioning of edge computing facilities to enable
              next-generation AI applications
            </li>
          </ul>
          <p className="mt-4 text-gray-700">
            By solving the power and location challenges facing AI
            infrastructure, Voltient is laying the groundwork for a more
            sustainable and capable AI-powered future.
          </p>
        </AccordionItem>
      </div>
    </div>
  );
};

export default MissionAccordion;
