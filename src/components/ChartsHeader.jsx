import React from 'react'

const ChartsHeader = ({ category, title }) => {
  return (
    <div className='mb-20'>
      <p className='text-gray-400 dark:text-gray-100'>
        {category}
      </p>
      <p className='text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white '>
        {title}
      </p>
    </div>
  )
}

export default ChartsHeader