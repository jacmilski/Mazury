import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import Arrow from '../../images/Arrow.svg'
import { Link } from 'gatsby';
import {
    StyledLink,
    Container,
} from './MainArticleStyle';





const MainArticle=() => {
    const data = useStaticQuery(graphql`{
  site {
    siteMetadata {
      title
    }
  }
  file(name: {eq: "lake-main"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}
`);
    return (
      <Container>
      <h1>{data.site.siteMetadata.title}</h1>
      <div>
      <h4>W tym temacie {data.allMarkdownRemark.totalCount} artykuł(ów)</h4>
      <StyledLink>
          <Link to="/">Więcej informacji <img src={Arrow} alt=''/></Link>
      </StyledLink>
          </div>
      <div>
        <p><GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="jezioro" /></p>
          

      </div>
      </Container>
    );
}
export default MainArticle