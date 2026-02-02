'use client'

import Image from 'next/image'

const WhyUs: React.FC = () => {
  return (
    <section className="section" id="section--1">
      <div className="page-2">
        <div className="images">
          <div>
            <h1></h1>
          </div>
          <div className="container">
            <img className="image one" src="/assets/images/imgs/ims/Back.png" alt="" />
          </div>
          <div className="container two">
            <img className="image two" src="/assets/images/imgs/ims/logo.png" alt="" />
          </div>
          <div className="container one">
            <img className="image three" src="/assets/images/imgs/ims/girl2.png" alt="" />
          </div>
          <div className="container three">
            <img className="image four" src="/assets/images/imgs/ims/man3.png" alt="" />
          </div>
        </div>
      </div>
      <div className="page-2_tittle">
        <p2>Tweni four seven</p2>
        <br />
        <br />
        <h1>Hot Trending <br />Programs</h1>
      </div>
      <div className="page-2_icons">
        <ul className="icons show">
          <li>
            <div className="boxer">
              <img className="icon" src="/assets/images/imgs/Icons/u-1.png" alt="Muscle building" />
            </div>
            <div className="detail-box one">
              <h5>MUSCLE BUILDING</h5>
              <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
          </li>
          <li>
            <div className="boxer">
              <img className="icon" src="/assets/images/imgs/Icons/u-2.png" alt="Fat loss" />
              <div className="detail-box">
                <h5>FAT LOSS</h5>
                <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
              </div>
            </div>
          </li>
          <li>
            <div className="boxer">
              <img className="icon" src="/assets/images/imgs/Icons/u-3.png" alt="Meditation" />
              <div className="detail-box">
                <h5>MEDITATION</h5>
                <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
              </div>
            </div>
            <li>
              <div className="boxer">
                <img className="icon" src="/assets/images/imgs/Icons/u-4.png" alt="Sport training" />
                <div className="detail-box">
                  <h5>SPORT TRAINING</h5>
                  <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
              </div>
            </li>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default WhyUs

