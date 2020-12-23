import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid


const query = graphql`
    {
      file(relativePath: {eq: "hero-img.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `


const Hero = () => {
  // We will do a quick quey to make sure we receive the image
  // const data = useStaticQuery(query);
  // console.log(data);

  // Now we will do a destructuring:
  const {
    file:{
      childImageSharp:{fluid},
    },
  } = useStaticQuery(query);


  return ( 
  <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
        <div>
          <div className="underline"></div>
            <h1>portfolio test</h1>
            <h4>freelance web and mobile UI/UX Designer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
        </div>
      </article>
      <Image fluid={fluid} className="hero-img"/>
    </div>
  </header>
  )
}

export default Hero
