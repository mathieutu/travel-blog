import React from 'react'

import { Seo } from '../components/Seo/index'
import { container } from '../styles/container'
import { MapContainer } from '../components/MapContainer'


export default () => {

  return (
    <>
      <Seo title="Home" />
      <div className={container}>
        <button className="fixed left-1/2 z-20" type="button">test</button>
        <MapContainer />
      </div>
    </>
  )
}
