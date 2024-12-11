'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { getPrismicCenterImage } from '@/src/lib/getPrismicImage'

const CenterImage = ({ id, business_name }: { id: string; business_name: string }) => {
  const [centerImage, setCenterImage] = useState<PrismicImage | null>(null)

  useEffect(() => {
    async function fetchCenterImage() {
      const response = await getPrismicCenterImage(id)
      console.log(response, 'response')
      setCenterImage(response)
    }
    fetchCenterImage()
  }, [id])

  console.log(centerImage)
  return (
    <>
      {centerImage ? (
        <Image
          src={centerImage?.url || '/assets/images/center-image.png'}
          alt={centerImage?.alt || business_name || 'MedExpress Urgent Care'}
          width={1170}
          height={854}
          className="h-[160px] object-cover"
        />
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default CenterImage
