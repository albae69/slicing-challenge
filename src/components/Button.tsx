interface Button {
  title: string
  type?: 'primary' | 'secondary'
  className?: string
}

export default function Button({ title, type, className }: Button) {
  if (type == 'primary') {
    return (
      <button
        className={`h-10 rounded-md bg-red  px-4 items-center font-semibold text-base ${className}`}>
        {title}
      </button>
    )
  }

  return <button className='h-10 px-4 font-semibold text-base'>{title}</button>
}
