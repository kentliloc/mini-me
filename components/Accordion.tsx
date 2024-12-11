'use client'

import { cn } from '@/utils/utils'
import Image from 'next/image'
import React, { createContext, useContext, useState, ReactNode, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

type Variant = 'independent' | 'exclusive' // Define variants

export const AccordionContext = createContext<{
  openIds: string[] // Track multiple open IDs
  toggleId: (id: string) => void
  variant: Variant
  currentOpenId: string | null // Track the current open accordion ID
  lastOpen: string
  setLastOpen: (id: string) => void
}>({
  openIds: [],
  toggleId: () => {},
  variant: 'independent',
  currentOpenId: null, // Initialize with null
  lastOpen: '',
  setLastOpen: () => {}
})

type AccordionProviderProps = {
  children: ReactNode
  variant?: Variant // Add the variant prop
}

export const AccordionProvider = ({
  children,
  variant = 'independent' // Default to "independent"
}: AccordionProviderProps) => {
  const [openIds, setOpenIds] = useState<string[]>([])
  const [currentOpenId, setCurrentOpenId] = useState<string | null>(null)
  const [lastOpen, setLastOpen] = useState<string>('')

  const toggleId = (id: string) => {
    setOpenIds((prev) => {
      if (variant === 'exclusive') {
        // In exclusive mode, ensure only one accordion can be open at a time
        const newOpenIds = prev.includes(id) ? [] : [id]
        setCurrentOpenId(newOpenIds[0] || null) // Track the current open ID
        return newOpenIds
      }

      // In independent mode, allow multiple accordions to be open
      const newOpenIds = prev.includes(id) ? prev.filter((openId) => openId !== id) : [...prev, id]

      // Set currentOpenId to the first open accordion if any
      if (newOpenIds.length === 0) {
        setCurrentOpenId(null) // No open accordion, set to null
      } else {
        setCurrentOpenId(newOpenIds[0]) // Set to the first open accordion
      }

      return newOpenIds
    })
  }

  return (
    <AccordionContext.Provider
      value={{ openIds, toggleId, variant, currentOpenId, lastOpen, setLastOpen }}>
      {children}
    </AccordionContext.Provider>
  )
}

type AccordionProps = {
  icon?: string
  id: string
  title: string
  children?: ReactNode
  collapsible?: boolean
}

const Accordion = ({ icon, id, title, children, collapsible = true }: AccordionProps) => {
  const { openIds, toggleId, variant, lastOpen, setLastOpen } = useContext(AccordionContext)
  const isOpen = openIds.includes(id)
  const contentRef = useRef<HTMLDivElement>(null)
  const accordionRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const [statusMessage, setStatusMessage] = useState<string>('')
  const [contentHeight, setContentHeight] = useState<string>('0px')

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        // Get the full scrollHeight of the content
        setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px')
      }
    }

    updateHeight()

    window.addEventListener('resize', updateHeight)

    return () => {
      window.removeEventListener('resize', updateHeight)
    }
  }, [isOpen])

  const handleToggle = () => {
    console.log(lastOpen, '1')
    console.log(id)
    if (collapsible) {
      toggleId(id)

      // Focus the header after toggle
      if (buttonRef.current) {
        buttonRef.current.focus()
      }
      // Update live region message
      setStatusMessage(isOpen ? 'Collapsed' : 'Expanded')

      if (accordionRef.current && variant === 'independent') {
        const accordionTop = accordionRef.current.getBoundingClientRect().top + window.scrollY
        const offset = 90
        window.scrollTo({
          top: accordionTop - offset,
          behavior: 'smooth'
        })
      }
      if (accordionRef.current && variant === 'exclusive') {
        const accordionTop = accordionRef.current.getBoundingClientRect().top + window.scrollY
        const offset = lastOpen != id && lastOpen != '' && lastOpen < id ? 500 : 90
        window.scrollTo({
          top: accordionTop - offset,
          behavior: 'smooth'
        })
      }
      setLastOpen(id)
    }
  }

  return (
    <div
      ref={accordionRef}
      className={cn('group mb-1 w-full bg-white transition-all duration-300 ease-in-out')}>
      <div
        tabIndex={0}
        aria-expanded={isOpen}
        aria-controls={`panel-${id}`}
        id={`accordion-header-${id}`}
        ref={buttonRef}
        onKeyDown={(e) => e.key === 'Enter' && handleToggle()}
        className={cn(
          'relative flex cursor-pointer justify-between px-[26px] py-[18px] font-bold transition-all duration-300 ease-in-out',
          {
            'items-center justify-center bg-beige hover:bg-terracotta': variant === 'independent',
            'bg-terracotta text-white': variant === 'independent' && isOpen,
            'border-b border-terracotta': variant === 'exclusive' && isOpen,
            'border-b border-black': variant === 'exclusive' && !isOpen,
            'cursor-default': !collapsible
          }
        )}
        onClick={handleToggle}>
        <span
          className={cn(
            'flex items-center gap-[16px] pr-5 font-bold leading-[25.2px] text-primary transition-all duration-300 ease-in-out md:pr-0 md:text-[24px] md:leading-[28.8px]',
            { 'text-center text-white': variant === 'independent' && isOpen },
            {
              'text-center text-[21px] font-normal group-hover:text-white':
                variant === 'independent'
            }
          )}>
          <Image
            src={`/assets/icons/${icon}.svg`}
            alt={''}
            tabIndex={-1}
            width={50}
            height={50}
            className={cn({ hidden: variant === 'independent' })}
          />
          {title}
        </span>
        {variant === 'exclusive' ? (
          <Image
            src={`/assets/dropdown-icon.svg`}
            alt={`accordion`}
            tabIndex={-1}
            width={20}
            height={14}
            className={cn('transition-all duration-300 ease-in-out', {
              'rotate-180': isOpen,
              hidden: icon === 'sports' || icon === 'STD'
            })}
          />
        ) : (
          <FontAwesomeIcon
            icon={faChevronDown}
            className={cn(
              `absolute right-[16px] ml-10 transform transition-transform duration-300 ease-in-out group-hover:text-white md:relative`,
              {
                'rotate-180': isOpen
              }
            )}
          />
        )}
      </div>

      <div
        ref={contentRef}
        style={{
          maxHeight: contentHeight
        }}
        className={`w-full overflow-hidden transition-[max-height] duration-700 ease-in-out`}>
        <div
          className={`flex ${isOpen ? 'mb-0 mt-0' : '-mb-10 -mt-10'} w-full flex-col items-center justify-between bg-white py-[50px] text-primary transition-all duration-500`}>
          {children}
        </div>
      </div>
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {statusMessage}
      </div>
    </div>
  )
}

export default Accordion
