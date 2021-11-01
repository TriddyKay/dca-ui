import React from 'react'
import '../styles/home.css'
import {Header} from "semantic-ui-react"

export const Home = () => {

  return (
    <div className={'home-container'}>
      <div className={'instagram'}>
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a href={'https://www.instagram.com/dinner_club_adventures/?hl=en'} target="_blank" rel=''>
          <img src={'https://res.cloudinary.com/dqsacxogt/image/upload/v1573648182/BlogPhotos/instagram_b1zv60.png'} alt={''} className={'instagram'}/>
        </a>
      </div>
      <div className={'moustacheSpace'}>
        <img src={'https://res.cloudinary.com/dqsacxogt/image/upload/v1573648191/BlogPhotos/moustache_r5dvaz.png'} alt={''} className={'moustache'}/>
      </div>
      <div className={'teaser'}>
        Chriz Chrysler, Panini D Dragon & Trizzy Rascal pick up sporks to take on the world...
      </div>
      <Header className={'hot-tip'} as={'h2'}>Hot tip: Maybe fire the barista?</Header>
    </div>
  )
}
