import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { GetData } from "@/hooks/getDocs";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <GetData>
        <Component {...pageProps} />
      </GetData>
    </ChakraProvider>
  )
}
