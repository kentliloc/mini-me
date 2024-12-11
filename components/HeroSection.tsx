import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { cn } from '@/utils/utils'

const HeroSection = ({ message, image, variant }: HeroSectionProps) => {
  return (
    <div
      className={cn(
        'relative flex h-[232px] w-full justify-center overflow-hidden bg-light-blue transition-all duration-300 md:h-[450px] lg:h-[450px]',
        {
          'md:h-[350px] lg:h-[350px]': image === 'find-a-center-hero'
        },
        {
          'h-[177px]': image === 'region-page-hero'
        }
      )}>
      {/* Background image */}
      <Image
        src={'/assets/images/homepage-hero-bg.png'}
        alt="homepage-hero-bg"
        width={1920}
        height={118}
        className="z-1 absolute bottom-0 hidden md:block"
      />

      <div className="relative w-full max-w-[1170px] px-[25px] md:px-[70px] xl:px-0">
        <div
          className={cn(
            'relative z-10 flex h-full w-[80%] flex-col gap-5 py-[18px] md:w-4/6 md:items-start md:justify-start md:gap-[24px] md:py-[63px]',
            { 'w-[70%] py-[10px]': image === 'virtual-visits-hero' },
            { 'w-[70%] py-[5px] md:w-[60%] lg:w-[50%]': image === 'woman-nurse' },
            { 'w-[70%] py-[10px] sm:py-[18px]': image === 'region-page-hero' }
          )}>
          <h1
            tabIndex={0}
            role="presentation"
            aria-hidden="false"
            className={cn(
              'leading-[42px] text-denim md:text-[70px] md:leading-[84px] lg:text-[92px]',
              {
                'text-[32px] leading-[32px] text-terracotta md:leading-[84px] md:text-denim lg:text-[92px]':
                  image === 'region-page-hero',
                'w-1/2': image === 'find-a-center-hero'
              }
            )}>
            {message}
          </h1>
          <div className={cn('whitespace-nowrap', { hidden: variant === 'hidden' })}>
            <Button name="FIND A CENTER" />
          </div>
        </div>

        <Image
          src={`/assets/images/${image}.png`}
          alt={image}
          width={1920}
          height={450}
          className={cn(
            'z-2 absolute bottom-0 right-0 h-[232px] object-cover transition-all duration-300 md:h-[450px]',
            {
              '-mr-[105px] h-[190px] w-[320px] sm:h-[220px] sm:w-[370px] md:-mr-[160px] md:h-[366px] md:w-[616px] lg:mr-0':
                image === 'find-a-center-hero'
            },
            {
              '-mr-[100px] w-[300px] md:w-[637px] lg:-mr-[200px]': image === 'virtual-visits-hero'
            },
            {
              '-mr-[50px] h-[177px] w-[400px] md:-mr-[180px] md:w-[957px]':
                image === 'region-page-hero'
            },
            { '-mr-[20px] w-[282px] md:mr-0 md:w-[563px]': image === 'homepage-hero' },
            { '-mr-[10px] w-[342px] md:w-[966px]': image === 'woman-nurse' }
          )}
        />
      </div>
    </div>
  )
}

export default HeroSection
