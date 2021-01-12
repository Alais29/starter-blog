import React from 'react'
import { Link } from "gatsby"

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';

const About = () => {
  return (
    <Layout title="Starter Blog" subtitle="Build with React and Gatsby">
      <SEO title="About Page" />
      <div>
        <p>Go to <Link to="/">Home</Link></p>
      </div>
    </Layout>
  )
}

export default About
