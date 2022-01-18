import * as React from "react"
// import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { Link } from "gatsby"

import { content, about, row, rowtitle } from '../styles/about.module.scss'
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => {
  return (
    <Layout heroimg="https://i.imgur.com/phRwI02.jpeg" herotitle="About BVAH">
      <Seo title="Home" />

      <div className={content}>
        <div className={about}>
          {/* About BVAH */}
          <h3>About Beverly Virgil Animal Hospital</h3>
          <img
            src="https://i.imgur.com/rDlkw3m.jpeg"
            alt="Beverly Virgil AH Staff"
          />
          <p>
            Situated in Los Angeles, CA, Beverly Virgil Animal Hospital have
            been providing exceptional care to local pets and owners since 1988. Each member on our staff is an avid animal lover and pet parent, and we love our patients like our own. At Beverly Virgil, we are dedicated to your pet's wellbeing by combing compassion and expert professional care. Come on in to join our family!
          </p>
        </div>
        <div className={about}>
          {/* About Staff */}
          <h3 class={rowtitle}>Meet the BVAH Staff</h3>
          <div className={row}>
            <img src="https://i.imgur.com/haeyAAo.jpeg" alt="" />
            <p>
              <h4>Dr. Seong Kim, DVM</h4>
              Dr. Seong Kim, DVM was born and raised in South Korea. He
              graduated from University with his veterinary degree. With over 30
              years of veterinary practice, Dr. Seong Kim, DVM brings his
              expertise and professional care to every patient at Beverly
              Virgil. Beverly Virgil and caring for all his patients at Beverly
              Virgil has been his life's passion and dedication.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
