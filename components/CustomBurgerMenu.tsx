'use client'

import { useState } from 'react'
import { cn } from '@/utils/utils'
import Image from 'next/image'
import HeaderLinks from './HeaderLinks'

const CustomBurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const toggleMenu = () => {
    if (!isOpen) {
      // When opening the menu, make it visible immediately
      setIsVisible(true)
      setIsOpen(true)
    } else {
      // When closing, wait for the animation to complete before hiding
      setIsOpen(false)
      setTimeout(() => setIsVisible(false), 300) // Match `transition-duration`
    }
  }

  return (
    <>
      <button
        onClick={ toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        className="flex h-full cursor-pointer flex-col items-center justify-center">
        <div
          className={cn(
            'absolute top-7 transition-all duration-300',
            isOpen && 'top-[38.5px] rotate-45'
          )}>
          <Image src={'/assets/line.svg'} width={40} height={4} alt="" />
        </div>
        <div className={cn('transition-all duration-300', isOpen && 'rotate-45 opacity-0')}>
          <Image src={'/assets/line.svg'} width={40} height={4} alt="" />
        </div>
        <div
          className={cn(
            'absolute bottom-7 transition-all duration-300',
            isOpen && 'bottom-[37px] -rotate-45'
          )}>
          <Image src={'/assets/line.svg'} width={40} height={4} alt="" />
        </div>
      </button>

      <div
        aria-hidden={!isOpen}
        className={cn(
          'absolute right-0 mt-[277.5px] w-full origin-top transform bg-white px-[25px] py-8 transition-transform duration-300',
          isOpen
            ? 'visible scale-y-100 opacity-100'
            : ` ${!isVisible ? 'invisible' : ''} scale-y-0 opacity-0`
        )}>
        <HeaderLinks variant="mobile" />
      </div>
    </>
  )
}

export default CustomBurgerMenu
