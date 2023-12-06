export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="w-full max-w-[62.5rem] p-10 flex flex-col justify-center items-center">
      {children}
    </div>
  )
}
