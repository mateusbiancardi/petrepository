import { useMembers } from '@/hooks/useMembers'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  const { getMembers } = useMembers()
  
  useEffect(() => {
    getMembers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <ChakraProvider>
      
        <Component {...pageProps} />
    </ChakraProvider>
  )
}
