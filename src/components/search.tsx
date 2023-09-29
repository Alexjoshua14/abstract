import { FC } from 'react'
import SearchBar from './searchBar'

interface SearchProps {

}

const Search: FC<SearchProps> = ({ }) => {
  return (
    <section className="flex flex-col h-[24.75rem] bg-purple-100 center px-24  gap-4">
      <h1 className="text-[4.25rem] text-center">
        How can we help?
      </h1>
      <SearchBar />
    </section>
  )
}

export default Search