import { BsMoon, BsSun } from 'react-icons/bs'
import { useTheme } from '../context/ThemeContext'

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem]  h-[3rem] bg-opacity-80 backdropblur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full hover:scale-[1.15] active:scale-105 transition-all flex items-center justify-center dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  )
}

export default ThemeSwitch
