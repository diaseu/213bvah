import * as React from "react"
// import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faStethoscope,
  faClinicMedical,
  faSyringe,
  faTooth,
  faHeartbeat,
  faPrescription,
  faHeart,
  faVials,
  faBone,
  faCalendarCheck,
  faCapsules,
  faSoap,
  faHandHoldingMedical
} from "@fortawesome/free-solid-svg-icons"
import {
  content, services, description, row, icon, inline
} from "../styles/services.module.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => {
  return (
    <Layout heroimg="https://i.imgur.com/b2JJfSl.jpeg" herotitle="Services">
      <Seo title="Home" />

      <div className={content}>
        <div className={description}>
          <h3>Our Services</h3>
          <p>
            Beverly Virgil is a full-service veterinary practice, ready to
            search all your pet's needs. Most of our services can be provided in
            a walk-in basis during doctor's hours, but a few of our services do
            require appointments as noted below. For <b>new clients</b>, please
            feel free to <a href="">download our new patient intake form</a> to
            fill out ahead of time. Our services include:
          </p>

          <div className={services}>
            <div className={row}>
              <div>
                <FontAwesomeIcon
                  icon={faClinicMedical}
                  className={icon}
                  size="4x"
                />
                <h4>Wellness Care</h4>
                <p>
                  Wellness exams are an essential part of ensuring your pet's
                  health. We provide comprehensive exams as part of annual
                  checkups, in addition to other preventative care!
                </p>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faStethoscope}
                  className={icon}
                  size="4x"
                />
                <h4>Preventative Care</h4>
                <p>
                  Preventative care is crucial to catch problems before they
                  become more serious. Annual wellness exams is the first step
                  to preventative care, but let us tailor a customized care plan
                  for your pet's optimal health!
                </p>
              </div>
              <div>
                <FontAwesomeIcon icon={faSyringe} className={icon} size="4x" />
                <h4>Vaccinations</h4>
                <p>
                  Vaccinations are an important part of preventative care! Keep
                  your pet's immune system strong to prevent deadly diseases.
                </p>
              </div>
            </div>
            <div className={row}>
              <div>
                <FontAwesomeIcon icon={faVials} className={icon} size="4x" />
                <h4>Diagnostics</h4>
                <p>
                  Fully equipped with diagnostic tools from digital x-rays to
                  ultrasounds to blood tests, we use our full facility to find
                  out what your pet can't tell us.
                </p>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faHeartbeat}
                  className={icon}
                  size="4x"
                />
                <h4>Surgery</h4>
                <p>
                  Our staff is dedicated to making patient safety and comfort
                  our top priority, and our experienced surgeon provides skilled
                  pain management during and after all procedures.
                  <span>
                    <FontAwesomeIcon
                      icon={faCalendarCheck}
                      className={inline}
                      size="1x"
                    />
                    Appointment needed
                  </span>
                </p>
              </div>
              <div>
                <FontAwesomeIcon icon={faCapsules} className={icon} size="4x" />
                <h4>Urgent Care</h4>
                <p>
                  Does your pet need urgent medical care? Call us for immediate
                  assistance from our trained staff.
                  <span>
                    <FontAwesomeIcon
                      icon={faCalendarCheck}
                      className={inline}
                      size="1x"
                    />
                    Appointment needed
                  </span>
                </p>
              </div>
            </div>
            <div className={row}>
              <div>
                <FontAwesomeIcon icon={faTooth} className={icon} size="4x" />
                <h4>Dental Care</h4>
                <p>
                  Dental issues can cause not only pain and discomfort, but also
                  may cause health complications. Without regular care, many
                  pets can start having issues from 3 years old. Call us to
                  schedule an dental appointment!
                  <span>
                    <FontAwesomeIcon
                      icon={faCalendarCheck}
                      className={inline}
                      size="1x"
                    />
                    Appointment needed
                  </span>
                </p>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faHandHoldingMedical}
                  className={icon}
                  size="4x"
                />
                <h4>Dermatology</h4>
                <p>
                  Pet allergies and skin disorders can be difficult to deal
                  with, but we're here to help manage the itchiest situations.
                </p>
              </div>
              <div>
                <FontAwesomeIcon icon={faSoap} className={icon} size="4x" />
                <h4>Grooming</h4>
                <p>
                  We offer grooming services including clips and baths. Please
                  call us to reserve a grooming appointment!
                  <span>
                    <FontAwesomeIcon
                      icon={faCalendarCheck}
                      className={inline}
                      size="1x"
                    />
                    Appointment needed
                  </span>
                </p>
              </div>
            </div>
            <div className={row}>
              <div>
                <FontAwesomeIcon icon={faBone} className={icon} size="4x" />
                <h4>Prescription Diet</h4>
                <p>
                  Nutrition is an important factor for staying healthy, and
                  specialized diets from quality brands can be beneficial for
                  your pet. We carry lines from top veterinary prescription diet
                  brands to serve your pet's specific needs.
                </p>
              </div>
              <div>
                <FontAwesomeIcon icon={faHeart} className={icon} size="4x" />
                <h4>End of Life Care</h4>
                <p>
                  Letting go of our pets can be one of the most difficult parts
                  of loving our pets but we are here for you when you make that
                  choice.
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
