import { useEffect } from 'react'
import assets from '../assets/assets'

type Theme = "light" | "dark";

type Props = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

function ThemeToggle({ theme, setTheme }: Props) {

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <button>
            {theme === "dark" ? (
                <img
                    onClick={() => setTheme("light")}
                    src={assets.sun_icon}
                    className='size-8.5 p-1.5 border border-gray-500 rounded-full'
                    alt="sun icon"
                />
            ) : (
                <img
                    onClick={() => setTheme("dark")}
                    src={assets.moon_icon}
                    className='size-8.5 p-1.5 border border-gray-500 rounded-full'
                    alt="moon icon"
                />
            )}
        </button>
    )
}

export default ThemeToggle