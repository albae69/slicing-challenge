import {
  Header,
  Breadcumb,
  Hero,
  TampilanRumahItem,
  DetailRumah,
  TestimoniItem,
  DetailAnotherDesign,
} from '@/components'

export default function Home() {
  let data = [1, 2, 3, 4, 5]

  return (
    <div className='h-full w-full'>
      <Header />
      <Breadcumb />
      <Hero />
      <section className='mt-6 p-16 flex items-center justify-center'>
        <div className='flex' style={{ maxWidth: 1440 }}>
          <div>
            <h3 className='text-black font-semibold text-2xl mb-4'>
              Tampilan Rumah
            </h3>
            <div className='flex items-center flex-wrap'>
              {data.map((item, index) => (
                <TampilanRumahItem key={index} />
              ))}
            </div>
          </div>
          <div>
            <DetailRumah />
            <h3 className='text-black font-semibold text-2xl mb-4 mt-8'>
              Testimoni
            </h3>
            <TestimoniItem />
            <TestimoniItem />
            <TestimoniItem />
          </div>
        </div>
      </section>
      <section className='mt-6 p-16 flex items-center justify-center'>
        <div className='flex' style={{ maxWidth: 1440 }}>
          <div>
            <h3 className='text-black font-semibold text-2xl mb-4'>
              Desain Lainnya oleh Studio SAe
            </h3>
            <div className='flex items-center flex-wrap'>
              {[1, 2, 3, 4].map((item, index) => (
                <DetailAnotherDesign key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
