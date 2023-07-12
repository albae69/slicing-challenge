import Image from 'next/image'
import Button from './Button'
import Link from './Link'
import Logo from '@/assets/images/logo.svg'
import Icons from './Icons'

export default function Header() {
  return (
    <header
      className='flex items-center justify-between p-10 px-16 mb-6'
      style={{ height: 122 }}>
      <Icons name='logo' alt='sobat bangun logo' />
      <nav className='flex items-center justify-center'>
        <Link title='Tentang Kami' icon='arrow-down' />
        <Link
          title='Produk & Layanan'
          className='text-red'
          icon='arrow-down-red'
        />
        <Link title='Blog' />
        <Link title='FAQ' />
      </nav>
      <div className='flex items-center w-48 justify-between'>
        <Button title='Daftar' />
        <Button title='Masuk' type='primary' className='text-white' />
      </div>
    </header>
  )
}
