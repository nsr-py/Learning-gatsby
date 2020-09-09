import React from 'react';
import Layout from '../components/layout';

import {Link, graphql, useStaticQuery} from 'gatsby';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark{
        edges{
          node{
            frontmatter{
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return(
    <Layout>
      <h1> These are all my writings </h1>
      <ol>
        {data.allMarkdownRemark.edges.map(post => {
          return (
            <li>
              <Link to={`/blog/${post.node.fields.slug}`}>
                <h2>{post.node.frontmatter.title}</h2>
              </Link>
              <p>{post.node.frontmatter.date}</p>
            </li>
            )
        })}
      </ol>
    </Layout>
  )
}


export default BlogPage