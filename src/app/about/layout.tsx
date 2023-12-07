export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[62.5rem] px-10 flex flex-col justify-center items-center py-32">
      {children}
    </div>
  )
}
