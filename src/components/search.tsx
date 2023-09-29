import { FC } from 'react'
import SearchBar from './searchBar'

interface SearchProps {

}

const Search: FC<SearchProps> = ({ }) => {
  return (
    <section className="flex flex-col h-[25rem] bg-purple-100 center p-24">
      <h1 className="text-[4.25rem]">
        How can we help?
      </h1>
      <SearchBar />
    </section>
  )
}

export default Search