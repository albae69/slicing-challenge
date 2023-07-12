import Button from './Button'
import DetailRumahItem from './DetailRumahItem'
import Icons from './Icons'

export default function DetailAnotherDesign() {
  return (
    <section
      className='border border-border rounded-2xl p-6 mr-4 mb-4'
      style={{ width: 316 }}>
      <h3 className='text-black font-semibold text-2xl mb-2'>Omah Apik 3</h3>
      <div className='flex items-center'>
        <Icons name='sae-logo' alt='sae logo' />
        <h4 className='ml-1'>Studio SAe</h4>
      </div>
      <div className='flex items-center mb-4'>
        <div>
          <p>Jenis Rumah</p>
          <p>Tipe Desain</p>
        </div>
        <div className='ml-6'>
          <p>Scandinavian</p>
          <p>Dapat Dimodifikasi</p>
        </div>
      </div>
      <div className='bg-border h-px mb-4' />
      <div className='flex items-center justify-between mb-4'>
        <DetailRumahItem icon='width' title='Dimensi Tanah' desc='15 x 8m' />
        <DetailRumahItem icon='swap-house' title='Luas Bangunan' desc='112m' />
        <DetailRumahItem icon='ph-stairs' title='Lantai' desc='2' />
        <DetailRumahItem icon='bedroom' title='Kamar Tidur' desc='4' />
      </div>
      <div className='bg-border h-px mb-4' />
      <div className='mb-4'>
        <h3 className='text-sm'>Harga Desain</h3>
        <h2 className='text-black font-semibold text-3xl'>Rp. 32.500.000</h2>
        <p className='text-sm text-gray-300'>
          Harga konstruksi mulai dari Rp.560.000.000
        </p>
      </div>
      <Button
        title='Lihat Detail'
        type='primary'
        className='w-full bg-white border border-red text-red text-sm'
      />
    </section>
  )
}
