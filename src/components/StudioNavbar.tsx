import React from 'react';
import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

function StudioNavbar(props: any) {
  return (
    <div>
        <div className="flex items-center justify-between p-2">
            <Link 
                href="/"
                className="text-ta-purple flex items-center"
            >
                <ArrowUturnLeftIcon className="w-6 h-6 mr-2 text-ta-purple" />
                Go To Website
            </Link>

            <div className="hidden md:flex p-2 rounded-lg justify-center border-2 border-ta-cream bg-black ">
              <h1 className="font-bold text-white">
               Edit and upload blog contents to your website 📝
              </h1>
              <Link
                href='/'
                className="text-ta-purple font-bold ml-2"
              >
                Subscribe
              </Link>
            </div>
        </div>

        <>{ props.renderDefault(props) }</>
    </div>
  )
}

export default StudioNavbar