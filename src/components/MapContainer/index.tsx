import React from 'react'
import { Map, TileLayer, Marker, Polyline } from 'react-leaflet'
import { useGetAllArticles } from '../../queries/location'
import { navigate } from 'gatsby'

export const MapContainer = () => {
  const data = useGetAllArticles()
  const position = [data[0].location.lat, data[0].location.lon]

  return (
    <Map className="w-screen z-10 h-screen overflow-x-hidden overflow-y-hidden" center={position} zoom={6} minZoom={5} maxZoom={20}>
      <TileLayer url="https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png" />
      {data.map((data) => (
        <Marker onClick={() => navigate(`/${data.id}`)} position={[data.location.lat, data.location.lon]} />))}
      <Polyline positions={data.map(({ location }) => [location.lat, location.lon])} />
    </Map>
  )
}
