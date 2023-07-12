import Image from 'next/image'
import { TampilanRumah } from '@/assets/images'

interface TampilanRumahItem {
  title: string
  desc: string
}

export default function TampilanRumahItem({ title, desc }: TampilanRumahItem) {
  return (
    <div
      className='rounded-lg border border-gray-300 p-4 mr-4 mb-4 hover:cursor-pointer hover:scale-105'
      style={{ width: 293 }}>
      <Image
        src={TampilanRumah}
        alt='tampilan rumah item'
        style={{ height: 200, width: 260 }}
        className='mb-6'
      />
      <h3 className='text-black font-bold text-xl mb-1'>{title || 'title'}</h3>
      <p>{desc || 'desc'}</p>
    </div>
  )
}
