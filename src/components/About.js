import React from 'react';

const currentYear = new Date().getFullYear();

const About = () => {
    return (
         <section className="success" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>About Me</h2>
              <hr className="star-light" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-lg-offset-2">
              <p>
                After spending 8+ years in education, I made the transition to
                being a software development professional with
                <span id="professional-experience"> {(currentYear - 2016).toString()}</span> years commercial
                experience. I've been working on projects involving web
                technologies during my free time for the past
                <span id="total-experience"> {(currentYear - 2013).toString()}</span> years, and I'm very lucky to
                also be able to do it as a full-time job.
              </p>
            </div>
            <div className="col-lg-4">
              <p>
                An engineer at heart, I've always been drawn to the challenges
                and opportunities inherent in unsolved problems, and I hope I'm
                lucky enough to keep finding interesting and engaging questions
                to investigate.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default About;