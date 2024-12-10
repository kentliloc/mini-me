import { useEffect, useRef, useState } from 'react'
import { cn, formatTo12Hour } from '@/utils/utils'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhone,
  faMapPin,
  faChevronDown,
  faMap,
  faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons'

const CenterDetailsSection = ({
  centerDetails,
  coordinates,
  googlePlaceId
}: CenterDetailsSectionProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [userLocation, setUserLocation] = useState<GeocodedCoordinates | null>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const [statusMessage, setStatusMessage] = useState<string>('')
  const centerTitle = `${centerDetails?.center_name}, ${centerDetails?.address.region} MedExpress Urgent Care`
  const centerAddress = `${centerDetails?.address.line1}, ${centerDetails?.address.city}, ${centerDetails?.address.region} ${centerDetails?.address.postalCode}`

  const today = new Date()
  const dayOfWeek = today.getDay()

  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  const todayName = days[dayOfWeek]

  const weeklyHours = days.map((day) => {
    const dayHours = centerDetails?.hours[day]?.openIntervals
      ?.map(
        (interval: { start: string; end: string }) =>
          `${formatTo12Hour(interval.start)} - ${formatTo12Hour(interval.end)}`
      )
      .join(', ')
    return dayHours
      ? `${day.charAt(0).toUpperCase() + day.slice(1)}: ${dayHours}`
      : `${day.charAt(0).toUpperCase() + day.slice(1)}: Closed`
  })

  const todayHours =
    centerDetails?.hours[todayName]?.openIntervals
      ?.map(
        (interval: { start: string; end: string }) =>
          `${formatTo12Hour(interval.start)} - ${formatTo12Hour(interval.end)}`
      )
      .join(', ') || 'Closed'

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
    // Focus the header after toggle
    if (buttonRef.current) {
      buttonRef.current.focus()
    }
    // Update live region message
    setStatusMessage(isOpen ? 'Collapsed' : 'Expanded')
  }

  const formatPhoneNumber = (phoneNumber?: string) => {
    const cleaned = phoneNumber ? phoneNumber.replace(/[^+\d]/g, '') : ''
    const match = cleaned.match(/^(\+1)?(\d{3})(\d{3})(\d{4})$/)

    if (match) {
      const countryCode = match[1] || '+1'
      const areaCode = match[2]
      const centralOfficeCode = match[3]
      const lineNumber = match[4]
      return `${countryCode}-${areaCode}-${centralOfficeCode}-${lineNumber}`
    }

    return phoneNumber
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
        },
        (error) => {
          console.error('Error fetching user location:', error)
        }
      )
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  }, [])

  const getGoogleMapsDirectionsUrl = () => {
    if (!userLocation) {
      return `https://www.google.com/maps/place/?q=place_id:${googlePlaceId}`
    }
    const { latitude: userLat, longitude: userLng } = userLocation
    const { latitude: destLat, longitude: destLng } = coordinates
    return `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination_place_id=${googlePlaceId}&destination=${destLat}%${destLng}`
  }

  const getGoogleMapsUrl = () => {
    if (!googlePlaceId) return '#'
    return `https://www.google.com/maps/place/?q=place_id:${googlePlaceId}`
  }

  const reservationLink = centerDetails?.reservationUrl?.url

  const isDisabled = !reservationLink

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isDisabled) {
      e.preventDefault()
    }
  }

  return (
    <div className="flex w-full flex-col md:flex-row">
      {/* Left Section */}
      <div className="flex flex-col bg-footer-nav px-4 py-8 sm:px-6 md:w-1/2 md:items-end md:px-10 md:py-10">
        <div className="max-w-full md:max-w-[545px]">
          <div className="flex flex-col gap-4">
            <h2
              tabIndex={0}
              role="presentation"
              aria-hidden="false"
              className="text-[28px] leading-[33.6px] text-denim md:pr-[50px] md:text-[32px] md:leading-[38.4px]">
              {centerTitle}
            </h2>
            <p tabIndex={0} className="text-base md:text-lg">
              {centerAddress}
            </p>
            {/* Dropdown */}
            <div
              ref={buttonRef}
              onClick={toggleDropdown}
              className="mt-4 flex w-fit cursor-pointer flex-col items-start justify-start gap-3 text-lg">
              <span tabIndex={0} className="flex items-center gap-2 font-bold text-[#9c4721]">
                Today&apos;s Hours:{' '}
                <span className="ml-[2px] font-normal text-primary">{todayHours}</span>
                <FontAwesomeIcon
                  title="collapsible"
                  icon={faChevronDown}
                  className={cn(`transform transition-transform duration-300`, {
                    'rotate-180': isOpen
                  })}
                />
              </span>
              <div aria-live="polite" aria-atomic="true" className="sr-only">
                {statusMessage}
              </div>
              {/* Expanding content for weekly hours */}
              <div
                className={`w-full overflow-hidden transition-all duration-300 ease-out ${
                  isOpen ? 'max-h-[500px]' : 'max-h-0'
                }`}>
                {weeklyHours.map((hour, index) => {
                  const [day, ...time] = hour.split(':')
                  const isToday = day.toLowerCase() === todayName

                  return (
                    <div
                      key={index}
                      tabIndex={isOpen ? 0 : -1}
                      className="flex w-full justify-between gap-2 pl-[30px]">
                      <span
                        className={cn('text-[16px] text-[#9c4721]', {
                          'font-bold': isToday
                        })}>
                        {day}:
                      </span>
                      <span className={cn('pr-[26px] text-[16px]', { 'font-bold': isToday })}>
                        {time.join(':')}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Contact Links */}
            <div className="flex flex-col gap-6 md:flex-row">
              <a
                href={`tel:${centerDetails?.phone_number}`}
                className="flex items-center gap-2"
                aria-label={`Call ${centerDetails?.phone_number}`}>
                <FontAwesomeIcon icon={faPhone} className="text-terracotta" />
                {formatPhoneNumber(centerDetails?.phone_number)}
              </a>
              <a
                href={getGoogleMapsDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
                aria-label="Get Directions to the location">
                <FontAwesomeIcon icon={faMapPin} className="text-terracotta" />
                Get Directions
              </a>
              <a
                href={getGoogleMapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 md:hidden"
                aria-label="View in Map">
                <FontAwesomeIcon icon={faMap} className="text-terracotta" />
                View in Map
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="items-start bg-background-light px-4 py-8 sm:px-6 md:w-1/2 md:px-10 md:py-10">
        <div className="flex max-w-full flex-col gap-4 md:max-w-[545] md:pl-[0px]">
          <h2
            tabIndex={0}
            role="presentation"
            aria-hidden="false"
            className="text-[28px] leading-[33.6px] md:text-[32px] md:leading-[38.4px]">
            Schedule an Appointment
          </h2>
          <p tabIndex={0} className="text-base md:text-lg">
            Walk-ins are always welcome.
          </p>

          <div className="grid w-full grid-cols-2 gap-4">
            {/* Schedule In-Person Visit */}
            <Link
              onClick={handleClick}
              href={reservationLink || ''}
              tabIndex={0} className={cn('w-full text-center', { 'cursor-not-allowed': !reservationLink })}>
              <div className="relative flex h-full items-center justify-center bg-terracotta px-6 py-2 font-bold text-white">
                <span className="relative whitespace-normal md:-ml-5">
                  SCHEDULE IN-PERSON VISIT
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="absolute ml-2 mt-1" />
                </span>
              </div>
            </Link>

            {/* Schedule Virtual Visit */}
            <Link href="/virtual-visits" tabIndex={0} className="w-full text-center">
              <div className="flex h-full items-center justify-center bg-denim px-6 py-2 font-bold text-white">
                SCHEDULE VIRTUAL VISIT
              </div>
            </Link>
          </div>

          {/* Notice */}
          <p tabIndex={0} className="text-xs italic leading-5 md:max-w-[70%]">
            *Emergency Service Notice: If you are suffering from chest pain, shortness of breath,
            severe abdominal pain, stroke-like symptoms, or any other emergency, please dial 911 or
            go to the nearest ER.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CenterDetailsSection
