
import { FC } from 'react'
import { IoShapesSharp } from 'react-icons/io5'
import { footerContent } from '@/data/footerContent'
import NavList from './navList'

const Footer: FC = ({ }) => {
  return (
    <section className="min-w-fit flex flex-col lg:flex-row px-14 py-14 gap-6 bg-black text-white">

      <nav className="flex-1 grid grid-rows-2 grid-cols-2 lg:flex lg:justify-around min-w-fit w-full">
        {footerContent.map(section => (
          <NavList content={section} key={section.id} />
        ))}
      </nav>
      <div className="min-w-fit flex flex-col gap-4 self-end justify-self-end">
        <IoShapesSharp size={30} />
        <div className="text-lg font-extralight">
          <p>
            <s>
              © Copyright 2023
            </s>
          </p>
          <p>
            <s>
              Abstract Studio Design, Inc.
            </s>
          </p>
          <p>
            <s>
              All rights reserved
            </s>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer