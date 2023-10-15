import { type ReportHandler } from 'web-vitals'

const reportWebVitals = async (onPerfEntry?: ReportHandler): Promise<void> => {
  if (onPerfEntry != null || onPerfEntry !== undefined) {
    const webVitals = await import('web-vitals')
    webVitals.getCLS(onPerfEntry)
    webVitals.getFID(onPerfEntry)
    webVitals.getFCP(onPerfEntry)
    webVitals.getLCP(onPerfEntry)
    webVitals.getTTFB(onPerfEntry)
  }
}

export default reportWebVitals
