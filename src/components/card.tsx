import { FC } from 'react'
import Link from 'next/link'
import { IconType } from 'react-icons'
import { cn } from '@/lib/utils'

interface cardProps {
  content: {
    id: number,
    title: string,
    description: string,
    icon: IconType,
    iconSize: number,
    link: string
  },
  className?: string,
}

const card: FC<cardProps> = ({ content, className, ...props }) => {
  return (
    <div className={cn("flex gap-4 px-4 py-2 text-xl lg:text-2xl ", className)} {...props}>
      <div className="w-20 px-2">
        <content.icon size={content.iconSize} />
      </div>
      <div className="flex flex-col px-2 gap-2 lg:gap-4">
        <h2 className="font-bold">
          {content.title}
        </h2>
        <p className="lg:font-light">
          {content.description}
        </p>
        <Link href={content.link} className="py-2 text-lg font-light text-blue-500 whitespace-nowrap">
          {`Learn More -->`}
        </Link>
      </div>
    </div>
  )
}

export default card