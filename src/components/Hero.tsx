'use client'

import Image from 'next/image'
import { Hero as HeroImage } from '@/assets/images'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Icons from './Icons'

export default function Hero() {
  let properties = {
    prevArrow: Arrow(),
    nextArrow: Arrow(true),
  }

  return (
    <Slide autoplay={false} {...properties}>
      <Image
        src={HeroImage}
        style={{ height: 550 }}
        className='w-full'
        alt='hero images'
      />
    </Slide>
  )
}

function Arrow(isRight?: boolean) {
  return (
    <button
      className='h-12 w-12 bg-white  flex items-center justify-center mx-4'
      style={{ border: '1px solid red' }}>
      <Icons
        name='arrow-down'
        className={`${isRight ? '-rotate-90' : 'rotate-90'} h-7 w-7`}
      />
    </button>
  )
}
