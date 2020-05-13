import { graphql, useStaticQuery } from 'gatsby'
import { GraphqlGetAllArticlesQuery } from '../../graphql-types'

export const useGetAllArticles = () => {
  const { allContentfulArticles } = useStaticQuery<GraphqlGetAllArticlesQuery>(
    graphql`
    query {
      allContentfulArticles {
        nodes {
          id
          step
          location {
            lat
            lon
          }
        }
      }
    }
    `,
  )

  return allContentfulArticles.nodes
}