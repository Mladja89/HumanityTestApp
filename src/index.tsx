import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ChakraProvider } from '@chakra-ui/core'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ReactQueryCacheProvider queryCache={queryCache}>
      <ChakraProvider resetCSS>
        <App />
      </ChakraProvider>
    </ReactQueryCacheProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
