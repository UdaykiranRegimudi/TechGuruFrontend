import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import './index.css'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import Home from './components/Home.jsx'
import { CustomProvider } from 'rsuite';
import { PrimeReactProvider } from 'primereact/api';
import 'rsuite/dist/rsuite-no-reset.min.css';   
 
import "primereact/resources/themes/lara-light-cyan/theme.css";




const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomProvider theme="light">
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <SignedOut>
          <Home/>
        </SignedOut>
        <SignedIn>
          <PrimeReactProvider value={{ unstyled: false }}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </PrimeReactProvider>
        </SignedIn>
      </ClerkProvider>
    </CustomProvider>
  </React.StrictMode>,
)
