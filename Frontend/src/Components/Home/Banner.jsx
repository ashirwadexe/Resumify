import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div class="flex flex-wrap items-center justify-center w-full py-2 font-medium text-sm text-white text-center bg-gradient-to-b from-orange-500 to-orange-600">
      <p>Templates are live on resumify!</p>
      <Link to='/app?state=login' class="flex items-center gap-1 px-3 py-1 text-xs rounded-md text-orange-600 bg-white hover:bg-slate-200 transition active:scale-95 ml-3">
          Check it out
          <ArrowRight className='size-4'/>
      </Link>
    </div>
  )
}

export default Banner