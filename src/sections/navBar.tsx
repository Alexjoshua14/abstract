import { FC } from 'react'

interface NavBarProps {

}

const NavBar: FC<NavBarProps> = ({ }) => {
  return (
    <section className="flex border-2 border-black h-[5.5rem]">
      <h1>Header</h1>
    </section>
  )
}

export default NavBar