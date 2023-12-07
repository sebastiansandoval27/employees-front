export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="w-full max-w-[62.5rem] px-10 flex flex-col justify-center items-center py-32">
      {children}
    </div>
  )
}
