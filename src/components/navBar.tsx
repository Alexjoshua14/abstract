import Link from 'next/link'
import { FC } from 'react'
import { IoMenuSharp, IoSearchSharp, IoShapesSharp } from 'react-icons/io5'

interface NavBarProps {

}

const NavBar: FC<NavBarProps> = ({ ...props }) => {
  return (
    <section className="flex border-2 bg-black text-white border-black h-[5.5rem] px-14 py-6 items-center justify-between" {...props}>
      <div className="flex gap-2 items-center text-2xl">
        <Link className="flex gap-1 hover:text-neutral-300" href="/">
          <IoShapesSharp size={30} />
          Abstract
        </Link>
        <p className="hover:cursor-default">
          |
        </p>
        <Link href="/" className="font-light hover:underline decoration-1 underline-offset-2">
          Help Center
        </Link>
      </div>
      <div className="flex gap-2">
        <Link href="/" className="hover:scale-110 transition-transform">
          <IoSearchSharp size={28} />
        </Link>
        <Link href="/">
          <IoMenuSharp size={30} />
        </Link>
      </div>
    </section>
  )
}

export default NavBar