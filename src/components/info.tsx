import Link from 'next/link'
import { FC } from 'react'
import Card from './card'
import { cardContent } from '@/data/cardContent'

const Info: FC = ({ }) => {
  return (
    <section
      className="px-32 py-40 
                grid grid-rows-3 grid-cols-2
                gap-y-20 gap-x-14"
    >
      {cardContent.map((content) => (
        <Card key={content.id} content={content} />
      ))}
    </section>
  )
}

export default Info