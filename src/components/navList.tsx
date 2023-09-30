
import { FC } from 'react'
import Link from 'next/link'
import { FooterSection } from '@/lib/validators/footerValidator'

interface NavListProps {
  content: FooterSection
}

const NavList: FC<NavListProps> = ({ content }) => {
  return (
    <div className="flex flex-col gap-4 min-w-fit px-8">
      <h2 className="text-xl font-bold">
        {content.sectionTitle}
      </h2>
      <ul className="flex flex-col text-sm font-extralight gap-[.125rem]">
        {content.sectionItems.map((item) => (
          <li key={item.id}>
            <Link href={item.link} className="hover:underline">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
      {content.subcategory &&
        <div className="py-4">
          <h3 className="text-sm font-medium">
            {content.subcategory.title}
          </h3>
          <Link href={content.subcategory.link} className="text-sm font-light hover:underline">
            {content.subcategory.text}
          </Link>
        </div>
      }
    </div>
  )
}

export default NavList