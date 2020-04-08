import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { linkBtnClasses } from '../styles/button'

export default () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/" className={linkBtnClasses}>Go back to the homepage</Link>
  </Layout>
)
