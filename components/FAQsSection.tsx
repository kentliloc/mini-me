  import React, { useContext } from 'react'
  import Accordion, { AccordionContext } from './Accordion'
  import Image from 'next/image'

  const FAQsSection = ({ listOfInsurance }: FAQsSectionProps) => {
    const maxItemsPerColumn = Math.ceil(listOfInsurance.length / 3)

    const firstColumn = listOfInsurance.slice(0, maxItemsPerColumn)
    const secondColumn = listOfInsurance.slice(maxItemsPerColumn, maxItemsPerColumn * 2)
    const thirdColumn = listOfInsurance.slice(maxItemsPerColumn * 2)

    const { openIds } = useContext(AccordionContext)

    return (
      <div className="bg-white">
        <Accordion id="services" title="What services do you offer at this center?">
          <div className="grid max-w-[1170px] grid-cols-1 justify-items-center gap-20 pb-[53px] pt-[45px] md:grid-cols-2 md:pb-[129px] md:pt-[80px] lg:grid-cols-4">
            <div className="flex flex-col items-center justify-start gap-[16px] text-center">
              <Image src="/assets/icons/illness.svg" alt="illness-icon" width={50} height={50} />
              <h4 tabIndex={openIds.includes("services") ? 0 : -1} aria-hidden={openIds.includes("services") ? "false" : "true"} role="presentation">
                Illness
              </h4> 
            </div>
            <div className="flex flex-col items-center justify-start gap-[16px] text-center">
              <Image src="/assets/icons/injury.svg" alt="injury-icon" width={50} height={50} />
              <h4 tabIndex={openIds.includes("services") ? 0 : -1} aria-hidden={openIds.includes("services") ? "false" : "true"} role="presentation">
                Injury
              </h4>
            </div>
            <div className="flex flex-col items-center justify-start gap-[16px] text-center">
              <Image src="/assets/icons/skin.svg" alt="skin-ailments-icon" width={50} height={50} />
              <h4 tabIndex={openIds.includes("services") ? 0 : -1} aria-hidden={openIds.includes("services") ? "false" : "true"} role="presentation">
                Skin Ailments
              </h4>
            </div>
            <div className="flex flex-col items-center justify-start gap-[16px] text-center">
              <Image src="/assets/icons/wellness.svg" alt="wellness-icon" width={50} height={50} />
              <h4 tabIndex={openIds.includes("services") ? 0 : -1} aria-hidden={openIds.includes("services") ? "false" : "true"} role="presentation">
                Wellness and Prevention
              </h4>
            </div>
            <div className="flex flex-col items-center justify-start gap-[16px] text-center">
              <Image src="/assets/icons/women.svg" alt="women-icon" width={50} height={50} />
              <h4 tabIndex={openIds.includes("services") ? 0 : -1} aria-hidden={openIds.includes("services") ? "false" : "true"} role="presentation">
                Women’s Health
              </h4>
            </div>
            <div className="flex flex-col items-center justify-start gap-[16px] text-center">
              <Image src="/assets/icons/STD.svg" alt="STD-icon" width={50} height={50} />
              <h4 tabIndex={openIds.includes("services") ? 0 : -1} aria-hidden={openIds.includes("services") ? "false" : "true"} role="presentation">
                STD/STI Testing
              </h4>
            </div>
            <div className="flex flex-col items-center justify-start gap-[16px] text-center">
              <Image src="/assets/icons/sports.svg" alt="sports-icon" width={50} height={50} />
              <h4 tabIndex={openIds.includes("services") ? 0 : -1} aria-hidden={openIds.includes("services") ? "false" : "true"} role="presentation">
                Sports Physicals
              </h4>
            </div>
            <div className="flex flex-col items-center justify-start gap-[16px] text-center">
              <Image src="/assets/icons/work.svg" alt="work-icon" width={50} height={50} />
              <h4 tabIndex={openIds.includes("services") ? 0 : -1} aria-hidden={openIds.includes("services") ? "false" : "true"} role="presentation">
                Work-related Services
              </h4>
            </div>
          </div>
        </Accordion>
        <Accordion id="insurance" title="What insurance is accepted?">
          <div className="max-w-[1170px]">
            <div className="mb-[33px] space-y-[12px]">
              <h3
                tabIndex={openIds.includes("insurance") ? 0 : -1}
                aria-hidden={openIds.includes("insurance") ? "false" : "true"}
                role="presentation"
                className="w-full text-center text-denim">
                List of insurances
              </h3>
              <p tabIndex={openIds.includes("insurance") ? 0 : -1} className="md:px-[50px]">
                We strive to provide you with the best possible experience, including the insurance
                process. While we accept most major insurance, in-network status may vary by state and
                center. To verify that your insurance is in-network, please check the listing below.
              </p>
            </div>
            <div className="hidden w-full grid-cols-3 gap-5 pb-[39px] md:grid md:px-[50px]">
              <ul className="list-disc space-y-2 pl-5">
                {firstColumn.map((insurance, index) => (
                  <li tabIndex={openIds.includes("insurance") ? 0 : -1} key={index}>
                    {insurance}
                  </li>
                ))}
              </ul>
              <ul className="list-disc space-y-2 pl-5">
                {secondColumn.map((insurance, index) => (
                  <li tabIndex={openIds.includes("insurance") ? 0 : -1} key={index}>
                    {insurance}
                  </li>
                ))}
              </ul>
              <ul className="list-disc space-y-2 pl-5">
                {thirdColumn.map((insurance, index) => (
                  <li tabIndex={openIds.includes("insurance") ? 0 : -1} key={index}>
                    {insurance}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 pb-[12px] md:hidden">
              <ul className="list-disc space-y-2 pl-5">
                {listOfInsurance.map((insurance, index) => (
                  <li tabIndex={openIds.includes("insurance") ? 0 : -1} key={index}>
                    {insurance}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Accordion>
        <Accordion id="requirements" title="What should I bring for my visit?">
          <div className="flex flex-col items-center gap-[35px] px-[16px] pb-[52px] pt-[20px] text-center md:pt-[46px]">
            <h4
              tabIndex={openIds.includes("requirements") ? 0 : -1}
              aria-hidden={openIds.includes("requirements") ? "false" : "true"}
              role="presentation"
              className="px-[30px] font-normal md:w-2/4">
              We want your visit to be as convenient as possible. To help everything go smoothly,
              please bring the following with you:
            </h4>
            <ul className="max-w-[420px] list-disc space-y-2 pl-[52px] text-start md:pl-5">
              <li tabIndex={openIds.includes("requirements") ? 0 : -1}>Driver&apos;s license or picture ID</li>
              <li tabIndex={openIds.includes("requirements") ? 0 : -1}>Insurance card (if you have insurance)</li>
              <li tabIndex={openIds.includes("requirements") ? 0 : -1}>Payment for co-pay or self-pay</li>
              <li tabIndex={openIds.includes("requirements") ? 0 : -1}>List of current medications, past surgeries, and allergies</li>
            </ul>
          </div>
        </Accordion>
      </div>
    )
  }

  export default FAQsSection