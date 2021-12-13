import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { alert, closebtn, menu, logo, nav, navMenu } from "../styles/header.module.scss"

const Header = ({ siteTitle }) => (
  <>
  <div className={alert}>
    <span 
      className={closebtn} 
      // onClick={this.onClick} 
      // style={{ display: this.state.showStore ? 'block' : 'none' }}
    >
      &times;
    </span>
    <span>COVID INFO</span> 
  </div>
  <header className={menu}>
    <div className={logo}>
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
          style={{ maxWidth: "60px", paddingTop: "2vh" }}
        />
        {/* <Navlogo className={navlogo} style={{ fill: "#fff", marginLeft: '2vh' }} /> */}
      </Link>
    </div>

    <nav className={nav}>
      <ul className={navMenu}>
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
    </nav>
  </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
