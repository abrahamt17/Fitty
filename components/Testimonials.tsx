'use client'

import Image from 'next/image'

const Testimonials: React.FC = () => {
  return (
    <section className="section" id="section--4">
      <div className="page4">
        <div className="containerr">
          <div className="progress-bar"></div>
          <div className="testimonial">
            <i className="fa fa-quote-right"></i>
            <i className="fa fa-quote-left"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laborum reiciendis <br />
              optio libero? Eaque quae inventore vero sint aperiam quidem maiores natus nostrum,<br />
              illum dolorum nemo placeat soluta ex? Eum.
            </p>
          </div>
          <div className="user">
            <div>
              <img className="user-img" src="/assets/images/imgs/Trainers/client1.png" alt="Antonio Joshua" />
            </div>
            <div className="user-details">
              <h1>Antonio Joshua</h1>
              <p>International Body Builder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

