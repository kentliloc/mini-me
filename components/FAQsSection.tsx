import React, { useContext } from 'react'
import Accordion, { AccordionContext } from './Accordion'
import Image from 'next/image'

const FAQsSection = ({ listOfInsurance }: FAQsSectionProps) => {
  const maxItemsPerColumn = Math.ceil(listOfInsurance.length / 3)

  const firstColumn = listOfInsurance.slice(0, maxItemsPerColumn)
  const secondColumn = listOfInsurance.slice(maxItemsPerColumn, maxItemsPerColumn * 2)
  const thirdColumn = listOfInsurance.slice(maxItemsPerColumn * 2)

  const { openIds } = useContext(AccordionContext)

  const getTabIndex = (sectionId: string): number => (openIds.includes(sectionId) ? 0 : -1)

  return (
    <div className="bg-white">
      <Accordion id="services" title="What services do you offer at this center?">
        <div className="grid max-w-[1170px] grid-cols-1 justify-items-center gap-20 pb-[53px] pt-[45px] md:grid-cols-2 md:pb-[129px] md:pt-[80px] lg:grid-cols-4">
          {[
            { src: '/assets/icons/illness.svg', alt: 'illness-icon', title: 'Illness' },
            { src: '/assets/icons/injury.svg', alt: 'injury-icon', title: 'Injury' },
            { src: '/assets/icons/skin.svg', alt: 'skin-ailments-icon', title: 'Skin Ailments' },
            {
              src: '/assets/icons/wellness.svg',
              alt: 'wellness-icon',
              title: 'Wellness and Prevention'
            },
            { src: '/assets/icons/women.svg', alt: 'women-icon', title: 'Women’s Health' },
            { src: '/assets/icons/STD.svg', alt: 'STD-icon', title: 'STD/STI Testing' },
            { src: '/assets/icons/sports.svg', alt: 'sports-icon', title: 'Sports Physicals' },
            { src: '/assets/icons/work.svg', alt: 'work-icon', title: 'Work-related Services' }
          ].map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-start gap-[25px] text-center">
              <Image src={service.src} alt={service.alt} width={50} height={50} />
              <h4
                tabIndex={getTabIndex('services')}
                aria-hidden={getTabIndex('services') === -1 ? 'true' : 'false'}
                role="presentation">
                {service.title}
              </h4>
            </div>
          ))}
        </div>
      </Accordion>
      <Accordion id="insurance" title="What insurance is accepted?">
        <div className="max-w-[1170px]">
          <div className="mb-[33px] space-y-[12px]">
            <h3
              tabIndex={getTabIndex('insurance')}
              aria-hidden={getTabIndex('insurance') === -1 ? 'true' : 'false'}
              role="presentation"
              className="w-full text-center text-denim">
              List of insurances
            </h3>
            <p tabIndex={getTabIndex('insurance')} className="md:px-[50px]">
              We strive to provide you with the best possible experience, including the insurance
              process. While we accept most major insurance, in-network status may vary by state and
              center. To verify that your insurance is in-network, please check the listing below.
            </p>
          </div>
          <div className="hidden w-full grid-cols-3 gap-5 pb-[39px] md:grid md:px-[50px]">
            {[firstColumn, secondColumn, thirdColumn].map((column, columnIndex) => (
              <ul key={columnIndex} className="list-disc space-y-2 pl-5">
                {column.map((insurance, index) => (
                  <li tabIndex={getTabIndex('insurance')} key={index}>
                    {insurance}
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="grid grid-cols-1 pb-[12px] md:hidden">
            <ul className="list-disc space-y-2 pl-5">
              {listOfInsurance.map((insurance, index) => (
                <li tabIndex={getTabIndex('insurance')} key={index}>
                  {insurance}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Accordion>
      <Accordion id="requirements" title="What should I bring for my visit?">
        <div className="flex flex-col items-center gap-[35px] px-[25px] pb-[52px] pt-[20px] text-center md:pt-[46px]">
          <h4
            tabIndex={getTabIndex('requirements')}
            aria-hidden={getTabIndex('requirements') === -1 ? 'true' : 'false'}
            role="presentation"
            className="px-[30px] font-normal md:w-2/4">
            We want your visit to be as convenient as possible. To help everything go smoothly,
            please bring the following with you:
          </h4>
          <ul className="max-w-[420px] list-disc space-y-2 pl-[52px] text-start md:pl-5">
            {[
              "Driver's license or picture ID",
              'Insurance card (if you have insurance)',
              'Payment for co-pay or self-pay',
              'List of current medications, past surgeries, and allergies'
            ].map((requirement, index) => (
              <li tabIndex={getTabIndex('requirements')} key={index}>
                {requirement}
              </li>
            ))}
          </ul>
        </div>
      </Accordion>
    </div>
  )
}

export default FAQsSection
