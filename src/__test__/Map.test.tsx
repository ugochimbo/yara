import React from 'react'
import { render, screen } from '@testing-library/react'
import Map from '../components/Map'
import { type Measurement } from '../types/measurement'

const measurementsStub: Measurement[] = [
  {
    locationId: 1,
    location: 'Location 1',
    parameter: 'Parameter 1',
    value: 10.5,
    date: {
      utc: '2023-10-15T10:00:00Z',
      local: '2023-10-15T12:00:00+02:00'
    },
    unit: 'µg/m³',
    coordinates: {
      latitude: 52.5200,
      longitude: 13.4050
    }
  },
  {
    locationId: 2,
    location: 'Location 2',
    parameter: 'Parameter 2',
    value: 8.7,
    date: {
      utc: '2023-10-15T11:00:00Z',
      local: '2023-10-15T13:00:00+02:00'
    },
    unit: 'µg/m³',
    coordinates: {
      latitude: 48.8566,
      longitude: 2.3522
    }
  },
  {
    locationId: 3,
    location: 'Location 3',
    parameter: 'Parameter 3',
    value: 15.2,
    date: {
      utc: '2023-10-15T12:00:00Z',
      local: '2023-10-15T14:00:00+02:00'
    },
    unit: 'µg/m³',
    coordinates: {
      latitude: 51.5074,
      longitude: -0.1278
    }
  },
  {
    locationId: 4,
    location: 'Location 4',
    parameter: 'Parameter 4',
    value: 12.3,
    date: {
      utc: '2023-10-15T13:00:00Z',
      local: '2023-10-15T15:00:00+02:00'
    },
    unit: 'µg/m³',
    coordinates: {
      latitude: 40.7128,
      longitude: -74.0060
    }
  },
  {
    locationId: 5,
    location: 'Location 5',
    parameter: 'Parameter 5',
    value: 9.8,
    date: {
      utc: '2023-10-15T14:00:00Z',
      local: '2023-10-15T16:00:00+02:00'
    },
    unit: 'µg/m³',
    coordinates: {
      latitude: 34.0522,
      longitude: -118.2437
    }
  }
] as Measurement[]

// Mock axios: Not really needed for this test, but it's a good example
jest.mock('axios', () => {
  return {
    get: jest.fn(async () => await Promise.resolve({ data: measurementsStub }))
  }
})

test('renders map with markers for measurements', () => {
  render(<Map measurements={measurementsStub} />)

  // Check if the map is rendered
  const mapElement = screen.getByRole('figure')
  expect(mapElement).toBeInTheDocument()

  // Check if markers for measurements are present
  for (const measurement of measurementsStub) {
    const marker = screen.getByText(`Value: ${measurement.value}`)
    const unit = screen.getByText(`Unit: ${measurement.unit}`)
    const date = screen.getByText(`Date: ${measurement.date.local}`)

    expect(marker).toBeInTheDocument()
    expect(unit).toBeInTheDocument()
    expect(date).toBeInTheDocument()
  }
})
