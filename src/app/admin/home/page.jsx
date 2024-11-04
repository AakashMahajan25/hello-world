import React from 'react'

const page = () => {
  return (
    <div className='flex flex-wrap gap-6 p-8'>
      <div className='bg-blue-100/10 rounded-lg p-6 flex-1 min-w-[250px]'>
        <h3 className='text-xl font-semibold text-blue-100'>Contact Forms</h3>
        <p className='text-3xl font-bold text-blue-50 mt-2'>156</p>
        <p className='text-sm text-blue-200/60 mt-1'>Total submissions</p>
      </div>

      <div className='bg-blue-100/10 rounded-lg p-6 flex-1 min-w-[250px]'>
        <h3 className='text-xl font-semibold text-blue-100'>Retailers</h3>
        <p className='text-3xl font-bold text-blue-50 mt-2'>48</p>
        <p className='text-sm text-blue-200/60 mt-1'>Registered retailers</p>
      </div>

      <div className='bg-blue-100/10 rounded-lg p-6 flex-1 min-w-[250px]'>
        <h3 className='text-xl font-semibold text-blue-100'>In-house Warranties</h3>
        <p className='text-3xl font-bold text-blue-50 mt-2'>324</p>
        <p className='text-sm text-blue-200/60 mt-1'>Active warranties</p>
      </div>

      <div className='bg-blue-100/10 rounded-lg p-6 flex-1 min-w-[250px]'>
        <h3 className='text-xl font-semibold text-blue-100'>Retailer Warranties</h3>
        <p className='text-3xl font-bold text-blue-50 mt-2'>892</p>
        <p className='text-sm text-blue-200/60 mt-1'>Active warranties</p>
      </div>
    </div>
  )
}

export default page
