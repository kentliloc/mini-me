'use client'
import MapComponent from '@/components/Map'
import React, { Suspense, useEffect, useState } from 'react'
import NotFound from '@/app/not-found'
import CenterDetailsSection from '@/components/CenterDetailsSection'
import LinkSection from '@/components/LinkSection'
import FAQsSection from '@/components/FAQsSection'
import BottomSection from '@/components/BottomSection'
import { useParams } from 'next/navigation'
import { AccordionProvider } from './Accordion'
import Alert from './Alert'

const CenterBody = ({ centerData, apiKey, centerImage }: CenterBodyProps) => {
  const { id } = useParams()
  const [coordinates, setCoordinates] = useState<GeocodedCoordinates | null>(null)
  const [googlePlaceId, setGooglePlaceId] = useState<string>('')

  const [centerDetails, setCenterDetails] = useState<Center | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [listOfInsurance, setListOfInsurance] = useState<string[]>([])

  useEffect(() => {
    setCenterDetails(centerData)

    const latitude = centerData.geocodedCoordinates?.latitude
    const longitude = centerData.geocodedCoordinates?.longitude
    if (!latitude || !longitude) {
      setError(`Coordinates not found for id: ${id}`)
      return
    }

    setListOfInsurance(centerData.insuranceAccepted)
    setCoordinates({ latitude, longitude })
    setGooglePlaceId(centerData.googlePlaceId)
  }, [id, centerData])

  if (error) {
    return <NotFound />
  }

  if (coordinates) {
    return (
      <div className="bg-white">
        {!centerData.reservationUrl && <Alert id={centerData.id.toUpperCase()} />}

        <Suspense fallback={<div className="h-[400px] w-full bg-gray-200">Loading map...</div>}>
          <MapComponent
            latitude={coordinates.latitude}
            longitude={coordinates.longitude}
            googlePlaceId={googlePlaceId}
            apiKey={apiKey}
            className="z-1 hidden md:block"
          />
        </Suspense>
        <CenterDetailsSection
          centerDetails={centerDetails}
          coordinates={coordinates}
          googlePlaceId={googlePlaceId}
        />
        <div className="flex flex-col items-center bg-denim px-[25px] py-[32px] text-white">
          <div className="flex w-full max-w-[1170px] flex-col items-center justify-center gap-[12px] text-center">
            <h3 tabIndex={0} role="presentation" aria-hidden="false">
              MedExpress or Emergency Room?
            </h3>
            <p tabIndex={0} className="">
              Most MedExpress visits cost under 10% of the average emergency room cost. We accept
              most insurances and offer convenient and affordable self-pay pricing for those without
              insurance.
            </p>
          </div>
        </div>
        <LinkSection />
        <AccordionProvider variant="independent">
          <FAQsSection listOfInsurance={listOfInsurance} />
        </AccordionProvider>
        <BottomSection
          image={centerImage ? centerImage.url : '/assets/images/medex-image.png'}
          title="Quality Care is Our Calling"
          message="MedExpress Urgent Care centers are The Joint Commission Accredited, having earned the Gold Seal of Approval - an internationally recognized distinction of our commitment and ability to providing safe, quality patient care."
          alt={centerImage?.alt || centerDetails?.business_name || 'MedExpress Urgent Care'}
        />
      </div>
    )
  }
}

export default CenterBody
