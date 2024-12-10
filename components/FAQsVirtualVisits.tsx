import React from 'react'
import Accordion, { AccordionProvider } from './Accordion'

const FAQsVirtualVisits = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-background-light">
      <div className="flex max-w-[1170px] flex-col md:items-center justify-center gap-[4px] px-[16px] py-[32px] text-denim md:px-[70px] md:py-[64px]">
        <h2 className="font-normal text-center">FAQs</h2>
        <p className='text-center'>From how it works to what to expect, learn more about Virtual Visits at MedExpress.</p>
      </div>
      <AccordionProvider variant="independent">
        <Accordion id="1" title="Can I receive a prescription?">
          <div className="max-w-[854px] justify-items-center pb-10 px-[16px] md:px-[70px] ">
            <p>
              We don’t guarantee a prescription will be ordered during your visit. Our providers are
              unable to write prescriptions for narcotic pain relievers or controlled substances.
              Examples of controlled substances include — but are not limited to — Adderall, Ambien,
              Gabapentin, Percocet, Suboxone and Xanax.
            </p>
          </div>
        </Accordion>

        <Accordion id="2" title="What conditions or screenings can I utilize a Virtual Visit for?">
          <div className="max-w-[854px] pb-10 px-[16px] md:px-[70px]">
            <p>
              Virtual Visits provide a convenient option to receive care for everyday illnesses and
              injuries from the comfort of your home. During your visit, if your provider determines
              that a higher level of care is needed, you may be directed to one of our centers for
              further evaluation and treatment.
            </p>
            <p className="py-5 font-bold">Treatment For:</p>

            <div className="flex items-center pl-5">
              <div className="mr-3 h-2 w-2 rounded-full border border-black"></div>
              Cold and flu-like symptoms, including:
            </div>
            {/* Treatment list */}
            <ul className="ml-10 list-disc space-y-2 pb-5 pl-5">
              <li>congestion or runny nose</li>
              <li>cough</li>
              <li>sore or scratchy throat or difficulty swallowing</li>
              <li>loss of voice (laryngitis)</li>
              <li>fever</li>
            </ul>

            <div className="flex items-center pl-5">
              <div className="mr-3 h-2 w-2 rounded-full border border-black"></div>
              Sinus infections or sinusitis
            </div>

            <div className="flex items-center pl-5">
              <div className="mr-3 h-2 w-2 rounded-full border border-black"></div>
              Back pain
            </div>

            <div className="flex items-center pl-5">
              <div className="mr-3 h-2 w-2 rounded-full border border-black"></div>
              Upper respiratory infections, such as bronchitis
            </div>

            <div className="flex items-center pl-5">
              <div className="mr-3 h-2 w-2 rounded-full border border-black"></div>
              Seasonal allergy symptoms
            </div>

            <div className="flex items-center pl-5">
              <div className="mr-3 h-2 w-2 rounded-full border border-black"></div>
              Cold and canker sores
            </div>

            <div className="flex items-center pl-5">
              <div className="mr-3 h-2 w-2 rounded-full border border-black"></div>
              Skin conditions, including:
            </div>

            {/* Skin conditions list */}
            <ul className="ml-10 list-disc space-y-2 pb-5 pl-5">
              <li>bug bites</li>
              <li>cellulitis</li>
              <li>eczema</li>
              <li>
                hives or rashes (If you’re also experiencing breathing difficulty, please seek
                immediate in-person medical care.)
              </li>
              <li>poison ivy</li>
              <li>psoriasis</li>
            </ul>

            <div className="flex items-center pl-5">
              <div className="mr-3 h-2 w-2 rounded-full border border-black"></div>
              Migraine/headache
            </div>

            <div className="flex items-center pl-5">
              <div className="mr-3 h-2 w-2 rounded-full border border-black"></div>
              Urinary tract infections (UTIs)
            </div>

            <div className="flex items-center pl-5">
              <div className="mr-3 h-2 w-2 rounded-full border border-black"></div>
              Eye infections, including:
            </div>
            <ul className="ml-10 list-disc space-y-2 pb-5 pl-5">
              <li>conjunctivitis/pink eye</li>
              <li>styes</li>
            </ul>

            <div className="flex items-center pl-5">
              <div className="mr-3 h-2 w-2 rounded-full border border-black"></div>
              Nausea, vomiting or diarrhea - without abdominal pain
            </div>

            <div className="flex items-center pl-5">
              <div className="mr-3 h-2 w-2 rounded-full border border-black"></div>
              Minor ear infections
            </div>

            <div className="flex items-center pl-5">
              <div className="mr-3 h-2 w-2 rounded-full border border-black"></div>
              Food poisoning
            </div>
          </div>
        </Accordion>

        <Accordion id="3" title="What if I need follow-up care?">
          <div className="max-w-[854px] justify-items-center pb-10 px-[16px] md:px-[70px]">
            <p>
              Depending on the level of care required, your provider may recommend you schedule
              another Virtual Visit, request that you visit a MedExpress center in person, or refer
              you to a specialist or other health care provider if additional follow-up care is
              needed.
            </p>
          </div>
        </Accordion>

        <Accordion id="4" title="Who is eligible?">
          <div className="max-w-[854px] justify-items-center space-y-5 pb-10 px-[16px] md:px-[70px]">
            <p>
              If you’re a patient in Pennsylvania, Virginia or West Virginia who needs to see a
              health care professional for an everyday illness or injury, you can schedule a Virtual
              Visit and see a licensed medical professional without ever leaving your home.
            </p>
            <p>
              Spanish translation services are available in select states. When you call to schedule
              a Virtual Visit, please note that you are interested in this service to confirm if it
              is available in your area.{' '}
            </p>
          </div>
        </Accordion>

        <Accordion id="5" title="How does it work?">
          <div className="max-w-[854px] space-y-5 text-start pb-10 px-[16px] md:px-[70px]">
            <p>
              To complete a Virtual Visit with a MedExpress medical professional, please follow
              these steps:
            </p>
            <ul className="list-decimal pl-8">
              <li>Call <a href="tel:1-888-759-1868" className='underline'>1-888-759-1868</a> to speak with a scheduler.</li>
              <li>
                {' '}
                Share the reason for your visit, complete a brief screening and select a Virtual
                Visit appointment time. Times are available for same day appointments.
              </li>
              <li>You’ll receive an appointment confirmation via text or email.</li>
              <li>
                Login to the video application to meet with a MedExpress provider at your scheduled
                time.
              </li>
              <li>Receive great care from the comfort of your home.</li>
            </ul>
          </div>
        </Accordion>

        <Accordion id="" title="What are the technology requirements, and is it secure?">
          <div className="max-w-[854px] space-y-5 pb-10 px-[16px] md:px-[70px]">
            <p className="font-bold">What do I need before I schedule a Virtual Visit?</p>

            <div>
              <div className="flex items-center pl-5">
                <div className="mr-3 h-2 w-2 rounded-full border border-black"></div>
                High speed internet access
              </div>
              <div className="flex items-center pl-5">
                <div className="mr-3 h-2 w-2 rounded-full border border-black"></div>
                Desktop or mobile device to access our telehealth solution
              </div>
            </div>
            <p className="font-bold">
              Is my Virtual Visit secure? How will my information be protected?
            </p>
            <p>
              Our telehealth solution from AthenaHealth is an encrypted service built to meet Health
              Insurance Portability and Accountability Act (HIPAA) regulations and other security
              requirements to safeguard your Protected Health Information (PHI). Health care
              providers across the country use AthenaHealth telehealth to provide telemedicine care
              to patients.
            </p>
          </div>
        </Accordion>
      </AccordionProvider>
    </div>
  )
}

export default FAQsVirtualVisits
