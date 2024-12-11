import { cn } from '@/utils/utils'
import Link from 'next/link'

const Button = ({ name, variant }: ButtonProps) => {
  return (
    <>
      {name === 'FIND A CENTER' || name === 'GET STARTED' ? (
        <label className="relative cursor-pointer">
          <input type="checkbox" className="peer hidden" />
          <Link
            href={`/${name === 'FIND A CENTER' ? 'location' : 'virtual-visits'}`}
            className={cn(
              'border border-terracotta bg-white px-[28px] py-[14px] font-bold capitalize leading-[25.2px] text-terracotta hover:bg-terracotta hover:text-white',
              { 'bg-cream': variant === 'btn-2' },
              {
                'bg-terracotta leading-[19.2px] text-white hover:bg-none hover:text-terracotta':
                  variant === 'btn-3'
              },
              'peer-checked:bg-terracotta peer-checked:text-white'
            )}>
            {name}
          </Link>
        </label>
      ) : (
        <label className="relative flex w-full cursor-pointer items-center justify-center">
          <input type="checkbox" className="peer hidden" />
          <button
            className={cn(
              'border border-terracotta px-[28px] py-[14px] font-bold capitalize leading-[25.2px] text-terracotta hover:bg-terracotta hover:text-white',
              { 'bg-cream': variant === 'btn-2' },
              'w-full max-w-[400px] text-[25px] leading-[19.2px] hover:bg-white hover:text-terracotta peer-checked:bg-white peer-checked:text-terracotta',
              { 'bg-terracotta text-white': variant === 'btn-3' }
            )}>
            {name}
          </button>
        </label>
      )}
    </>
  )
}

export default Button
