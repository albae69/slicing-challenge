import Icons from './Icons'

export default function TestimoniItem() {
  return (
    <div className='flex items-start mb-4'>
      <Icons name='account-circle' alt='account circle image' />
      <div className='ml-4 mb-1'>
        <div className='flex items-center'>
          <h3 className='font-semibold text-black text-base'>Budi Setiadi</h3>
          <div className='flex items-center'>
            <Icons name='star' alt='star' />
            <p className='text-sm' style={{ color: '#4A5568' }}>
              4.5
            </p>
          </div>
        </div>
        <p className='text-base' style={{ color: '#666666' }}>
          Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat
          Bangun
        </p>
      </div>
    </div>
  )
}
