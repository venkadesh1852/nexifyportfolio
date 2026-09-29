function About() {
  return (
    <section className="about" id="about">

      <div className="about-container">

        {/* LEFT */}

        <div className="about-content">

          <p className="section-tag">
            ABOUT NEXIFYGEN
          </p>

          <h2>
            WE TURN
            <span> IDEAS INTO DIGITAL GROWTH.</span>
          </h2>

          <p className="about-description">
            Nexifygen is a digital solutions brand focused on helping
            businesses build a strong online presence through modern
            websites, organic marketing and data-driven solutions.
          </p>

          <p className="about-description">
            From a simple business website to a complete digital
            growth strategy, we combine creativity, technology and
            practical solutions to help brands move forward.
          </p>

          <a href="#services" className="about-button">
            Explore Our Services
            <span>↗</span>
          </a>

        </div>


        {/* RIGHT */}

        <div className="about-visual">

          <div className="about-glow"></div>

          <div className="about-card about-card-main">

            <div className="card-icon">
              ✦
            </div>

            <h3>
              Digital
              <br />
              <span>Growth</span>
            </h3>

            <p>
              Strategy + Design + Technology
            </p>

            <div className="growth-line"></div>

          </div>


          <div className="about-card about-card-small card-one">

            <strong>01</strong>

            <span>
              Creative
              <br />
              Solutions
            </span>

          </div>


          <div className="about-card about-card-small card-two">

            <strong>02</strong>

            <span>
              Smart
              <br />
              Technology
            </span>

          </div>


          <div className="about-orbit orbit-one"></div>

          <div className="about-orbit orbit-two"></div>

        </div>

      </div>


      {/* STATS */}

      <div className="about-stats">

        <div className="about-stat">

          <strong>50+</strong>

          <span>
            Happy Clients
          </span>

        </div>


        <div className="about-stat">

          <strong>100+</strong>

          <span>
            Projects
          </span>

        </div>


        <div className="about-stat">

          <strong>6+</strong>

          <span>
            Months Experience
          </span>

        </div>


        <div className="about-stat">

          <strong>24/7</strong>

          <span>
            Digital Support
          </span>

        </div>

      </div>

    </section>
  );
}

export default About;