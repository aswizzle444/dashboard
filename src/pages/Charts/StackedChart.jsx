import React from 'react';
import { Stacked } from '../../components';
import { ChartsHeader } from '../../components'

const StackedChart = () => {
  return (



    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>

      <ChartsHeader category='Stacked Chart' title='Budget vs Expenses' />

      < Stacked />
    </div>
  )
}

export default StackedChart