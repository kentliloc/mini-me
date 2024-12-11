import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Alert = ({ id }: { id: string }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-terracotta px-[25px] py-5 md:px-[70px]">
      <div className="flex max-w-[1170px] gap-2 text-white">
        {id === 'RCV' && (
          <>
            <div>
              <FontAwesomeIcon icon={faTriangleExclamation} className="text-white" />
            </div>
            <div>
              <p>
                The Richmond – Nine Mile Rd. center is temporarily not offering urgent care
                services. This center will only offer urine drug screens and breath alcohol testing
                services Monday through Friday until further notice. All patients seeking urgent
                care services, please visit our nearby center located on{' '}
                <span className="underline">
                  <Link href={'/location/va/richmond/rmv'}>8040 W. Broad St</Link>
                </span>
                . Our apologies for any inconvenience.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Alert
