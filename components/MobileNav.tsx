import { cn } from '@/utils/utils'
import Image from 'next/image'
import CustomBurgerMenu from './CustomBurgerMenu'
import Link from 'next/link'

const MobileNav = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'mx-auto flex h-[80px] w-full items-center justify-between',
        className
      )}>
      <CustomBurgerMenu />

      <div>
        <Link href="/">
          <Image
            src={'/assets/me-logo.png'}
            width={214.29}
            height={30}
            alt="MedExpress Urgent Care Logo"
          />
        </Link>
      </div>
    </div>
  )
}

export default MobileNav
