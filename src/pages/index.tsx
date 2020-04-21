import React, { useState } from 'react'

import { Seo } from '../components/Seo/index'
import { Informations } from '../components/Informations/index'
import { container } from '../styles/container'


export default () => {
  const [test, setTest] = useState(false)

  return (
    <>
      <Seo title="Home" />
      <div className={container}>
        <button className="fixed left-1/2" type="button" onClick={() => setTest(value => !value)}>test</button>
        <Informations hidden={test} />
      </div>
    </>
  )
}
