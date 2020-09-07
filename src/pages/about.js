import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';

const About = () => {
  return(
    <Layout>
      <h1> Navdeep Singh Rathore </h1> 
      <h3> I am just a newbie coder making stuff for fun</h3>
      <p><Link to='/contact'>Contact me</Link></p>
    </Layout>
  )
}

export default About;