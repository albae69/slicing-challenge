import Image from 'next/image'
import Button from './Button'
import Link from './Link'
import Logo from '@/assets/images/logo.svg'

export default function Header() {
  return (
    <header
      className='flex items-center justify-between p-10 px-16 mb-6'
      style={{ height: 122 }}>
      <Image src={Logo} alt='Sobat Bangun Logo' />
      <nav>
        <Link title='Tentang Kami' />
        <Link title='Produk & Layanan' className='text-red' />
        <Link title='Blog' />
        <Link title='FAQ' />
      </nav>
      <div className='flex items-center w-48 justify-between'>
        <Button title='Daftar' />
        <Button title='Masuk' type='primary' />
      </div>
    </header>
  )
}
