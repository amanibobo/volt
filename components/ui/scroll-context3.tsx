'use client'

import React, { createContext, useContext, useRef, ReactNode } from 'react'

type ScrollContextType = {
  demoRef3: React.RefObject<HTMLDivElement>
  scrollToDemo3: () => void
}

const ScrollContext3 = createContext<ScrollContextType | undefined>(undefined)

export const ScrollProvider3 = ({ children }: { children: ReactNode }) => {
  const demoRef3 = useRef<HTMLDivElement>(null)

  const scrollToDemo3 = () => {
    demoRef3.current?.scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <ScrollContext3.Provider value={{ demoRef3, scrollToDemo3 }}>
      {children}
    </ScrollContext3.Provider>
  )
}

export const useScroll3 = () => {
  const context = useContext(ScrollContext3)
  if (context === undefined) {
    throw new Error('useScroll must be used within a ScrollProvider')
  }
  return context
}