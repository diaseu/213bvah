import * as React from "react"
// import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { Link } from "gatsby"

import { content, about, row, rowtitle } from '../styles/about.module.scss'
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => {
  return (
    <Layout heroimg="https://i.imgur.com/feWu1Qm.jpeg" herotitle="About BVAH">
      {/* <Layout heroimg="https://i.imgur.com/iLyZWTR.jpeg" herotitle="About BVAH"> */}
      <Seo title="Home" />

      <div className={content}>
        <div className={about}>
          {/* About BVAH */}
          <h3>Beverly Virgil Animal Hospital</h3>
          <img
            src="https://i.imgur.com/9Ll0VDT.jpeg"
            alt="Beverly Virgil Animal Hospital Staff Photo"
          />
          {/* <img
            src="https://i.imgur.com/y9FYGgn.jpeg"
            alt="Beverly Virgil Animal Hospital"
          /> */}
          <p>
            Situated at the corner of Beverly Blvd and Virgil Ave in Los
            Angeles, CA, Beverly Virgil Animal Hospital has been providing
            exceptional care to local pets and owners since 1988. Each and every
            staff member is an avid animal lover and pet parent, and we love our
            patients like our own. At Beverly Virgil, we are dedicated to your
            pet's wellbeing by combining compassion and expert professional
            care. Come on in to join the BVAH family!
          </p>
        </div>
        <div className={about}>
          {/* About Staff */}
          <h3 class={rowtitle}>Meet the BVAH Staff</h3>
          <div className={row}>
            <img
              src="https://i.imgur.com/dvobYFp.jpeg"
              alt="Dr Seong Kim DVM"
            />
            <div>
              <h4>Dr. Seong Kim, DVM</h4>
              <p>
                Dr. Seong Kim, DVM was born and raised in South Korea. He
                graduated from University with his veterinary degree. With over
                30 years of veterinary practice, Dr. Seong Kim, DVM brings his
                expertise and professional care to every patient at Beverly
                Virgil. Beverly Virgil and caring for all his patients at
                Beverly Virgil has been his life's passion and dedication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
