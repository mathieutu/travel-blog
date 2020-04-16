import React from 'react'

import { Seo } from '../components/Seo/index'
import { Informations } from '../components/Informations/index'
import { container } from '../styles/container'


export default () => {
  return (
    <>
      <Seo title="Home" />
      <div className={container}>
        <Informations />
      </div>
    </>
  )
}
