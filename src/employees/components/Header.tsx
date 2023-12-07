'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Header = () => {
  const pathName = usePathname()

  return (
    <header className="w-full h-16 bg-purple-800 flex justify-center items-center px-5 py-2 fixed top-0 left-0 z-50">
      <div className="relative w-full h-full flex justify-between items-center px-10">
        <h3 className="text-3xl font-bold text-center text-white">
          Employees Chart
        </h3>
        <div className="h-full flex justify-center items-center gap-2">
          <Link
            href="/"
            className={`
          px-5 py-2 font-bold cursor-pointer rounded-lg w-24 flex justify-center items-center
          ${
            pathName === '/'
              ? 'bg-white text-purple-500'
              : 'border-2 border-white text-white'
          } `}
          >
            Home
          </Link>
          <Link
            href="about"
            className={`
          px-5 py-2 font-bold cursor-pointer rounded-lg w-24 flex justify-center items-center
          ${
            pathName === '/about'
              ? 'bg-white text-purple-500'
              : 'border-2 border-white text-white'
          } `}
          >
            About
          </Link>
        </div>
      </div>
    </header>
  )
}
