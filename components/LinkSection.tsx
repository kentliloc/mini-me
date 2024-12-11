'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'

const LinkSection = () => {
  const [hideMiddleText, setHideMiddleText] = useState(false)
  const crossIcon = useRef<HTMLDivElement>(null)
  const middleDivRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkOverlap = () => {
      if (!crossIcon.current || !middleDivRef.current) return

      const crossRect = crossIcon.current.getBoundingClientRect()
      const middleRect = middleDivRef.current.getBoundingClientRect()

      const isOverlapping =
        crossRect.right - 15 > middleRect.left && crossRect.left < middleRect.right
      setHideMiddleText(isOverlapping)
    }

    window.addEventListener('scroll', checkOverlap)
    window.addEventListener('resize', checkOverlap)

    checkOverlap()

    return () => {
      window.removeEventListener('scroll', checkOverlap)
      window.removeEventListener('resize', checkOverlap)
    }
  }, [])

  return (
    <div className="relative flex w-full flex-col items-center justify-center bg-background-light px-[25px] py-[48px]">
      <div className="w-full max-w-[1170px]">
        <div
          tabIndex={0}
          className="flex flex-col items-center justify-center gap-0.5 text-center text-denim">
          <h2 role="presentation" aria-hidden="false">
            now there are more ways
          </h2>
          <h3 role="presentation" aria-hidden="false" className="text-terracotta">
            to access care at MedExpress
          </h3>
        </div>
        <div className="grid w-full grid-cols-1 md:grid-cols-3">
          <div className="-mt-[63px] flex flex-col place-content-end items-center text-center text-denim">
            <div>
              <Image
                src={'/assets/center-icon.svg'}
                alt="center-icon"
                width={244}
                height={293}
                className="h-[205px] w-[170px] md:-mb-7 md:h-[293px] md:w-[244px]"
              />
            </div>
            <p
              tabIndex={0}
              className={`mb-[28px] text-[28px] font-normal leading-[33.6px] ${
                hideMiddleText ? 'flex opacity-100' : 'md:hidden md:opacity-0'
              } transition-opacity duration-300`}>
              IN PERSON
            </p>
            <div
              tabIndex={0}
              className="flex flex-col items-center justify-center gap-[6px] md:mt-[25px] md:gap-[25px]">
              <h4 role="presentation" aria-hidden="false">
                Visit a Center
              </h4>
              <p className="mb-[25px]">
                Your neighborhood medical center is here to care for your family&apos;s illnesses
                and injuries.
              </p>
              <Button name="FIND A CENTER" />
            </div>
          </div>
          <div className={`flex items-center justify-center pt-[53px] text-denim md:-mt-[25%]`}>
            <p
              tabIndex={0}
              className={`absolute mr-[20%] hidden text-[28px] font-normal leading-[33.6px] md:block ${
                hideMiddleText ? 'opacity-0' : 'opacity-100'
              } transition-opacity duration-300`}>
              IN PERSON
            </p>
            <div ref={crossIcon}>
              <Image
                src={'/assets/cross-icon.svg'}
                alt="cross-icon"
                width={222}
                height={199}
                className="h-[150px] w-[167px] md:h-[199px] md:w-[222px]"
              />
            </div>

            <p
              tabIndex={0}
              ref={middleDivRef}
              className={`absolute ml-[23%] hidden text-[28px] font-normal leading-[33.6px] md:block ${
                hideMiddleText ? 'opacity-0' : 'opacity-100'
              } transition-opacity duration-300`}>
              {' '}
              VIRTUAL VISITS
            </p>
          </div>
          <div className="-mt-5 flex flex-col place-content-end items-center text-center text-denim md:-mt-[30px]">
            <Image
              src={'/assets/phone-icon.svg'}
              alt="phone-icon"
              width={217}
              height={261}
              className="h-[190px] w-[157px] md:h-[261px] md:w-[217px]"
            />
            <p
              tabIndex={0}
              className={`mb-[28px] mt-[22px] text-[28px] font-normal leading-[33.6px] ${
                hideMiddleText ? 'flex opacity-100' : 'md:hidden md:opacity-0'
              } transition-opacity duration-300`}>
              VIRTUAL VISITS
            </p>
            <div
              tabIndex={0}
              className="flex flex-col items-center justify-center gap-[6px] md:mt-[25px] md:gap-[25px]">
              <h4 role="presentation" aria-hidden="false">
                Video Chat with a Provider
              </h4>
              <p className="mb-[25px]">
                Available for urgent care or medical evaluations for every day illnesses and
                injuries.
              </p>
              <Button name="GET STARTED" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LinkSection
