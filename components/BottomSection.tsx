import { cn } from '@/utils/utils'
import Image from 'next/image'

const BottomSection = ({ image, title, message, alt, button }: BottomSectionProps) => {
  return (
    <div className="flex w-full flex-col md:flex-row">
      <div tabIndex={0} className="relative min-h-[204px] md:min-h-[392px] md:w-1/2">
        <Image src={image} alt={alt} fill className="object-cover" />
      </div>
      <div
        className={cn(
          'bg-denim px-[25px] pb-[40px] pt-[27px] text-white md:w-1/2 md:pb-[113px] md:pl-[64px] md:pt-[114px]',
          { 'bg-terracotta': button }
        )}>
        <div className="flex max-w-[585px] flex-col gap-[12px]">
          <h3
            tabIndex={0}
            role="presentation"
            aria-hidden="false"
            className="text-[32px] leading-[38.4px] md:text-[36px] md:leading-[48.2px]">
            {title}
          </h3>
          <p tabIndex={0} className="md:pr-5">
            {message}
          </p>
          {button && (
            <a
              href={`tel:${button}`}
              className='font-bold" max-w-[280px] border border-white px-[28px] py-[14px]'>
              CALL NOW {button}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default BottomSection
