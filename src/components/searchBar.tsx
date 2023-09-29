import { FC } from 'react'
import { Input } from './ui/input'

interface SearchBarProps {

}

const SearchBar: FC<SearchBarProps> = ({ }) => {
  return (
    <Input
      type="search"
    />
  )
}

export default SearchBar