import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CenterCardSkeleton = () => {
  return (
    <>
      <div className="flex w-full max-w-[343px] flex-col items-center gap-[15px] overflow-hidden bg-white md:max-w-full">
        {/* Skeleton for image */}
        <div className="h-[160px] w-full animate-pulse bg-gray-300"></div>

        <div className="flex flex-grow flex-col justify-between gap-[16px] px-[21.54px] pb-[13px] text-center">
          <div className="flex animate-pulse flex-col gap-[8px] text-start">
            {/* Skeleton for title */}
            <div className="mb-2 h-5 w-[80%] rounded bg-gray-300"></div>
            {/* Skeleton for address */}
            <div className="mb-2 h-4 w-[60%] rounded bg-gray-300"></div>
          </div>
          <div className="flex flex-col gap-[8px]">
            {/* Skeleton for hours */}
            <div className="w-full bg-background-highlight px-[10px] py-[8px] text-[14px] font-light">
              <span className="font-normal text-terracotta">Today&apos;s Hours:</span> 8:00am -
              5:00pm
            </div>
            <div className="flex flex-col items-center justify-center gap-[8px] text-[12px] md:justify-start">
              {/* Skeleton for button */}
              <div className="relative h-full w-full bg-terracotta px-[16px] py-[8px] font-bold text-white">
                <span className="flex w-full items-center justify-center whitespace-normal md:mr-5">
                  <span className="flex items-center justify-center space-x-2">
                    <span>SCHEDULE IN-PERSON VISIT</span>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-[12px]" />
                  </span>
                </span>
              </div>
              <div className="w-full bg-denim px-[30px] py-[8px] font-bold text-white">
                SCHEDULE VIRTUAL VISIT
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-[343px] flex-col items-center gap-[15px] overflow-hidden bg-white md:max-w-full">
        {/* Skeleton for image */}
        <div className="h-[160px] w-full animate-pulse bg-gray-300"></div>

        <div className="flex flex-grow flex-col justify-between gap-[16px] px-[21.54px] pb-[13px] text-center">
          <div className="flex animate-pulse flex-col gap-[8px] text-start">
            {/* Skeleton for title */}
            <div className="mb-2 h-5 w-[80%] rounded bg-gray-300"></div>
            {/* Skeleton for address */}
            <div className="mb-2 h-4 w-[60%] rounded bg-gray-300"></div>
          </div>
          <div className="flex flex-col gap-[8px]">
            {/* Skeleton for hours */}
            <div className="w-full bg-background-highlight px-[10px] py-[8px] text-[14px] font-light">
              <span className="font-normal text-terracotta">Today&apos;s Hours:</span> 8:00am -
              5:00pm
            </div>
            <div className="flex flex-col items-center justify-center gap-[8px] text-[12px] md:justify-start">
              {/* Skeleton for button */}
              <div className="relative h-full w-full bg-terracotta px-[16px] py-[8px] font-bold text-white">
                <span className="flex w-full items-center justify-center whitespace-normal md:mr-5">
                  <span className="flex items-center justify-center space-x-2">
                    <span>SCHEDULE IN-PERSON VISIT</span>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-[12px]" />
                  </span>
                </span>
              </div>
              <div className="w-full bg-denim px-[30px] py-[8px] font-bold text-white">
                SCHEDULE VIRTUAL VISIT
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-[343px] flex-col items-center gap-[15px] overflow-hidden bg-white md:max-w-full">
        {/* Skeleton for image */}
        <div className="h-[160px] w-full animate-pulse bg-gray-300"></div>

        <div className="flex flex-grow flex-col justify-between gap-[16px] px-[21.54px] pb-[13px] text-center">
          <div className="flex animate-pulse flex-col gap-[8px] text-start">
            {/* Skeleton for title */}
            <div className="mb-2 h-5 w-[80%] rounded bg-gray-300"></div>
            {/* Skeleton for address */}
            <div className="mb-2 h-4 w-[60%] rounded bg-gray-300"></div>
          </div>
          <div className="flex flex-col gap-[8px]">
            {/* Skeleton for hours */}
            <div className="w-full bg-background-highlight px-[10px] py-[8px] text-[14px] font-light">
              <span className="font-normal text-terracotta">Today&apos;s Hours:</span> 8:00am -
              5:00pm
            </div>
            <div className="flex flex-col items-center justify-center gap-[8px] text-[12px] md:justify-start">
              {/* Skeleton for button */}
              <div className="relative h-full w-full bg-terracotta px-[16px] py-[8px] font-bold text-white">
                <span className="flex w-full items-center justify-center whitespace-normal md:mr-5">
                  <span className="flex items-center justify-center space-x-2">
                    <span>SCHEDULE IN-PERSON VISIT</span>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-[12px]" />
                  </span>
                </span>
              </div>
              <div className="w-full bg-denim px-[30px] py-[8px] font-bold text-white">
                SCHEDULE VIRTUAL VISIT
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-[343px] flex-col items-center gap-[15px] overflow-hidden bg-white md:max-w-full">
        {/* Skeleton for image */}
        <div className="h-[160px] w-full animate-pulse bg-gray-300"></div>

        <div className="flex flex-grow flex-col justify-between gap-[16px] px-[21.54px] pb-[13px] text-center">
          <div className="flex animate-pulse flex-col gap-[8px] text-start">
            {/* Skeleton for title */}
            <div className="mb-2 h-5 w-[80%] rounded bg-gray-300"></div>
            {/* Skeleton for address */}
            <div className="mb-2 h-4 w-[60%] rounded bg-gray-300"></div>
          </div>
          <div className="flex flex-col gap-[8px]">
            {/* Skeleton for hours */}
            <div className="w-full bg-background-highlight px-[10px] py-[8px] text-[14px] font-light">
              <span className="font-normal text-terracotta">Today&apos;s Hours:</span> 8:00am -
              5:00pm
            </div>
            <div className="flex flex-col items-center justify-center gap-[8px] text-[12px] md:justify-start">
              {/* Skeleton for button */}
              <div className="relative h-full w-full bg-terracotta px-[16px] py-[8px] font-bold text-white">
                <span className="flex w-full items-center justify-center whitespace-normal md:mr-5">
                  <span className="flex items-center justify-center space-x-2">
                    <span>SCHEDULE IN-PERSON VISIT</span>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-[12px]" />
                  </span>
                </span>
              </div>
              <div className="w-full bg-denim px-[30px] py-[8px] font-bold text-white">
                SCHEDULE VIRTUAL VISIT
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CenterCardSkeleton
