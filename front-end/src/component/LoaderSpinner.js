import { Loader } from 'lucide-react'
import React from 'react'

const LoaderSpinner = () => {
  return (
    <div className='flex w-full items-center justify-center'>
      <Loader className='animate-spin text-white' size={60} />
    </div>
  )
}

export default LoaderSpinner
