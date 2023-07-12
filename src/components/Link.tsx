import Icons from './Icons'

interface Link {
  title: String
  icon?: string
  className?: String
}

export default function Link({ title, icon, className }: Link) {
  if (icon) {
    return (
      <a
        className={`font-semibold text-base text-black h-9 ml-8 cursor-pointer ${className} flex items-center hover:text-red`}>
        {title}
        {icon && <Icons name={icon} />}
      </a>
    )
  }

  return (
    <a
      className={`font-semibold text-base text-black h-9 ml-8 cursor-pointer ${className} flex items-center hover:text-red`}>
      {title}
    </a>
  )
}
