import React from 'react'
import { Link } from 'gatsby'
import GatsbyImage from 'gatsby-image'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { useGetAllArticles } from '../queries/articles'
import { linkBtnClasses } from '../styles/button'

export default () => {
  const articles = useGetAllArticles()

  return (
    <Layout>
      <Seo title="Home" />
      <h1 className="text-3xl">Hi people</h1>
      {articles.map(({ title, pictures, text, createdAt, id, updatedAt }) => (
        <div key={id}>
          <h2 className="text-xl">{title}</h2>
          <p>id: {id}</p>
          <p>createdAt: {createdAt}</p>
          <p>updatedAt: {updatedAt}</p>
          <p>text: {text?.text}</p>
          {pictures?.map(picture => (
            <GatsbyImage key={picture.id} fluid={picture.fluid} />
          ))}
        </div>
      ))}
      <Link to="/page-2/" className={linkBtnClasses}>
        Go to page 2
      </Link>
    </Layout>
  )
}
