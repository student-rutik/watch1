import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Toaster} from "react-hot-toast";
import { CartProvider } from "react-use-cart";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <CartProvider>
    <App />
      </CartProvider>
    <Toaster position="top-center" toastOptions={{duration:5000}}/>
  </StrictMode>,
)
