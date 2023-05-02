import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Invoices from './routes/Invoices/invoices.tsx'
import Expenses from './routes/Expenses/expenses.tsx'
import NotFound from './routes/NotFound/index.tsx'
import Invoice from './routes/Invoices/invoice/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/invoices" element={<Invoices />} >
          <Route path=":invoiceId" element={<Invoice/>} />
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Route>
    </Routes>
  </BrowserRouter>,
)
