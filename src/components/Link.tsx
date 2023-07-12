interface Link {
  title: String
  icon?: boolean
  className?: String
}

export default function Link({ title, icon, className }: Link) {
  return (
    <a
      className={`font-semibold text-base text-black h-9 ml-8 cursor-pointer ${className}`}>
      {title}
    </a>
  )
}
