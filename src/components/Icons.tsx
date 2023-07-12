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
  ArrowDownRed,
  ArrowRight,
} from '@/assets/images'

interface Icons {
  name: string
  alt?: string
  className?: string
}

export default function Icons({ name, alt = '', className }: Icons) {
  let src
  console.log('icon', name)
  switch (name) {
    case 'logo':
      src = Logo
      break
    case 'arrow-down':
      src = ArrowDown
      break
    case 'arrow-down-red':
      src = ArrowDownRed
      break
    case 'arrow-right':
      src = ArrowRight
      break
    default:
      src = Logo
  }

  return <Image src={src} alt={alt} className={className} />
}
