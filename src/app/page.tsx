import Footer from '@/sections/footer'
import Info from '@/sections/info'
import NavBar from '@/sections/navBar'
import Search from '@/sections/search'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <Search />
      <Info />
      <Footer />
    </main>
  )
}
