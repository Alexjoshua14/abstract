
import { FC } from 'react'
import Card from './card'
import { cardContent } from '@/data/cardContent'

const Info: FC = ({ }) => {
  return (
    <section
      className="px-2 py-24 xs:px-6 md:px-24 lg:px-32 md:pt-40 
                flex flex-col
                md:grid md:grid-rows-3 md:grid-cols-2
                gap-y-20 gap-x-14"
    >
      {cardContent.map((content) => (
        <Card key={content.id} content={content} />
      ))}
    </section>
  )
}

export default Info