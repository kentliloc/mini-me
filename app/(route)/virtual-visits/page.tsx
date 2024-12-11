import { AccordionProvider } from '@/components/Accordion'
import FAQsVirtualVisits from '@/components/FAQsVirtualVisits'
import HeroSection from '@/components/HeroSection'
import React from 'react'

const VirtualVisits = () => {
  return (
    <div className="bg-white">
      <HeroSection
        message="quality care without leaving home"
        image="virtual-visits-hero"
        variant="hidden"
      />

      <div className="flex flex-col items-center justify-center bg-background-light px-[25px] py-[32px] md:px-[70px] md:py-[64px]">
        <div className="flex max-w-[1170px] flex-col gap-[4px] text-denim">
          <h3
            tabIndex={0}
            role="presentation"
            aria-hidden="false"
            className="md:px-10 text-center text-[42px] leading-[50.4px] md:text-[56px] md:leading-[67.2px]">
            schedule a Virtual Visit
          </h3>
          <p tabIndex={0}>
            We’re here for you. We know our communities need convenient, safe access to care. You
            can see a licensed MedExpress medical professional from the comfort of your home with
            secure video conferencing. MedExpress offers telehealth urgent care and medical
            evaluations for everyday illnesses and injuries to patients who reside in Arkansas,
            Maryland, Massachusetts, Minnesota, Pennsylvania, Texas, Virginia or West Virginia.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-terracotta px-[25px] py-[32px] text-center text-white md:px-[70px] md:py-[64px]">
        <div className="flex max-w-[1170px] flex-col gap-[12px]">
          <h2
            tabIndex={0}
            role="presentation"
            aria-hidden="false"
            className="text-center text-[32px] leading-[48px] md:px-[122px] md:text-[36px] md:leading-[54px] lg:px-[310px]">
            Call{' '}
            <span className="underline">
              <a href="tel:1-888-759-1868">1-888-759-1868</a>
            </span>{' '}
            to schedule a Virtual Visit today.
          </h2>
          <p tabIndex={0} className="md:px-[122px]">
            *EMERGENCY SERVICE NOTICE: IF YOU ARE SUFFERING FROM CHEST PAIN, SHORTNESS OF BREATH,
            SEVERE ABDOMINAL PAIN, STROKE LIKE SYMPTOMS, OR ANY OTHER EMERGENCY, PLEASE DIAL 911 OR
            GO TO THE NEAREST ER.
          </p>
        </div>
      </div>
      <AccordionProvider variant="independent">
        <FAQsVirtualVisits />
      </AccordionProvider>
    </div>
  )
}

export default VirtualVisits
