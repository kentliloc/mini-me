import { cn } from '@/utils/utils'
import Image from 'next/image'
import Link from 'next/link'

const HeaderLinks = ({ variant }: { variant?: string }) => {
  return (
    <div
      className={cn('z-50 flex gap-[36px] text-denim', {
        'flex-col': variant === 'mobile'
      })}>
      <Link href={'https://27404-1.portal.athenahealth.com/'}>
        <p className="flex items-center font-bold hover:brightness-75">
          <span className="flex items-center whitespace-nowrap">
            Patient Portal
            <Image
              src={'/assets/external-link.png'}
              width={17}
              height={16}
              alt="external"
              className="ml-2 h-[16px] flex-shrink-0"
            />
          </span>
        </p>
      </Link>
      <Link href={'https://payment.patient.athenahealth.com/statement/?src=statement'}>
        <p className="flex items-center font-bold hover:brightness-75">
          <span className="flex items-center whitespace-nowrap">
            Pay My Bill
            <Image
              src={'/assets/external-link.png'}
              width={17}
              height={16}
              alt="external"
              className="ml-2 h-[16px] flex-shrink-0"
            />
          </span>
        </p>
      </Link>
      <Link href={'/location'}>
        <p className="flex items-center font-bold hover:brightness-75">
          <span className="flex items-center whitespace-nowrap">Find A Center</span>
        </p>
      </Link>
    </div>
  )
}

export default HeaderLinks
