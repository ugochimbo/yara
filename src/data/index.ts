import axios, { type AxiosResponse } from 'axios'
import { type Measurement, type MeasurementApiParams } from '../types/measurement'

// Should be in .env file
const API_URL = 'https://api.openaq.org/v2/measurements'

export const isApiError = (data: any): boolean => {
  return (data as ApiError).message !== '' && (data as ApiError).message !== undefined
}

export interface ApiError {
  message: string
}

export const fetchEnvironmentalData = async (params: MeasurementApiParams): Promise<Measurement[] | ApiError> => {
  try {
    const response: AxiosResponse<{ results: Measurement[] }> = await axios.get(API_URL, { params })

    if (response.status !== 200) {
      return { message: 'response error' }
    }

    return response.data.results
  } catch (error: any) {
    return { message: error.message }
  }
}
