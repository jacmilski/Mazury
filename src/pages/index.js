import React from "react"
import Layout from "../components/layout"
import MainArticle from "../components/MainArticle/MainArticle"
import Article from "../components/Article/Article"
import { graphql } from 'gatsby';

export const query = graphql`{
  site {
    siteMetadata {
      title
    }
  }
  file(name: {eq: "river"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          date
          text
          featuredImage {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
}
`;

const IndexPage = ({ data }) => {
  const date = data.allMarkdownRemark.edges;
  console.log(data)
  return (
    <Layout>
      <MainArticle />
      {date.map(item => {
        return (
          <Article
            hour={item.node.frontmatter.date}
            title={item.node.frontmatter.title}
            text={item.node.frontmatter.text}
            image={item.node.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
          />
        );
      }
      )}
    </Layout>
  );
}
export default IndexPage