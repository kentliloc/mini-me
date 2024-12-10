'use server'

import React from 'react'
import CenterBody from '@/components/CenterBody'
import data from '@/data/medexpress_gohealth.json'
import { notFound } from 'next/navigation'
import { getPrismicCenterImage } from '@/src/lib/getPrismicImage'
import { formatCity } from '@/utils/utils'

async function fetchCenterData(region: string, city: string, id: string) {
  const stateData = data.filter(
    (result) =>
      result.state.toLowerCase() === region.toLowerCase() &&
      formatCity(result.address.city) === city.toLowerCase() &&
      result.id.toLowerCase() === id.toLowerCase()
  )
  return stateData.length > 0 ? stateData[0] : null
}

interface CenterParams {
  region: string
  city: string
  id: string
}

export default async function CenterView({
  params: paramsPromise
}: {
  params: Promise<CenterParams>
}) {
  const params = await paramsPromise
  const { region, city, id } = params

  const apiKey = process.env.GOOGLE_MAPS_API_KEY
  const centerData = await fetchCenterData(region, city, id)

  if (!centerData) {
    notFound()
  }

  let centerImage = null
  try {
    centerImage = await getPrismicCenterImage(id.toUpperCase())
  } catch (error) {
    console.error('Error fetching center image:', error)
  }

  return <CenterBody centerData={centerData} apiKey={apiKey || ''} centerImage={centerImage} />
}
