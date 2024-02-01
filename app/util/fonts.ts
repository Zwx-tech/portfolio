import { Cinzel } from 'next/font/google'
export const cinzelFont = Cinzel({
    subsets: ['latin'],
    display: "swap",
    variable: '--font-cinzel',
    weight: ['400']
})

export const cinzelFontClass = cinzelFont.className;