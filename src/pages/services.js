import * as React from "react"
// import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { Link } from "gatsby"

import {
  services, description
} from "../styles/services.module.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => {
  return (
    <Layout heroimg="https://i.imgur.com/b2JJfSl.jpeg" herotitle="Services">
      <Seo title="Home" />

      <div className={services}>
        <div className={description}>
          <p>
            Situated in Los Angeles, CA, we have been providing exceptional care
            since 1988. Regular office visits are on a walk-in basis so your pet
            can receive the attention they need as soon as possible. We look
            forward to meeting you and your family members!
          </p>
          <h2>We love our patients!</h2>
        </div>
      </div>
    </Layout>
  )
}

export default About
