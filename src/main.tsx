import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BudgetProvider } from './context/BudgetContext.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BudgetProvider>
      <App />
    </BudgetProvider>
  </StrictMode>
);
