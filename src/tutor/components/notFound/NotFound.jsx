import React from 'react'
import { FaSearch } from 'react-icons/fa'

const NotFound = ({title, description}) => {
  return (
    <main className="w-full grid min-h-3/4 place-items-center px-6 py-8">
      <div className="text-center">
        <h1 className="mt-4 text-3xl foFnt-bold tracking-tight text-indigo-300 sm:text-5xl">
          <FaSearch />
        </h1>

        <h1 className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          No {title} Found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          {description}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/tutor/home"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </a>
          <a href="/" className="text-sm font-semibold text-gray-900">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  )
}

export default NotFound