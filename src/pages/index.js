import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => {
  return(
    <Layout>
      <h1> Hello everyone </h1>
      <p>Need a nerd friend: <a href='/contact'>Contact me </a></p>
      <p>Get to know <Link to='/about'>me </Link></p>
    </Layout>
  )
}

export default IndexPage;