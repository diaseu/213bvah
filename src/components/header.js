import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBars,
  faTimes
} from "@fortawesome/free-solid-svg-icons"
import "../styles/header.scss"

const Header = ({ siteTitle }) => {
  const [mobileNav, setMobilenav] = useState(false);
  const handleClick = () => setMobilenav(!mobileNav)
  const closeMobileMenu = () => setMobilenav(false)

  return (
    <>
      <header className="header__menu">
        <div className="header__logo">
          <Link to="/">
            {/* <StaticImage
          src="../images/dise-logo.svg"
          width={50}
          quality={95}
          // formats={["auto", "webp", "avif"]}
          alt="Logo"
          // style={{ marginBottom: `1.45rem` }}
          /> */}
            <img
              src="https://i.imgur.com/qFoVpfN.png"
              alt="BVAH"
            />
            {/* <Navlogo className={navlogo} style={{ fill: "#fff", marginLeft: '2vh' }} /> */}
          </Link>
        </div>

        <nav className="header__nav">
          <ul className={mobileNav ? "navMenu active" : "navMenu"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="mobileMenu" onClick={handleClick}>
            {mobileNav ? (
              <FontAwesomeIcon icon={faTimes} className="icon" size="2x" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="icon" size="2x" />
            )}
          </div>
        </nav>
      </header>
    </>
  )
        }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
