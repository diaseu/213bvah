/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"

import Hero from "./hero"
import Header from "./header"
import Footer from "./footer"
import "../styles/layout.scss"
import { content, footer } from "../styles/layout.module.scss"

const Layout = ({ children, heroimg, herotitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Hero heroimg={heroimg} herotitle={herotitle} />
      {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      > */}
      <main>{children}</main>
      <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />
      
      {/* </div> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  heroimg: PropTypes.string,
  herotitle: PropTypes.string,
}

Layout.defaultProps = {
  heroimg: `https://i.imgur.com/yyxk357.jpeg`,
  herotitle: `home`
}

export default Layout
