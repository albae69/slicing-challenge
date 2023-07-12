import Icons from './Icons'

interface DetailRumahItem {
  icon: string
  title: string
  desc: string
}

export default function DetailRumahItem({
  icon,
  title,
  desc,
}: DetailRumahItem) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Icons name={icon || 'logo'} alt='icon' />
      <h3 className='text-xs' style={{ color: '#808080' }}>
        {title || 'title'}
      </h3>
      <h3 className='text-black text-sm'>{desc || 'desc'}</h3>
    </div>
  )
}
