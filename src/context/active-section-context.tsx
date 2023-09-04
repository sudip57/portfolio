import { createContext, useContext, useState } from 'react'
import React from 'react'
import type { SectionName } from '../libs/types'

type ActiveSectionContextProviderPros = {
  children: React.ReactNode
}
type ActiveContextType = {
  active: SectionName
  setActive: React.Dispatch<React.SetStateAction<SectionName>>
  timeOfLastClick: number
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = createContext<ActiveContextType | null>(
  null,
)

const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionContextProviderPros) => {
  const [active, setActive] = useState<SectionName>('Home')
  const [timeOfLastClick, setTimeOfLastClick] = useState(0)
  return (
    <ActiveSectionContext.Provider
      value={{ active, setActive, timeOfLastClick, setTimeOfLastClick }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext)
  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within an Active section provider',
    )
  }
  return context
}

export default ActiveSectionContextProvider
