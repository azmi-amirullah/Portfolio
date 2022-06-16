import React from 'react'
import AVTR1 from '../../assets/c-sharp.jpg'
import AVTR2 from '../../assets/react.jpg'

import { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import './projects.css'

const Testimonials = () => {
  const data = [
    {
      Name: 'User Management App for SmartSiz',
      Avatar: AVTR1,
      Time: 'Oct 2019 - Dec 2019',
      Review: (
        <>
          Desktop App for User Management for SmartSiz Application.
          <br />
          CRUD (Create, Read, Update, Delete) User.
          <br />
          <br />
          Created with:
          <br />
          C#, ASP.NET & NET.Framework
          <br />
          WPF with MVVM
        </>
      )
    },
    {
      Name: 'SmartSiz (Support)',
      Avatar: AVTR1,
      Time: 'Oct 2019 - Dec 2019',
      Review: (
        <>
          Desktop App for find the best valve product for client customer by
          their own specification and it's include the cost for the valve
          product and report for the engineer to make the valve product.
          <br />
          <br />
          Created with:
          <br />
          C#, ASP.NET & NET.Framework
          <br />
          WPF with MVVM
        </>
      )
    },
    {
      Name: 'SPPD (Official Travel Warrant)',
      Avatar: AVTR2,
      Time: 'Dec 2019 - Dec 2020',
      Review: (
        <>
          Website App for Riau Islands Government, making documents for their
          work trip, calculating the estimate cost, reporting the real cost for
          claim, and created into report.
          <br />
          <br />
          Created with:
          <br />
          React, Node.js, Mangodb
        </>
      )
    },
    {
      Name: 'Notary Public',
      Avatar: AVTR2,
      Time: 'Jan 2021 - Apr 2021',
      Review: (
        <>
          Website App for tracking document creation progress requested by
          client, and saving the document (including certificate, identity card,
          etc)
          <br />
          <br />
          Created with:
          <br />
          React, Node.js, Mangodb
        </>
      )
    },
    {
      Name: 'Task Management (Similar to Trello Website)',
      Avatar: AVTR2,
      Time: 'Apr 2021 - Jul 2021',
      Review: (
        <>
          Website App for tracking the work progress, can be moved per column
          and row, can be configure as well. The working progress can be
          commented, add some due date, add team member, etc. (Similar to Trello
          Website)
          <br />
          <br />
          Created with:
          <br />
          React, Node.js, Mangodb
          <br />
          Socket.io
        </>
      )
    },
    {
      Name: 'Asset Management',
      Avatar: AVTR2,
      Time: 'Aug 2021 - Sep 2021',
      Review: (
        <>
          Website App for keep track how many and where the current asset, and
          the current value based on set rule
          <br />
          Mobile App to view the asset
          <br />
          <br />
          Created with:
          <br />
          React, Node.js, Mangodb
          <br />
          React Native
        </>
      )
    }
  ]

  return (
    <section id="projects">
      <h5>My Experience Work</h5>
      <h2>Projects</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Autoplay, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {data.map(({ Name, Time, Avatar, Review }, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={Avatar} alt="Avatar 1" />
              </div>
              <h4>{Name}</h4>
              <h5>{Time}</h5>
              <small className="client__review">{Review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials
