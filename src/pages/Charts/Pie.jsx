import React from 'react';
import { ChartsHeader } from '../../components';
import { pieChartData } from '../../data/dummy';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip, Font } from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../contexts/ContextProvider';



const Pie = () => {

  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>

      <ChartsHeader category='Pie' title='Project Cost breakdown' />

      <div className='w-full'>
        <AccumulationChartComponent
          id='chart-pie'
          data={pieChartData}
          legendSettings={{ visible: true, background: 'white' }}
          height='full'
          background={currentMode === 'Dark' ? '#33373E' : "#FFF"}
          tooltip={{ enable: true }}
        >
          <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name='Sale'
              dataSource={pieChartData}
              xName="x"
              yName="y"
              innerRadius='40%'
              startAngle={0}
              endAngle={360}
              radius='70%'
              explode
              explodeIndex={10}
              dataLabel={{
                visible: true,
                name: 'text',
                position: 'Inside',
                font: {
                  fontWeight: '600',
                  color: '#fff'
                },
              }}

            />
          </AccumulationSeriesCollectionDirective>

        </AccumulationChartComponent>
      </div>
    </div>
  )
}

export default Pie