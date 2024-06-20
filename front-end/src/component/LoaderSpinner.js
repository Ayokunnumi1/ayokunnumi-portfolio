import { Loader } from 'lucide-react'
import React from 'react'

const LoaderSpinner = () => {
  return (
    <div className='flex w-full items-center justify-center'>
      <Loader className='animate-spin text-custom-green' size={30} />
    </div>
  )
}

export default LoaderSpinner
