import React from 'react'

function GovtCard({text}) {
  return (
    <div>
        <section className="w-85 mt-12">
  <div className="max-w-screen-lg mx-auto">
    <div className="shadow-xl rounded-xl p-6 bg-slate-100">
      {/* <h4 className="text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl mt-4">Rate your experience</h4> */}
      <p className="text-base leading-relaxed text-gray-500 mt-1">
        {text}
      </p>
      <div className="flex justify-center gap-1 mt-1">
        {/* Add your content here */}
      </div>
      <div className="flex  mt-2 lg:justify-center">
        <div className="rounded-lg sm:mt-0">
          <button className="block px-10 py-1.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            Decline
          </button>
        </div>
        <div className="rounded-lg sm:mt-0 sm:ml-1">
          <button className="block px-10 py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Accept
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default GovtCard