import React from 'react'
import ReactDOM from 'react-dom/client'
import { MDXProvider } from '@mdx-js/react'

import { mdxComponents } from './components/mdx-components/mdx-components.tsx'

import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MDXProvider components={mdxComponents}>
      <App />
    </MDXProvider>
  </React.StrictMode>
)
