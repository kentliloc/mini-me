import Accordion, { AccordionProvider } from './Accordion'

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

  const AccordionList = ({ items1, items2 }: AccordionListProps) => (
    <div className="grid grid-cols-1 gap-[12px] px-[16px] py-[32px] md:grid-cols-2 md:gap-[32px] md:px-[70px]">
      <ul className="space-y-[12px] text-start text-[18px]">
        {items1.map((item, index) => (
          <li tabIndex={0} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <ul className="space-y-[12px] text-start text-[18px]">
        {items2.map((item, index) => (
          <li tabIndex={0} key={index}>
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
          <AccordionProvider variant="exclusive">
            <Accordion icon="illness" id="illness" title="Illness">
              <AccordionList items1={ailmentsColumn1} items2={ailmentsColumn2} />
            </Accordion>
            <Accordion icon="injury" id="injury" title="Injury">
              <AccordionList items1={injuriesColumn1} items2={injuriesColumn2} />
            </Accordion>
            <Accordion icon="skin" id="skin" title="Skin Ailments">
              <AccordionList items1={skinColumn1} items2={skinColumn2} />
            </Accordion>
            <Accordion icon="wellness" id="wellness" title="Wellness and Prevention">
              <AccordionList items1={wellnessColumn1} items2={wellnessColumn2} />
            </Accordion>
            <Accordion icon="women" id="women" title="Women's Health">
              <AccordionList items1={womenColumn1} items2={womenColumn2} />
            </Accordion>
            <Accordion icon="STD" id="STD" title="STD/STI Testing" collapsible={false}>
              <h1>STD/STI Testing</h1>
            </Accordion>
            <Accordion icon="sports" id="sports" title="Sports Physicals" collapsible={false}>
              <h1>Sports Physicals</h1>
            </Accordion>
            <Accordion icon="work" id="work" title="Work-related Services">
              <AccordionList items1={workColumn1} items2={workColumn2} />
            </Accordion>
          </AccordionProvider>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection
