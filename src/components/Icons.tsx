import Image from 'next/image'

import {
  ArrowDown,
  Bedroom,
  Checkmark,
  Logo,
  PHStairs,
  Star,
  StudioSae,
  SwapHouse,
} from '@/assets/images'

interface Icons {
  name: string
  alt?: string
}

export default function Icons({ name, alt = '' }: Icons) {
  let src = null

  switch (name) {
    case 'logo':
      src = Logo
    default:
      src = Logo
  }

  return <Image src={src} alt={alt} />
}
