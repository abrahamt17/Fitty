'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const Hero: React.FC = () => {
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const revealIcons = () => {
      const trigger = window.innerHeight / 5 * 4
      if (imgRef.current) {
        const iconCoords = imgRef.current.getBoundingClientRect().top
        if (iconCoords < trigger) {
          imgRef.current.classList.add('show')
        }
      }
    }

    revealIcons()
    window.addEventListener('scroll', revealIcons)
    return () => window.removeEventListener('scroll', revealIcons)
  }, [])

  return (
    <section className="hero section" id="home">
      <div className="hero__container">
        <div className="content">
          <div className="header__title" id="#home">
            <div className="titles">
              <h1>
                Build
                <span className="highlight"> strength</span> Boost
                <br />
                <span className="highlight">Confidence!</span>
                <br />
                <span className="highlight2">A simpler Workingout experience for a simpler life.</span>
              </h1>
              <h4></h4>
              <button className="btn">Learn more &DownArrow;</button>
            </div>
            <div className="container">
              <Image
                ref={imgRef}
                className="img1"
                src="/assets/images/imgs/ims/mana.png"
                alt="Fitness trainer"
                width={400}
                height={500}
                priority
              />
            </div>
          </div>
        </div>

        <div className="glass first">
          <StatsCounter />
        </div>

        <div className="companies">
          <ul className="log">
            <li className="logos">
              <Image src="/assets/images/imgs/logos/New folder/c3.png" alt="" width={120} height={40} />
            </li>
            <li>
              <Image src="/assets/images/imgs/logos/New folder/client3.png" alt="" width={120} height={40} />
            </li>
            <li>
              <Image src="/assets/images/imgs/logos/New folder/client5.png" alt="" width={120} height={40} />
            </li>
            <li>
              <Image src="/assets/images/imgs/logos/New folder/logo.png" alt="" width={120} height={40} />
            </li>
            <li>
              <Image src="/assets/images/imgs/logos/New folder/omnifood-logo.png" alt="" width={120} height={40} className="height" />
            </li>
            <li>
              <Image src="/assets/images/imgs/logos/mashable.png" alt="" width={120} height={40} className="height" />
            </li>
            <li>
              <Image src="/assets/images/imgs/logos/New folder/usa-today.png" alt="" width={120} height={40} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

const StatsCounter: React.FC = () => {
  useEffect(() => {
    const counters = Array.from(document.querySelectorAll('.number, .number-one, .number-two'))
    const countersData = [
      { array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], text: 'Trainers' },
      { array: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 30, 34, 38, 42, 44, 46, 48, 50], text: 'Programs' },
      { array: [10, 40, 70, 110, 140, 170, 200, 230, 260, 290, 300, 340, 390, 440, 470, 500, 560, 590, 600, 750, 800, 900, 950, '1k'], text: 'Members' }
    ]

    if (counters.length > 0) {
      countersData.forEach((counterData, index) => {
        if (counters[index]) {
          let idx = 1
          const interval = setInterval(() => {
            const num = counterData.array[idx]
            if (counters[index]) {
              counters[index].innerHTML = String(num)
              if (idx > counterData.array.length - 1) {
                counters[index].innerHTML = String(counterData.array[counterData.array.length - 2]) + "+ " + counterData.text
                counters[index].classList.add('stop')
                clearInterval(interval)
              } else {
                counters[index].classList.remove('stop')
              }
            }
            idx++
          }, 80)
        }
      })
    }
  }, [])

  return (
    <>
      <div className="number stop">00</div>
      <div className="number-one stop">00</div>
      <div className="number-two stop">00</div>
    </>
  )
}

export default Hero

