'use client'

import React, { useState } from 'react'
import { cn } from '@/utils/utils'
import Image from 'next/image'

const QuoteCarousel = ({ quotes }: QuoteCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex === quotes.length - 1 ? 0 : prevIndex + 1))
  }

  const prevQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? quotes.length - 1 : prevIndex - 1))
  }

  return (
    <div className="mx-auto w-full max-w-[1170px] overflow-hidden text-white md:relative">
      {/* Quotes Container with aria-live="assertive" to announce changes immediately */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        aria-live="assertive" // Ensures immediate announcement of quote change
      >
        {quotes.map(({ quote, citation }, index) => (
          <div
            key={index}
            tabIndex={currentIndex === index ? 0 : -1} // Focus the current quote for screen readers
            className="flex w-full flex-shrink-0 items-center justify-center"
            aria-hidden={currentIndex !== index ? 'true' : 'false'} // Hide non-visible quotes from screen readers
          >
            <div className="mb-[60px] flex max-w-[300px] flex-col items-center gap-4 px-4 text-center sm:gap-6 md:max-w-[750px]">
              <div
                className="blockquote text-lg sm:text-xl md:text-2xl"
                aria-hidden={currentIndex !== index ? 'true' : 'false'}>
                {quote}
              </div>
              <div
                className="citation text-sm sm:text-base md:text-lg"
                aria-hidden={currentIndex !== index ? 'true' : 'false'}>
                {citation}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute right-0 top-[50%] flex w-full items-center justify-between px-0 md:inset-0">
        <button onClick={prevQuote} className="p-2 text-white">
          <Image
            src={'/assets/next-icon.svg'}
            alt="previous"
            width={23}
            height={48}
            className="h-[24px] md:h-[48px]"
          />
        </button>
        <button onClick={nextQuote} className="p-2 text-white">
          <Image
            src={'/assets/next-icon.svg'}
            alt="next"
            width={23}
            height={48}
            className="h-[24px] rotate-180 md:h-[48px]"
          />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-[48px] left-1/2 flex -translate-x-1/2 transform space-x-2 md:bottom-4">
        {quotes.map((_, index) => (
          <div
            key={index}
            className={cn(
              'h-2 w-2 rounded-full sm:h-3 sm:w-3',
              currentIndex === index ? 'bg-white' : 'bg-secondary'
            )}></div>
        ))}
      </div>
    </div>
  )
}

export default QuoteCarousel
