import * as React from "react"
// import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCoffee,
  faAddressBook,
  faAirFreshener,
  faAmbulance,
  faAtom,
  faMapMarkerAlt,
  faFax,
  faCapsules,
  faPhoneAlt
} from "@fortawesome/free-solid-svg-icons"
import { start, map, contact, location, info, hours, details, day, time, flexcolumn, flexrow } from "../styles/contact.module.scss"
// import * from '../styles/contact.module.scss'
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => {
  return (
    <Layout heroimg="map">
      <Seo title="Home" />

      <div className={start}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.837388546825!2d-118.28873268471655!3d34.07368252404715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c768bf284183%3A0x43b6ac0a95cf4f2f!2sBeverly%20Virgil%20Animal%20Hospital!5e0!3m2!1sen!2sus!4v1638492520546!5m2!1sen!2sus"
          width="100%"
          height="450"
          className={map}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        <div className={info}>
          <h3>Contact Us</h3>
          <span>
            <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" />
            <i>
              3363 West First Street
              <br /> Los Angeles, CA 90004
            </i>
          </span>
          <span>
            <FontAwesomeIcon icon={faPhoneAlt} size="1x" />
            <i>(213) 387 - 3388</i>
          </span>
          <span>
            <FontAwesomeIcon icon={faFax} size="1x" />
            <i>(213) 387 - 9619</i>
          </span>
          <button>Call Us Now!</button>
        </div>
      </div>

      <div className={contact}>
        <div className={location}>
          <h2>Beverly Virgil Animal Hospital</h2>
        </div>
        <div className={hours}>
          <img
            src="https://i.imgur.com/ciVBmKD.png"
            alt="Beverly Virgil"
            style={{ marginBottom: `1.45rem` }}
          />
          <div className={details}>
            {/* <h3>Beverly Virgil Animal Hospital</h3> */}
            <div className={flexrow}>
              <div className={flexcolumn}>
                <h3>Office Hours</h3>
                <span className={day}>
                  Mon - Fri
                  <i className={time}> 8 am - 6 pm</i>
                </span>
                <span className={day}>
                  Sat
                  <i className={time}> 9 am - 4 pm</i>
                </span>
                <span className={day}>
                  Sun
                  <i className={time}> Closed</i>
                </span>
              </div>
              <div className={flexcolumn}>
                <h3>Doctor's Hours</h3>
                <span className={day}>
                  Mon - Fri
                  <i className={time}> 8 am - 12 pm</i>
                </span>
                <span className={day}>
                  Mon - Fri
                  <i className={time}> 2 pm - 6 pm</i>
                </span>
                <span className={day}>
                  Sat
                  <i className={time}> 9 am - 4 pm</i>
                </span>
                <span className={day}>
                  Sun
                  <i className={time}> Closed</i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
