import React from 'react'
import { Map, TileLayer } from 'react-leaflet'

export const MapContainer = () => {
  const position = [51.505, -0.09]
  return (
    <Map className="w-screen z-10 h-screen overflow-x-hidden overflow-y-hidden" center={position} zoom={13}>
      <TileLayer url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png" />
    </Map>
  )
}
