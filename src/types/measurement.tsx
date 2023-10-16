export interface Measurement {
  locationId: number
  location: string
  parameter: string
  value: number
  date: {
    utc: string
    local: string
  }
  unit: string
  coordinates: {
    latitude: number
    longitude: number
  }
  country: string
  city: string | null
  isMobile: boolean
  isAnalysis: boolean | null
  entity: string
  sensorType: string
}

export interface MeasurementApiParams {
  date_from: string
  date_to: string
  limit: number
  page: number
  offset: number
  sort: string
  radius: number
  country: string
  order_by: string
}
