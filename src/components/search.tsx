import { FC } from 'react'
import SearchBar from './searchBar'

const Search: FC = ({ }) => {
  return (
    <section className="flex flex-col h-[22rem] sm:h-[24.75rem] bg-primary-100 center px-6 md:px-24 gap-10 xs:gap-12">
      <h1 className="text-4xl xs:text-[3.25rem] md:text-[4.25rem] text-center whitespace-nowrap cursor-default">
        How can we help?
      </h1>
      <SearchBar />
    </section>
  )
}

export default Search