import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import Spinner from './components/spinner/Spinner'

const App = React.lazy(() => import('./App'))

const container = document.getElementById('app')
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <Suspense
      fallback={
        <div className="suspense__container">
          <Spinner />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Suspense>
  </BrowserRouter>
)
