'use client'
import { useContext } from 'react'
import Accordion, { AccordionContext } from './Accordion'

const ServicesSection = () => {
  const splitIntoColumns = (items: string[]) => {
    items.sort()
    const midIndex = Math.ceil(items.length / 2)
    return [items.slice(0, midIndex), items.slice(midIndex)]
  }

  const ailments = [
    'Allergies',
    'Colds',
    'COVID-19',
    'Ear infections',
    'Flu',
    'Gastrointestinal illnesses',
    'Hand, foot, and mouth disease',
    'Labs, TB Testing, IVs, EKGs',
    'Lyme disease',
    'Mono treatment',
    'Pink eye',
    'Rashes',
    'Respiratory illnesses',
    'Sinus infections',
    'Strep throat',
    'UTIs'
  ]

  const injuries = [
    'Bites and Stings',
    'Broken Bones',
    'Burns',
    'Cuts and Scrapes',
    'Frostbite',
    'Heat Exhaustion',
    'Lice',
    'Motor Vehicle Accident',
    'Nosebleed Treatment',
    'Strains and Sprains',
    'X-rays'
  ]

  const skin = [
    'Cellulitis',
    'Eczema',
    'Impetigo',
    'Poison Ivy/Oak/Sumac',
    'Ringworm',
    "Athlete's foot",
    'Canker and cold sore treatment',
    'Wart treatment',
    'Skin tag removal',
    'Shingles'
  ]

  const wellness = [
    'Camp, School, and Sports Physicals',
    'Earwax Removal',
    'Flu Shots',
    'Gout',
    'Leg Pain and Swollen Veins',
    'Vaccinations',
    "Women's Health"
  ]

  const women = [
    'Mastitis treatment',
    'Vaginal discharge treatment',
    'Yeast infection treatment',
    'Pelvic pain treatment',
    'Vaginosis treatment'
  ]

  const work = ['DOT physicals', 'Drug and alcohol screenings', 'Work-related physicals']

  const [ailmentsColumn1, ailmentsColumn2] = splitIntoColumns(ailments)
  const [injuriesColumn1, injuriesColumn2] = splitIntoColumns(injuries)
  const [skinColumn1, skinColumn2] = splitIntoColumns(skin)
  const [wellnessColumn1, wellnessColumn2] = splitIntoColumns(wellness)
  const [womenColumn1, womenColumn2] = splitIntoColumns(women)
  const [workColumn1, workColumn2] = splitIntoColumns(work)

  const { openIds } = useContext(AccordionContext)

  const getTabIndex = (id: string) => (openIds.includes(id) ? 0 : -1)

  const AccordionList = ({ items1, items2, id }: AccordionListProps) => (
    <div className="grid grid-cols-1 gap-[12px] px-[16px] pb-[32px] md:grid-cols-2 md:gap-[32px] md:px-[70px]">
      <ul className="space-y-[12px] text-start text-[18px]">
        {items1.map((item, index) => (
          <li tabIndex={getTabIndex(id)} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <ul className="space-y-[12px] text-start text-[18px]">
        {items2.map((item, index) => (
          <li tabIndex={getTabIndex(id)} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <div className="flex w-full flex-col items-center justify-center bg-denim px-[16px] py-[48px] text-center text-white md:px-[180px]">
      <div className="flex w-full max-w-[1170px] flex-col gap-[36px]">
        <div className="flex flex-col gap-3">
          <p
            tabIndex={0}
            className="text-[32px] font-normal leading-[38.4px] md:text-[36px] md:leading-[43.2px]">
            services and treatment
          </p>
          <p tabIndex={0}>
            We&apos;re here for your family&apos;s urgent care needs - from the flu to broken bones
            and sports physicals.
          </p>
        </div>
        <div>
          <Accordion icon="illness" id="1" title="Illness">
            <AccordionList items1={ailmentsColumn1} items2={ailmentsColumn2} id="1" />
          </Accordion>
          <Accordion icon="injury" id="2" title="Injury">
            <AccordionList items1={injuriesColumn1} items2={injuriesColumn2} id="2" />
          </Accordion>
          <Accordion icon="skin" id="3" title="Skin Ailments">
            <AccordionList items1={skinColumn1} items2={skinColumn2} id="3" />
          </Accordion>
          <Accordion icon="wellness" id="4" title="Wellness and Prevention">
            <AccordionList items1={wellnessColumn1} items2={wellnessColumn2} id="4" />
          </Accordion>
          <Accordion icon="women" id="5" title="Women's Health">
            <AccordionList items1={womenColumn1} items2={womenColumn2} id="5" />
          </Accordion>
          <Accordion icon="STD" id="6" title="STD/STI Testing" collapsible={false}></Accordion>
          <Accordion icon="sports" id="7" title="Sports Physicals" collapsible={false}></Accordion>
          <Accordion icon="work" id="8" title="Work-related Services">
            <AccordionList items1={workColumn1} items2={workColumn2} id="8" />
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection
