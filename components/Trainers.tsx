'use client'

import Image from 'next/image'

const Trainers: React.FC = () => {
  const trainers = [
    {
      name: 'Rocky Star',
      role: 'Senior Trainer, 7years',
      avatar: '/assets/images/imgs/Trainers/client2.png',
      image: '/assets/images/imgs/Trainers/trainer2.jpg',
    },
    {
      name: 'seifu Fanta',
      role: 'Senior Girls Trainer, 4years',
      avatar: '/assets/images/imgs/Trainers/bg.jpg',
      image: '/assets/images/imgs/Trainers/5.jpg',
    },
    {
      name: 'Teferi Alemu',
      role: 'Senior Trainer, 3years',
      avatar: '/assets/images/imgs/Trainers/client1.png',
      image: '/assets/images/imgs/Trainers/trainer1.jpg',
    },
  ]

  return (
    <section className="section" id="section--2">
      <div className="page3">
        <h3>Meet Our Professionals</h3>
        <div className="tittle">
          <div className="text">
            <blockquote>
              <h4>Trainers</h4>
              <br />
              <h1>Our Official Trainers</h1>
              <br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicingelitQui, voluptatem, vero commodi officiis blanditiis.</p>
            </blockquote>
          </div>
        </div>

        <div className="trainers">
          <div className="boxes">
            {trainers.map((trainer, index) => (
              <div key={index} className={`box ${index === 0 ? 'one' : index === 1 ? 'two' : 'three'}`}>
                <div className="imgcontainer">
                  <img src={trainer.avatar} alt={trainer.name} />
                </div>
                <div className="hps">
                  <h2>{trainer.name}</h2>
                  <p1>{trainer.role}</p1>
                </div>
                <div className="boxinner">
                  <img src={trainer.image} alt={trainer.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trainers

