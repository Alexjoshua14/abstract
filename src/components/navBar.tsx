'use client'

import Link from 'next/link'
import { FC, useState } from 'react'
import { IoMenuSharp, IoSearchSharp, IoShapesSharp, IoClose } from 'react-icons/io5'
import { TfiClose } from 'react-icons/tfi'
import SearchBar from './searchBar'
import { Separator } from './ui/separator'

const NavBar: FC = ({ ...props }) => {
  const [searchBarDisplayed, showSearchBar] = useState(false);
  const [menuDisplayed, showMenu] = useState(false);

  return (
    <section
      className={`h-[5.5rem] px-3 md:px-14 py-6 flex items-center justify-between flex-wrap
      ${searchBarDisplayed ? "bg-white" : "bg-black text-white"}
      `}
      {...props}
    >
      {searchBarDisplayed ?
        <div className="flex-1 flex items-center px-4 lg:px-20 gap-4">
          <SearchBar className="h-14" icon={false} />
          <button onClick={() => showSearchBar(false)}>
            <IoClose size={20} />
          </button>
        </div>
        :
        <>
          <div className="flex gap-1 xs:gap-2 items-center text-xl xs:text-2xl whitespace-nowrap">
            <Link className="flex gap-1 hover:text-neutral-300 font-medium text-2xl" href="/">
              <IoShapesSharp size={30} />
              Abstract
            </Link>
            <p className="hover:cursor-default font-medium">
              |
            </p>
            <Link href="/" className="xs:font-light hover:underline decoration-1 underline-offset-2">
              Help Center
            </Link>
          </div>
          <div className="flex gap-2">
            <button onClick={() => showSearchBar(true)} className="hover:scale-110 transition-transform">
              <IoSearchSharp size={28} />
            </button>
            <button onClick={() => showMenu((prev) => !prev)} className="w-8">
              {menuDisplayed ? <TfiClose size={20} /> : <IoMenuSharp size={30} />}
            </button>
          </div>
        </>
      }
      {menuDisplayed &&
        <div className="w-screen absolute bg-black text-white top-[5.5rem] left-0 flex center border-t-[1px] border-neutral-500">
          <div className="flex flex-col w-2/3 sm:w-1/2 text-center gap-4 py-14 text-2xl font-light">
            <Link href="/">
              <p>Submit a request</p>
            </Link>
            <Separator className="bg-neutral-400" />
            <Link href="/">
              <p>Sign in</p>
            </Link>
          </div>
        </div>
      }
    </section>
  )
}

export default NavBar