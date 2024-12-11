import { formatTo12Hour, cn } from '@/utils/utils'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import data from '@/data/medexpress_gohealth.json'

const CenterCardSkeleton = ({ region }: { region: string }) => {
  const stateData: Center[] = data
    .filter((result) => result.state === region)
    .sort((a, b) => a.center_name.localeCompare(b.center_name))

  return (
    <>
      {stateData.map((centerData) => {
        const { center_name, address, id, reservationUrl, hours } = centerData
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
        const isDisabled = !reservationLink

        return (
          <div
            key={id}
            className="flex cursor-progress w-full max-w-[343px] flex-col items-center gap-[15px] overflow-hidden bg-white md:max-w-full">
            <div>
              <div className="h-[160px] w-[343px] animate-pulse bg-gray-300"></div>
            </div>
            <div className="flex flex-grow flex-col justify-between gap-[25px] px-[21.54px] pb-[13px] text-center">
              <div className="flex flex-col gap-[8px] text-start">
                <div>
                  <h1 className="text-[18px] leading-[22.5px] tracking-[-2.5%] text-denim">
                    {centerTitle}
                  </h1>
                </div>
                <p tabIndex={0} className="text-[14px] leading-[17.5px] tracking-[-2.5%]">
                  {regionAddress}
                </p>
              </div>
              <div className="flex flex-col gap-[8px]">
                <div
                  tabIndex={0}
                  className="w-full bg-background-highlight px-[10px] py-[8px] text-[14px] font-light">
                  <span className="font-normal text-terracotta">Today&apos;s Hours:</span>{' '}
                  {todayHours}
                </div>
                <div className="flex flex-col items-center justify-center gap-[8px] text-[12px] md:justify-start">
                  {isDisabled ? (
                    <div className="relative h-full w-full cursor-not-allowed bg-terracotta px-[25px] py-[8px] font-bold text-white opacity-50">
                      <span className="flex w-full items-center justify-center whitespace-normal md:mr-5">
                        <span className="flex items-center justify-center space-x-2">
                          <span>SCHEDULE IN-PERSON VISIT</span>
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-[12px]" />
                        </span>
                      </span>
                    </div>
                  ) : (
                    <div className={cn('w-full', { 'cursor-not-allowed': !reservationLink })}>
                      <div className="relative h-full w-full bg-terracotta px-[25px] py-[8px] font-bold text-white">
                        <span className="flex w-full items-center justify-center whitespace-normal md:mr-5">
                          <span className="flex items-center justify-center space-x-2">
                            <span>SCHEDULE IN-PERSON VISIT</span>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-[12px]" />
                          </span>
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="w-full">
                    <div className="w-full bg-denim px-[30px] py-[8px] font-bold text-white">
                      SCHEDULE VIRTUAL VISIT
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default CenterCardSkeleton
