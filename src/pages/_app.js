import '@/styles/globals.css'
import '@/styles/hamburger.css'
import { ChakraProvider } from "@chakra-ui/react"

export default function App({ Component, pageProps }) {

  return(
  <ChakraProvider> 
    <Component {...pageProps} />
  </ChakraProvider>
 )
}
