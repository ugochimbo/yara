import React, { useEffect, useState } from 'react'
import { fetchEnvironmentalData, isApiError } from './data'
import Map from './components/Map'
import { type Measurement } from './types/measurement'
import './styles/map.css'

const App: React.FC = () => {
  const [measurementData, setMeasurementData] = useState<Measurement[]>([])

  useEffect(() => {
    (async () => {
      try {
        // Treat the search params as constant for now,
        // it should normally be dynamic and stored in state
        const data = await fetchEnvironmentalData({
          date_from: '2000-01-01T00:00:00Z',
          date_to: new Date().toISOString(),
          limit: 100,
          page: 1,
          offset: 0,
          sort: 'desc',
          radius: 1000,
          country: 'de',
          order_by: 'datetime'
        })

        if (isApiError(data)) {
          console.error('Error fetching data:', data)
          return
        }

        setMeasurementData(data as Measurement[])
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    })().catch((error) => {
      console.error('Error in async function:', error)
    })
  }, [])

  return (
      <div className={'app-container'}>
        <h1>Environmental Data in Germany</h1>
        <div className={'map-container'}>
          <Map measurements={measurementData} />
        </div>
      </div>
  )
}

export default App
