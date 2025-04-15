import { Open_Sans, Chakra_Petch } from 'next/font/google'

export const openSans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
});

export const chakraPetch = Chakra_Petch({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap'
});