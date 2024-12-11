import ContactUsForm from '@/components/contactUsForm'
import HeroSection from '@/components/HeroSection'
import React from 'react'
const ContactUs = () => {
  return (
    <>
      <HeroSection message="let us know how we can help you" image="woman-nurse" variant="hidden" />
      <div className="flex h-auto w-full items-center justify-center bg-background-light">
        <div className="px-[25px] py-8 md:px-[70px] md:py-16">
          <h2
            tabIndex={0}
            role="presentation"
            aria-hidden="false"
            className="box-border w-auto max-w-[1170px] text-[21px] font-normal leading-normal text-denim md:text-[34px]">
            Whether you have feedback about a recent visit to your neighborhood MedExpress or are
            interested in partnering with us for employer health services, you’ve come to the right
            place. Submit your information below and let us know how we can help.
          </h2>
        </div>
      </div>
      <ContactUsForm />
    </>
  )
}

export default ContactUs
