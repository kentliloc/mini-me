'use client'
import React, { useContext } from 'react'
import Accordion, { AccordionContext } from './Accordion'

const FAQsVirtualVisits = () => {
  const { openIds } = useContext(AccordionContext)

  const getTabIndex = (id: string) => (openIds.includes(id) ? 0 : -1)

  return (
    <div className="flex w-full flex-col items-center justify-center bg-background-light">
      <div className="flex max-w-[1170px] flex-col justify-center gap-[4px] px-[25px] py-[32px] text-denim md:items-center md:px-[70px] md:py-[64px]">
        <h2
          tabIndex={0}
          role="presentation"
          aria-hidden="false"
          className="text-center font-normal">
          FAQs
        </h2>
        <p tabIndex={0} className="text-center">
          From how it works to what to expect, learn more about Virtual Visits at MedExpress.
        </p>
      </div>

      <Accordion id="1" title="Can I receive a prescription?">
        <div
          tabIndex={getTabIndex('1')}
          className="max-w-[854px] justify-items-center px-[25px] pb-10 md:px-[70px]">
          <p>
            We don’t guarantee a prescription will be ordered during your visit. Our providers are
            unable to write prescriptions for narcotic pain relievers or controlled substances.
            Examples of controlled substances include — but are not limited to — Adderall, Ambien,
            Gabapentin, Percocet, Suboxone and Xanax.
          </p>
        </div>
      </Accordion>

      <Accordion id="2" title="What conditions or screenings can I utilize a Virtual Visit for?">
        <div className="max-w-[854px] px-[25px] pb-10 md:px-[70px]">
          <p tabIndex={getTabIndex('2')}>
            Virtual Visits provide a convenient option to receive care for everyday illnesses and
            injuries from the comfort of your home. During your visit, if your provider determines
            that a higher level of care is needed, you may be directed to one of our centers for
            further evaluation and treatment.
          </p>
          <p tabIndex={getTabIndex('2')} className="py-5 font-bold">
            Treatment For:
          </p>

          <div tabIndex={getTabIndex('2')} className="flex items-center pl-5">
            <div className="mr-3 h-2 w-2 rounded-full border border-black"></div>
            Cold and flu-like symptoms, including:
          </div>
          {/* Treatment list */}
          <ul className="ml-10 list-disc space-y-2 pb-5 pl-5">
            <li tabIndex={getTabIndex('2')}>congestion or runny nose</li>
            <li tabIndex={getTabIndex('2')}>cough</li>
            <li tabIndex={getTabIndex('2')}>sore or scratchy throat or difficulty swallowing</li>
            <li tabIndex={getTabIndex('2')}>loss of voice (laryngitis)</li>
            <li tabIndex={getTabIndex('2')}>fever</li>
          </ul>

          <div tabIndex={getTabIndex('2')} className="flex items-center pl-5">
            <div className="mr-3 h-2 w-2 rounded-full border border-black"></div>
            Sinus infections or sinusitis
          </div>

          <div tabIndex={getTabIndex('2')} className="flex items-center pl-5">
            <div className="mr-3 h-2 w-2 rounded-full border border-black"></div>
            Back pain
          </div>

          <div tabIndex={getTabIndex('2')} className="flex items-center pl-5">
            <div className="mr-3 h-2 w-2 rounded-full border border-black"></div>
            Upper respiratory infections, such as bronchitis
          </div>

          <div tabIndex={getTabIndex('2')} className="flex items-center pl-5">
            <div className="mr-3 h-2 w-2 rounded-full border border-black"></div>
            Seasonal allergy symptoms
          </div>

          <div tabIndex={getTabIndex('2')} className="flex items-center pl-5">
            <div className="mr-3 h-2 w-2 rounded-full border border-black"></div>
            Cold and canker sores
          </div>

          <div tabIndex={getTabIndex('2')} className="flex items-center pl-5">
            <div className="mr-3 h-2 w-2 rounded-full border border-black"></div>
            Skin conditions, including:
          </div>

          {/* Skin conditions list */}
          <ul className="ml-10 list-disc space-y-2 pb-5 pl-5">
            <li tabIndex={getTabIndex('2')}>bug bites</li>
            <li tabIndex={getTabIndex('2')}>cellulitis</li>
            <li tabIndex={getTabIndex('2')}>eczema</li>
            <li tabIndex={getTabIndex('2')}>
              hives or rashes (If you’re also experiencing breathing difficulty, please seek
              immediate in-person medical care.)
            </li>
            <li tabIndex={getTabIndex('2')}>poison ivy</li>
            <li tabIndex={getTabIndex('2')}>psoriasis</li>
          </ul>

          <div tabIndex={getTabIndex('2')} className="flex items-center pl-5">
            <div className="mr-3 h-2 w-2 rounded-full border border-black"></div>
            Migraine/headache
          </div>

          <div tabIndex={getTabIndex('2')} className="flex items-center pl-5">
            <div className="mr-3 h-2 w-2 rounded-full border border-black"></div>
            Urinary tract infections (UTIs)
          </div>

          <div tabIndex={getTabIndex('2')} className="flex items-center pl-5">
            <div className="mr-3 h-2 w-2 rounded-full border border-black"></div>
            Eye infections, including:
          </div>
          <ul className="ml-10 list-disc space-y-2 pb-5 pl-5">
            <li tabIndex={getTabIndex('2')}>conjunctivitis/pink eye</li>
            <li tabIndex={getTabIndex('2')}>styes</li>
          </ul>

          <div tabIndex={getTabIndex('2')} className="flex items-center pl-5">
            <div className="mr-3 h-2 w-2 rounded-full border border-black"></div>
            Nausea, vomiting or diarrhea - without abdominal pain
          </div>

          <div tabIndex={getTabIndex('2')} className="flex items-center pl-5">
            <div className="mr-3 h-2 w-2 rounded-full border border-black"></div>
            Minor ear infections
          </div>

          <div tabIndex={getTabIndex('2')} className="flex items-center pl-5">
            <div className="mr-3 h-2 w-2 rounded-full border border-black"></div>
            Food poisoning
          </div>
        </div>
      </Accordion>

      <Accordion id="3" title="What if I need follow-up care?">
        <div
          tabIndex={getTabIndex('3')}
          className="max-w-[854px] justify-items-center px-[25px] pb-10 md:px-[70px]">
          <p>
            Depending on the level of care required, your provider may recommend you schedule
            another Virtual Visit, request that you visit a MedExpress center in person, or refer
            you to a specialist or other health care provider if additional follow-up care is
            needed.
          </p>
        </div>
      </Accordion>

      <Accordion id="4" title="Who is eligible?">
        <div className="max-w-[854px] justify-items-center space-y-5 px-[25px] pb-10 md:px-[70px]">
          <p tabIndex={getTabIndex('4')}>
            If you’re a patient in Pennsylvania, Virginia or West Virginia who needs to see a health
            care professional for an everyday illness or injury, you can schedule a Virtual Visit
            and see a licensed medical professional without ever leaving your home.
          </p>
          <p tabIndex={getTabIndex('4')}>
            Spanish translation services are available in select states. When you call to schedule a
            Virtual Visit, please note that you are interested in this service to confirm if it is
            available in your area.{' '}
          </p>
        </div>
      </Accordion>

      <Accordion id="5" title="How does it work?">
        <div className="max-w-[854px] space-y-5 px-[25px] pb-10 text-start md:px-[70px]">
          <p tabIndex={getTabIndex('5')}>
            To complete a Virtual Visit with a MedExpress medical professional, please follow these
            steps:
          </p>
          <ul className="list-decimal pl-8">
            <li tabIndex={getTabIndex('5')}>
              Call{' '}
              <a href="tel:1-888-759-1868" className="underline">
                1-888-759-1868
              </a>{' '}
              to speak with a scheduler.
            </li>
            <li tabIndex={getTabIndex('5')}>
              {' '}
              Share the reason for your visit, complete a brief screening and select a Virtual Visit
              appointment time. Times are available for same day appointments.
            </li>
            <li tabIndex={getTabIndex('5')}>
              You’ll receive an appointment confirmation via text or email.
            </li>
            <li tabIndex={getTabIndex('5')}>
              Login to the video application to meet with a MedExpress provider at your scheduled
              time.
            </li>
            <li tabIndex={getTabIndex('5')}>Receive great care from the comfort of your home.</li>
          </ul>
        </div>
      </Accordion>

      <Accordion id="6" title="What are the technology requirements, and is it secure?">
        <div className="max-w-[854px] space-y-5 px-[25px] pb-10 md:px-[70px]">
          <p tabIndex={getTabIndex('6')} className="font-bold">
            What do I need before I schedule a Virtual Visit?
          </p>

          <div>
            <div tabIndex={getTabIndex('6')} className="flex items-center pl-5">
              <div className="mr-3 h-2 w-2 rounded-full border border-black"></div>
              High speed internet access
            </div>
            <div tabIndex={getTabIndex('6')} className="flex items-center pl-5">
              <div className="mr-3 h-2 w-2 rounded-full border border-black"></div>
              Desktop or mobile device to access our telehealth solution
            </div>
          </div>
          <p tabIndex={getTabIndex('6')} className="font-bold">
            Is my Virtual Visit secure? How will my information be protected?
          </p>
          <p tabIndex={getTabIndex('6')}>
            Our telehealth solution from AthenaHealth is an encrypted service built to meet Health
            Insurance Portability and Accountability Act (HIPAA) regulations and other security
            requirements to safeguard your Protected Health Information (PHI). Health care providers
            across the country use AthenaHealth telehealth to provide telemedicine care to patients.
          </p>
        </div>
      </Accordion>
    </div>
  )
}

export default FAQsVirtualVisits
