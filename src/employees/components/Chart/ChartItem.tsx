interface ChartItemProps {
  label: string
  className?: string
  version: string | number
  onClick?: () => void
}

export const ChartItem: React.FC<ChartItemProps> = ({
  label,
  className,
  version,
  onClick = () => {},
}) => {
  return (
    <div
      className={`bg-orange-400 text-white rounded-lg inline-block cursor-pointer hover:bg-orange-700 transition-all duration-300 ${
        className ? className : ''
      }`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center relative w-full h-full p-2">
        <span className="text-center w-full h-full">{label}</span>
        <span className="flex justify-center items-center w-[1.25rem] h-[1.25rem] p-[.3125rem] rounded-full text-center absolute -top-[.3125rem] -right-[.3125rem] z-10 bg-green-500">
          {version}
        </span>
      </div>
    </div>
  )
}
