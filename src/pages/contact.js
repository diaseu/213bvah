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
import { start, map, contact, location, info, hours, details, day, time, flexcolumn, flexrow, phone, infohour, infoday } from "../styles/contact.module.scss"
// import * from '../styles/contact.module.scss'
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => {
  return (
    <Layout heroimg="map">
      <Seo title="Home" />

      <div className={contact}>
        <div className={location}>
          <h3>Contact Beverly Virgil Animal Hospital</h3>
        </div>
        <div className={hours}>
          <div className={details}>
            {/* <h3>Beverly Virgil Animal Hospital</h3> */}
            <div className={flexrow}>
              {/* Column 1 */}
              <div className={flexcolumn}>
                <h4>Info</h4>

                <div className={phone}>
                  <p>
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" />
                    <i>
                      3363 West First Street
                      <br />
                      Los Angeles, CA 90004
                    </i>
                  </p>
                  <p></p>
                  <p>
                    <FontAwesomeIcon icon={faPhoneAlt} size="1x" />
                    <i>(213) 387 - 3388</i>
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faFax} size="1x" />
                    <i>(213) 387 - 9619</i>
                  </p>
                </div>
                <button>Call Us Now!</button>
              </div>
              {/* Column 2 */}
              <div className={flexcolumn}>
                <h4>Office Hours</h4>
                <div className={infoday}>
                  <p>Monday</p>
                  <p>8:00 am - 6:00 pm</p>
                </div>
                <div className={infoday}>
                  <p>Tuesday</p>
                  <p>8:00 am - 6:00 pm</p>
                </div>
                <div className={infoday}>
                  <p>Wednesday</p>
                  <p>8:00 am - 6:00 pm</p>
                </div>
                <div className={infoday}>
                  <p>Thursday</p>
                  <p>8:00 am - 6:00 pm</p>
                </div>
                <div className={infoday}>
                  <p>Friday</p>
                  <p>8:00 am - 6:00 pm</p>
                </div>
                <div className={infoday}>
                  <p>Saturday</p>
                  <p>8:00 am - 1:00 pm</p>
                </div>
                <div className={infoday}>
                  <p>Sunday</p>
                  <p>Closed</p>
                </div>
              </div>
              {/* Column 3 */}
              <div className={flexcolumn}>
                <h4>Doctor's Hours</h4>
                <div className={infoday}>
                  <p>Monday</p>
                  <p>8:00 am - 6:00 pm</p>
                </div>
                <div className={infoday}>
                  <p>Tuesday</p>
                  <p>8:00 am - 6:00 pm</p>
                </div>
                <div className={infoday}>
                  <p>Wednesday</p>
                  <p>8:00 am - 6:00 pm</p>
                </div>
                <div className={infoday}>
                  <p>Thursday</p>
                  <p>8:00 am - 6:00 pm</p>
                </div>
                <div className={infoday}>
                  <p>Friday</p>
                  <p>8:00 am - 6:00 pm</p>
                </div>
                <div className={infoday}>
                  <p>Saturday</p>
                  <p>8:00 am - 1:00 pm</p>
                </div>
                <div className={infoday}>
                  <p>Sunday</p>
                  <p>Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
          <img
            src="https://i.imgur.com/ciVBmKD.png"
            alt="Beverly Virgil"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default About
