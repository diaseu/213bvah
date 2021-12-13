import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { hero, frame, img, content, title } from "../styles/hero.module.scss"

const bvah = 'Beverly Virgil'

const HeroEmbed = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!4v1638996372718!6m8!1m7!1szE0TRWT-rU-FMyvQek1txw!2m2!1d34.07419583741474!2d-118.2864221953614!3f214.37104563393814!4f4.788188286637762!5f0.7820865974627469"
      width="100%"
      height="100%"
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  )
}

const HeroFrame = (heroimg, herotitle) => {
  return (
    <>
      <div className={frame}>
        <div className={content}>
          <div className={title}>
            <h1>
              {herotitle}
              {herotitle === bvah && (
                <>
                  <br />
                  <small>Animal Hospital</small>
                </>
              )}
            </h1>
          </div>
        </div>
      </div>
      <img src={heroimg} alt="" />
    </>
  )
}

const getHero = ({ heroimg, herotitle }) => {
  let frameRender = null
  if (heroimg === "map") {
    frameRender = HeroEmbed()
  } else {
    frameRender = HeroFrame(heroimg, herotitle)
  }
  return frameRender
}

const Hero = ({ heroimg, herotitle }) => {
  const frameRender = getHero({ heroimg, herotitle })

  return <div className={hero}>{frameRender}</div>
}

Hero.propTypes = {
  heroimg: PropTypes.string,
  herotitle: PropTypes.string,
}

Hero.defaultProps = {
  heroimg: `https://i.imgur.com/yyxk357.jpeg`,
  herotitle: bvah,
}

export default Hero
