import { useEffect, useState } from "react";

export default function Nav() {
    const [theme, setTheme] = useState("light")
    // const moonIcon = theme === 'dark' ? 'src/assets/light_moon.png' : 'src/assets/moon.png'
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme')
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        

        if (storedTheme){
            setTheme(storedTheme)
            if (storedTheme === 'dark'){
                document.documentElement.classList.add('dark')
            }
        } else if (systemPrefersDark) {
            setTheme('dark')
            document.documentElement.classList.add('dark')
        }
    },[])

    function switchMode() {
        const htmlElement = document.documentElement; 

        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            setTheme('light')
            localStorage.setItem('theme', 'light');
        } else {
            htmlElement.classList.add('dark');
            setTheme('dark')
            localStorage.setItem('theme', 'dark');
        }

        
    }
    return (
        <>
           <div className="flex justify-between px-9 py-6 font-Nunito shadow-bottom fixed top-0 left-0 z-50 w-full
                            bg-veryLightGrayBg dark:bg-darkBlueElements
                            text-veryDarkBlueText dark:text-whiteText
                            transition-colors duration-600 ease-in-out">
                <h1 className="text-lg font-extrabold">Where in the world?</h1>
                <div className="flex gap-2 items-center font-semibold cursor-pointer" onClick={switchMode}>
                    <img src={theme === 'dark' ? 'src/assets/light_moon.png' : 'src/assets/moon.png'} alt="moon icon" className="w-4 h-4" />
                    <p>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</p>
                </div>
            </div>
        </>
    )
}