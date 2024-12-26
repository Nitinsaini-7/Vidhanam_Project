import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <App/>
  </BrowserRouter>
);
