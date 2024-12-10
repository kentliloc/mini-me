import Link from 'next/link'
import React, { Suspense } from 'react'
import data from '@/data/medexpress_gohealth.json'
import Image from 'next/image'
import { cn, formatCity, formatTo12Hour } from '@/utils/utils'
import { getPrismicCenterImage } from '@/src/lib/getPrismicImage'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CenterCardSkeleton from './CenterCardSkeleton'

const VisitACenterSection = ({ region, state }: VisitACenterSectionProps) => {
  const stateData: Center[] = data
    .filter((result) => result.state === region)
    .sort((a, b) => a.center_name.localeCompare(b.center_name))

  return (
    <div className="flex w-full flex-col items-center justify-center bg-background-blue px-[16px] pb-[59px] pt-[67px] md:px-[70px]">
      <div className="max-w-[1170px] space-y-[25px]">
        <div className="w-full space-y-[12px] text-white">
          <p tabIndex={0} className="text-center text-[32px] leading-[38.4px] md:text-[36px] md:leading-[43.2px]">
            Visit a center in {state}
          </p>
          <p tabIndex={0} className="text-start">
            We strive to provide you with the best possible experience, including the insurance
            process. While we accept most major insurance, in-network status may vary by state and
            center. To verify that your insurance is in-network, please check the listing below.
          </p>
        </div>
        <div className="grid grid-cols-1 place-items-center items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Suspense fallback={<CenterCardSkeleton />}>
            {stateData.map(async (centerData, index) => {
              const { center_name, address, id, reservationUrl, hours, business_name } = centerData
              const centerTitle = `${center_name}, ${address.region} MedExpress Urgent Care`
              const regionAddress = `${address.line1}, ${address.city}, ${address.region} ${address.postalCode}`

              const today = new Date()
              const dayOfWeek = today.getDay()
              const days: (keyof Hours)[] = [
                'sunday',
                'monday',
                'tuesday',
                'wednesday',
                'thursday',
                'friday',
                'saturday'
              ]
              const todayName = days[dayOfWeek]
              const todayHours =
                hours[todayName]?.openIntervals
                  ?.map(
                    (interval: { start: string; end: string }) =>
                      `${formatTo12Hour(interval.start)} - ${formatTo12Hour(interval.end)}`
                  )
                  .join(', ') || 'Closed'

              const reservationLink = reservationUrl?.url
              let centerImage = null
              try {
                centerImage = await getPrismicCenterImage(id.toUpperCase())
              } catch (error) {
                console.error('Error fetching center image:', error)
              }

              return (
                <div
                  key={index}
                  className="flex w-full max-w-[343px] flex-col items-center gap-[15px] overflow-hidden bg-white md:max-w-full">
                  <Link href={`/location/${region}/${formatCity(address.city)}/${id}`}>
                    <div>
                      <Image
                        src={centerImage?.url || '/assets/images/center-image.png'}
                        alt={centerImage?.alt || business_name || 'MedExpress Urgent Care'}
                        width={1170}
                        height={854}
                        className="h-[160px] object-cover"
                      />
                    </div>
                  </Link>
                  <div className="flex flex-grow flex-col justify-between gap-[16px] px-[21.54px] pb-[13px] text-center">
                    <div className="flex flex-col gap-[8px] text-start">
                      <Link href={`/location/${region}/${formatCity(address.city)}/${id}`}>
                        <h1 className="text-[18px] leading-[22.5px] tracking-[-2.5%] text-denim">
                          {centerTitle}
                        </h1>
                      </Link>
                      <p tabIndex={0} className="text-[14px] leading-[17.5px] tracking-[-2.5%]">
                        {regionAddress}
                      </p>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                      <div tabIndex={0} className="w-full bg-background-highlight px-[10px] py-[8px] text-[14px] font-light">
                        <span className="font-normal text-terracotta">Today&apos;s Hours:</span>{' '}
                        {todayHours}
                      </div>
                      <div className="flex flex-col items-center justify-center gap-[8px] text-[12px] md:justify-start">
                        <Link
                          href={reservationLink ? reservationLink : '#'}
                          className={cn('w-full', { 'cursor-not-allowed': !reservationLink })}>
                          <div className="relative h-full w-full bg-terracotta px-[16px] py-[8px] font-bold text-white">
                            <span className="flex w-full items-center justify-center whitespace-normal md:mr-5">
                              <span className="flex items-center justify-center space-x-2">
                                <span>SCHEDULE IN-PERSON VISIT</span>
                                <FontAwesomeIcon
                                  icon={faArrowUpRightFromSquare}
                                  className="h-[12px]"
                                />
                              </span>
                            </span>
                          </div>
                        </Link>
                        <Link href={'/virtual-visits'} className="w-full">
                          <div className="w-full bg-denim px-[30px] py-[8px] font-bold text-white">
                            SCHEDULE VIRTUAL VISIT
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default VisitACenterSection
