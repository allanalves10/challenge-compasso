import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';
import { GlobalStyles } from './styles/global';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
