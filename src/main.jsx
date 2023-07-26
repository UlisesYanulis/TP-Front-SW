import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ContextProvider from './ContextProvider/ContextProvider.jsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ContextProvider>
            <App />
        </ContextProvider>
    </BrowserRouter>
)
