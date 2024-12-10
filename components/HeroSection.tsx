import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { cn } from '@/utils/utils'

const HeroSection = ({ message, image, variant }: HeroSectionProps) => {
  const messageLines = message.split('\n')

  return (
    <div className="relative flex h-[232px] w-full justify-center overflow-hidden bg-light-blue px-[16px] transition-all duration-300 md:h-[300px] md:px-[70px] lg:h-[450px]">
      {/* Background image */}
      <Image
        src={'/assets/images/homepage-hero-bg.png'}
        alt="homepage-hero-bg"
        width={1920}
        height={118}
        className="z-1 absolute bottom-0 hidden md:block"
      />

      <div className="relative w-full max-w-[1170px] lg:px-0">
        <div className="relative z-10 flex h-full w-4/6 flex-col gap-5 pt-[18px] md:w-5/6 md:items-start md:justify-start md:gap-[24px] md:pt-[63px] lg:w-4/6">
          {messageLines.map((line, index) => (
            <h1
              role="presentation"
              aria-hidden="false"
              key={index}
              className={cn('text-denim', {"text-terracotta md:text-denim":image==="region-page-hero"})}>
              <span tabIndex={0}> {line}</span>
            </h1>
          ))}
          <div className={cn({ hidden: variant === 'hidden' })}>
            <Button name="FIND A CENTER" />
          </div>
        </div>

        <Image
          src={`/assets/images/${image}.png`}
          alt={image}
          width={1920}
          height={450}
          className={cn(
            'z-2 absolute right-0 top-0 h-[232px] transition-all duration-300 md:h-[450px]',
            { '-mr-[85px] md:mr-0 w-[282px] md:w-[563px]': image === 'find-a-center-hero' },
            { '-mr-[110px] md:mr-0 md:w-[400px] lg:w-[637px]': image === 'virtual-visits-hero' },
            { '-mr-[120px] md:-mr-[100px] md:w-[400px] lg:w-[957px]': image === 'region-page-hero' },
            { 'w-[282px] md:w-[563px]': image === 'homepage-hero' }
          )}
        />
      </div>
    </div>
  )
}

export default HeroSection
