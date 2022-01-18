import * as React from "react"
// import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { Link } from "gatsby"

import { alert, closebtn, hero, about, flex, location, content, contact, map, info, day, time, gallery, big, vertical, horizontal, testimonial, container, background } from "../styles/home.module.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout herotitle="Beverly Virgil">
      <Seo title="Home" />

      <div className={location}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.837388546825!2d-118.28873268471655!3d34.07368252404715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c768bf284183%3A0x43b6ac0a95cf4f2f!2sBeverly%20Virgil%20Animal%20Hospital!5e0!3m2!1sen!2sus!4v1638492520546!5m2!1sen!2sus"
          width="100%"
          height="400"
          // style="border:0;"
          className={map}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        <div className={info}>
          <h3>
            Beverly Virgil
            <br />
            Animal Hospital
          </h3>
          <p>
            3363 West First Street
            <br />
            Los Angeles, CA 90004
          </p>
          <p>
            <div>
              <span className={day}>Mon - Fri</span>
              <span className={time}> 8 am - 12 pm </span>
            </div>
            <div>
              <span className={day}>Sat</span>
              <span className={time}> 8 am - 1 pm </span>
            </div>
            <div>
              <span className={day}>Sun</span>
              <span className={time}>Closed</span>
            </div>
          </p>
          <p>+1 (213) 387 - 3388</p>
          <button>Call Us Now!</button>
        </div>
      </div>

      <div className={content}>
        <div className={about}>
          <div className={background}>
            <img src="https://i.imgur.com/KxROnnU.jpeg" />
          </div>
          <div className={flex}>
            <h3>
              <small>Beverly Virgil Animal Hospital is a </small> full-service
              <span>veterinary practice</span>
            </h3>
          </div>
          <div>
            <h4>
              Serving Los Angeles pet owners since 1988, Beverly Virgil Animal
              Hospital is a specialized veterinary hospital on West 1st Street
              LA. Our elite panel of veterinarians and veterinary assistants is
              available for emergencies, grooming appointments and walk-in
              visits during regular business hours. Call us and experience
              exceptional animal care today!
            </h4>
          </div>
          <div className={gallery}>
            {/* <h1>Nested Location</h1> */}
            {/* <div className={big}>
              <h3>
                <small>Beverly Virgil Animal Hospital is a </small> full-service
                <span>veterinary practice</span>
              </h3>
            </div> */}
            {/* <div className={big}>
              <img src="https://i.imgur.com/OIeLAIF.jpeg" alt="" />
            </div> */}
            <div className={big}>
              <img
                src="https://i.imgur.com/L9bG904.jpeg"
                alt="Beverly Virgil"
                style={{ marginBottom: `1.45rem` }}
              />
            </div>
            <div className={vertical}>
              <img src="https://i.imgur.com/tCJou6L.jpeg" alt="" />
            </div>
            <img src="https://i.imgur.com/6GacRV8.jpeg" alt="" />
            <img src="https://i.imgur.com/DjPpdnT.jpeg" alt="" />
            <div className={horizontal}>
              <img src="https://i.imgur.com/zhGHJaf.jpeg" alt="" />
            </div>
            <div className={vertical}>
              <img src="https://i.imgur.com/HGPSzaF.jpeg" alt="" />
            </div>
            <img
              src="https://i.imgur.com/ViOd4ow.jpeg"
              alt="Orange Cat (Square)"
            />
            <img src="https://i.imgur.com/O4ZaZyG.jpeg" alt="Husky (Square)" />

            <div className={big}>
              <img
                src="https://i.imgur.com/oXdsQOf.jpeg"
                alt="Art (Big Square)"
              />
            </div>
            <div>
              <img
                src="https://i.imgur.com/Te5FtIr.jpeg"
                alt="Hospital Front (Square)"
              />
            </div>
            <div className={horizontal}>
              <img src="https://i.imgur.com/j84PH9e.jpeg" alt="" />
            </div>
            <div className={vertical}>
              <img src="https://i.imgur.com/H7Icb7g.jpeg" alt="" />
            </div>
            <div>
              <img
                src="https://i.imgur.com/cgh41LT.jpeg"
                alt="Yorkie (Square)"
              />
            </div>
            <div>
              <img src="https://i.imgur.com/5JLS1eX.jpeg" alt="" />
            </div>
          </div>
        </div>

        {/* <section class="container container--testimonials">
          <div class="testimonial">
            <p class="testimonial__text mb-25">
              At first, it may be intimidating to see all of the available
              courses. Pick a track that interests you and work through it at
              your own pace.
            </p>

            <div class="testimonial__details">
              <div class="testimonial__img">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="Timmy Dicki"
                />
              </div>
              <div class="testimonial__info">
                <h4 class="testimonial__name">Timmy Dicki</h4>
                <h5 class="testimonial__job">Railroad Engineer</h5>
              </div>
            </div>
          </div>

          <div class="testimonial">
            <p class="testimonial__text mb-25">
              I believe it would be very useful to teach cognitive neuroscience
              and psychology students all some coding skills.
            </p>

            <div class="testimonial__details">
              <div class="testimonial__img">
                <img
                  src="https://images.unsplash.com/photo-1583664426440-daef00e4ad6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Valerie King"
                />
              </div>
              <div class="testimonial__info">
                <h4 class="testimonial__name">Valerie King</h4>
                <h5 class="testimonial__job">
                  Customer Service Representative
                </h5>
              </div>
            </div>
          </div>
          <div class="testimonial">
            <p class="testimonial__text mb-25">
              I had looked into learning Javascript, but was too intimidated to
              start. Codecademy was perfect: we both really like learning by
              doing.
            </p>

            <div class="testimonial__details">
              <div class="testimonial__img">
                <img
                  src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Terrell O'Keefe"
                />
              </div>
              <div class="testimonial__info">
                <h4 class="testimonial__name">Terrell O'Keefe</h4>
                <h5 class="testimonial__job">Marketing Professional</h5>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </Layout>
  )
}

export default IndexPage
