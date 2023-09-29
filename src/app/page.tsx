import Footer from '@/components/footer'
import Info from '@/components/info'
import NavBar from '@/components/navBar'
import Search from '@/components/search'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />
      <Search />
      <Info />
      <Footer />
    </main>
  )
}
