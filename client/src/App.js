//npm  i react-typical --force
//npm i rxjs
//npm i  @fortawesome/fontawesome-svg-core 
//npm i @fortawesome/free-brands-svg-icons 
//npm i @fortawesome/free-regular-svg-icons
//npm i @fortawesome/free-solid-svg-icons
//npm i @fortawesome/react-fontawesome
//npm i react-owl-carousel
//npm i axios react-toastify
//npm i concurrently cors dotenv express nodemailer nodemon

import "./App.css";
import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



function App() {
  return <div className="App">
    <ToastContainer />
    <PortfolioContainer />
  </div >;
}

export default App;
