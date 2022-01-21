import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  footer, credit, widgets, footerhours, footerday, footerinfo, socialmedia
} from "../styles/footer.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAddressBook,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faYelp, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Footer = ({ siteTitle }) => (
  <>
    <footer className={footer}>
      <div className={widgets}>
        <div>
          {/* Widget 2 */}
          <img
            src="https://i.imgur.com/qFoVpfN.png"
            alt="BVAH"
            style={{ maxWidth: "230px", paddingTop: "2vh", margin: "0 auto" }}
          />
          <h4>
            Beverly Virgil
            <br />
            <small>Animal Hospital</small>
          </h4>
        </div>

        <div className={footerinfo}>
          {/* <h3>Come on in</h3>
          <img
            src="https://i.imgur.com/ciVBmKD.png"
            alt="Beverly Virgil"
            style={{ marginBottom: `1.45rem`, maxWidth: "300px" }}
          /> */}
          <h3>Come Visit Us</h3>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" />
            <i>
              3363 West First Street
              <span> Los Angeles, CA 90004</span>
            </i>
          </p>
          <p>
            <FontAwesomeIcon icon={faPhoneAlt} size="1x" />
            <i>(213) 387 - 3388</i>
          </p>
          <p className={socialmedia}>
            <a href="http://facebook.com/213petsanimalhospital">
              <FontAwesomeIcon icon={faFacebook} size="1x" />
            </a>
            <a href="https://www.yelp.com/biz/beverly-virgil-animal-hospital-los-angeles">
              <FontAwesomeIcon icon={faYelp} size="1x" />
            </a>
            <a href="https://www.instagram.com/bvah_/?hl=en">
              <FontAwesomeIcon icon={faInstagram} size="1x" />
            </a>
          </p>
        </div>

        <div className={footerhours}>
          <h3>Hours</h3>
          <div className={footerday}>
            <p>Monday</p>
            <p>8:00 am - 6:00 pm</p>
          </div>
          <div className={footerday}>
            <p>Tuesday</p>
            <p>8:00 am - 6:00 pm</p>
          </div>
          <div className={footerday}>
            <p>Wednesday</p>
            <p>8:00 am - 6:00 pm</p>
          </div>
          <div className={footerday}>
            <p>Thursday</p>
            <p>8:00 am - 6:00 pm</p>
          </div>
          <div className={footerday}>
            <p>Friday</p>
            <p>8:00 am - 6:00 pm</p>
          </div>
          <div className={footerday}>
            <p>Saturday</p>
            <p>9:00 am - 4:00 pm</p>
          </div>
          <div className={footerday}>
            <p>Sunday</p>
            <p>Closed</p>
          </div>
        </div>
      </div>
      <div className={credit}>
        © {new Date().getFullYear()}
        {` `}
        <a href="https://www.disedesign.com">Dise Design</a>
      </div>
    </footer>
  </>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
