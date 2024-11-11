'use client'

import React, { createContext, useContext, useRef, ReactNode } from 'react'

type ScrollContextType = {
  demoRef: React.RefObject<HTMLDivElement>
  scrollToDemo: () => void
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined)

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const demoRef = useRef<HTMLDivElement>(null)

  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <ScrollContext.Provider value={{ demoRef, scrollToDemo }}>
      {children}
    </ScrollContext.Provider>
  )
}

export const useScroll = () => {
  const context = useContext(ScrollContext)
  if (context === undefined) {
    throw new Error('useScroll must be used within a ScrollProvider')
  }
  return context
}