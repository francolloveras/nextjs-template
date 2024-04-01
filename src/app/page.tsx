import Footer from '@/components/footer'
import Header from '@/components/header'

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center overflow-hidden p-4">
      <div className="relative w-screen">
        <div className="absolute -right-32 -top-8 h-96 w-96 rounded-full bg-violet-500 blur-[160px]" />
        <div className="absolute -top-24 right-12 h-96 w-96 rounded-full bg-pink-500 blur-[160px]" />
        <div className="absolute -top-48 right-48 h-96 w-96 rounded-full bg-orange-500 blur-[160px]" />
      </div>
      <Header />
      <Footer />
    </main>
  )
}
