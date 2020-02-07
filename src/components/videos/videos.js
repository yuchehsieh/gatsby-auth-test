import React from "react"
import { getUser } from "../../services/auth"
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Videos = () => {

  const response = useStaticQuery(getMdx);

  const body = response.allMdx.edges[0].node.body;

  // console.log(response);
  console.log(body);

  return (
    <>
      <h1>Videos pages</h1>
      <ul>
        {/*<li>Name: {getUser().name}</li>*/}
        {/*<li>E-mail: {getUser().email}</li>*/}
      </ul>
      <MDXRenderer>
        {body}
      </MDXRenderer>
    </>
  )
}

export const getMdx = graphql`
  {
    allMdx {
      edges {
        node {
          frontmatter {
            author
          }
          body
        }
      }
    }
  }

`


export default Videos;