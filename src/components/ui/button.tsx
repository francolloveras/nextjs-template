import clsx from 'clsx'

interface ButtonProps {
  onClick?: () => void
  className?: string
  children: string | number | React.ReactElement
}

export default function Button({ className, onClick, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'rounded-md border border-neutral-600 bg-neutral-800 px-4 py-1.5 transition-colors hover:border-pink-500 hover:bg-pink-400 hover:text-neutral-950',
        [className]
      )}
    >
      {children}
    </button>
  )
}
