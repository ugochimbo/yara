import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { type Measurement } from '../types/measurement'
import { type LatLngTuple, Icon } from 'leaflet'

import 'leaflet/dist/leaflet.css'

interface MapProps {
  measurements: Measurement[]
}

const customIcon = new Icon({
  iconUrl: require('../icons/marker.png'),
  iconSize: [35, 35]
})

const Map: React.FC<MapProps> = ({ measurements }: MapProps) => {
  const position: LatLngTuple = [51.1657, 10.4515]

  return (
        <MapContainer center={position} zoom={6}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {measurements.map((measurement, index) => (
                <Marker
                    key={index}
                    position={[measurement.coordinates.latitude, measurement.coordinates.longitude]}
                    icon={customIcon}
                >
                    <Popup>
                        <div>
                            <p>Entity: {measurement.entity}</p>
                            <p>Sensor Type: {measurement.sensorType}</p>
                            <p>Value/Unit: {measurement.value} {measurement.unit}</p>
                            <p>Date: {measurement.date.local}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
  )
}

export default Map
