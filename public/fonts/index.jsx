import { Source_Code_Pro, Cabin } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
export const source_code_pro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-code'
})

export const cabin = Cabin({
  subsets: ['latin'],
  variable: '--font-cabin'
})