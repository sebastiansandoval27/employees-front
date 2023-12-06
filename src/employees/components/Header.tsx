'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Header = () => {
  const pathName = usePathname()

  return (
    <header className="w-full h-16 bg-purple-800 flex justify-center items-center px-5 py-2 relative">
      <h1 className="text-3xl font-bold text-center text-white justify-self-center">
        Employees Chart
      </h1>
      <div className="absolute right-10 top-0 h-16 flex justify-center items-center gap-2">
        <Link
          href="/"
          className={`
          px-5 py-2 font-bold cursor-pointer rounded-lg
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
          px-5 py-2 font-bold cursor-pointer rounded-lg
          ${
            pathName === '/about'
              ? 'bg-white text-purple-500'
              : 'border-2 border-white text-white'
          } `}
        >
          About
        </Link>
      </div>
    </header>
  )
}
