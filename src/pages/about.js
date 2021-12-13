import * as React from "react"
// import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { Link } from "gatsby"

import { about, content } from "../styles/about.module.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => {
  return (
    <Layout heroimg="https://i.imgur.com/phRwI02.jpeg" herotitle="About BVAH">
      <Seo title="Home" />

      <div className={content}>
        <div className={about}>
          <h1>Beverly Virgil Animal Hospital</h1>
          <p>
            Situated in Los Angeles, CA, we have been providing exceptional care
            since 1988. Regular office visits are on a walk-in basis so your pet
            can receive the attention they need as soon as possible. We look
            forward to meeting you and your family members!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
