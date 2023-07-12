interface Button {
  title: string
  type?: 'primary' | 'secondary'
}

export default function Button({ title, type }: Button) {
  if (type == 'primary') {
    return (
      <button className='h-10 rounded-md bg-red  px-4 items-center text-white font-semibold text-base'>
        {title}
      </button>
    )
  }

  return <button className='h-10 px-4 font-semibold text-base'>{title}</button>
}
