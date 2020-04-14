import { graphql, useStaticQuery } from 'gatsby'
import { GraphqlGetSiteMetadataQuery } from '../../graphql-types'

export const useSiteMetadata = () => {
  const { site } = useStaticQuery<GraphqlGetSiteMetadataQuery>(
    graphql`
      query GetSiteMetadata {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  )

  return site?.siteMetadata
}
