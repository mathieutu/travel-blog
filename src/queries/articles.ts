import { graphql, useStaticQuery } from 'gatsby'
import { GraphqlGetAllArticlesQuery } from '../../graphql-types'

export const useGetAllArticles = () => {
  const { allContentfulArticles } = useStaticQuery<GraphqlGetAllArticlesQuery>(
    graphql`
      query GetAllArticles {
        allContentfulArticles {
          nodes {
            id,
            title,
            createdAt,
            updatedAt,
            text {
              text,
            },
            pictures {
              id,
              fluid(maxWidth: 300) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }   
        }
      }
    `,
  )

  return allContentfulArticles.nodes
}
