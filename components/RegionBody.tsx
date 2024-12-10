import React from 'react'
import HeroSection from '@/components/HeroSection'
import VisitACenterSection from '@/components/VisitACenterSection'
import BottomSection from './BottomSection'

const stateMap: Record<string, string> = {
  PA: 'Pennsylvania',
  WV: 'West Virginia',
  VA: 'Virginia'
}

const RegionBody = ({ regionData }: { regionData: { region: string } }) => {
  const { region } = regionData

  const state = stateMap[region.toUpperCase()] || 'Unknown State'

  return (
    <>
      <HeroSection
        message={`feel better, no appointment needed in ${region}`}
        image="region-page-hero"
        variant="hidden"
      />
      <div className="flex items-center justify-center bg-background-light px-[16px] py-[64px] md:px-[100px]">
        <p tabIndex={0} className="max-w-[1170px] text-[34px] leading-[40.8px] text-denim">
          At MedExpress, we understand that accidents and illness can happen anytime. See the
          information below to help plan your visit to your
          {` ${state}`} MedExpress neighborhood medical center.
        </p>
      </div>
      <VisitACenterSection region={region} state={state} />
      <BottomSection
        image={'/assets/images/medex-urgent-care-center.png'}
        alt="MedExpress Urgent Care Center"
        title="Virtual Visits"
        message="We’re here for you. We know our communities need convenient, safe access to care ─ now more than ever. You can see a licensed MedExpress medical professional from the comfort of your home with secure video conferencing."
        button="(800) 555-5555"
      />
    </>
  )
}

export default RegionBody
