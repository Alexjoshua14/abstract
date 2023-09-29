import { FC } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface cardProps {
  content: {
    id: number,
    title: string,
    description: string,
    link: string
  },
  className?: string,
}

const card: FC<cardProps> = ({ content, className, ...props }) => {
  return (
    <div className={cn("flex gap-4 px-4 py-2", className)}>
      <div className="w-20 px-2">
        ICON
      </div>
      <div className="flex flex-col px-2 gap-2">
        <h2 className="text-xl font-bold">
          {content.title}
        </h2>
        <p className="text-xl">
          {content.description}
        </p>
        <Link href={content.link} className="py-2 text-lg font-light text-blue-500">
          {`Learn More -->`}
        </Link>
      </div>
    </div>
  )
}

export default card