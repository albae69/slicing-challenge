import Icons from './Icons'

export default function Breadcumb() {
  let nav = ['Home', 'Layanan Desain', 'Omah Apik 3']

  return (
    <section className='px-16 flex mb-6'>
      {nav.map((item, index) => (
        <div key={index} className='flex'>
          {index != nav.length - 1 ? (
            <>
              <h3 className={`text-red font-semibold text-sm`}>{item}</h3>
              <Icons name='arrow-right' alt='arrow-right' />
            </>
          ) : (
            <h3 className='font-semibold text-sm' style={{ color: '#999999' }}>
              {item}
            </h3>
          )}
        </div>
      ))}
    </section>
  )
}
