import React, { useState } from 'react'

import { Seo } from '../components/Seo/index'
import { Informations } from '../components/Informations/index'
import { container } from '../styles/container'
import { MapContainer } from '../components/MapContainer'


export default () => {
  const [hidden, setHidden] = useState(false)

  return (
    <>
      <Seo title="Home" />
      <div className={container}>
        <button className="fixed left-1/2 z-20" type="button" onClick={() => setHidden(value => !value)}>test</button>
        <MapContainer />
        <Informations hidden={hidden} />
      </div>
    </>
  )
}
