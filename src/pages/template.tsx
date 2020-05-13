import React from 'react'
import { graphql } from 'gatsby'
import { Informations } from '../components/Informations/index'
import { MapContainer } from '../components/MapContainer'
import { container } from '../styles/container'

type TemplateProps = {
  data: Record<string, any>,
}

export default ({ data }: TemplateProps) => (
  <>
    <div className={container}>
      <MapContainer />
      <Informations data={data.contentfulArticles} />
    </div>
  </>
)

export const query = graphql`
query($step: String) {
  contentfulArticles(step: {eq: $step}) {
      id
      title
      step
      text {
        text
      }
      pictures {
        id
        file {
          url
        }
      }
  }
}
`
