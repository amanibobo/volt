'use client'

import React, { createContext, useContext, useRef, ReactNode } from 'react'

type ScrollContextType = {
  demoRef2: React.RefObject<HTMLDivElement>
  scrollToDemo2: () => void
}

const ScrollContext2 = createContext<ScrollContextType | undefined>(undefined)

export const ScrollProvider2 = ({ children }: { children: ReactNode }) => {
  const demoRef2 = useRef<HTMLDivElement>(null)

  const scrollToDemo2 = () => {
    demoRef2.current?.scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <ScrollContext2.Provider value={{ demoRef2, scrollToDemo2 }}>
      {children}
    </ScrollContext2.Provider>
  )
}

export const useScroll2 = () => {
  const context = useContext(ScrollContext2)
  if (context === undefined) {
    throw new Error('useScroll must be used within a ScrollProvider')
  }
  return context
}