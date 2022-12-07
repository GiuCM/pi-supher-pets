import { Popover } from "@headlessui/react"

type FlagProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  image: string,
  isSelected: boolean,
  language: string,
}

export const Flag = ({ image, isSelected, language, ...props }: FlagProps) => (
  <Popover.Button {...props} className='flex items-center gap-3'>
    <img alt="flag" src={image} className={`h-16 rounded-full p-2 hover:bg-red-300 ${isSelected ? 'bg-red-200' : ''}`} />
    <p>{language}</p>
  </Popover.Button>
)