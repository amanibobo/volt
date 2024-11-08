"use client"

import { cn } from "@/lib/utils";
import { ReactNode } from 'react';

interface MaxWidthWrapperProps {
  className?: string;
  children: ReactNode;
}
export default function MaxWidthWrapper({ className, children }: MaxWidthWrapperProps) {
  return (
    <div className={cn("mx-auto w-full max-w-screen px-2.5 md:px-[125px]", className)}>
          {children}
        </div>
  );
}