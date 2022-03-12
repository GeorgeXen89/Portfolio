import "./App.css";
import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route } from 'react-router-dom';
import PageBooks from "./PortfolioContainer/Interests/Booklover";
import basketball from "./PortfolioContainer/Interests/basketball";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact>
          <ToastContainer />
          <PortfolioContainer />
        </Route>
        <Route path='/books' component={PageBooks} />
        <Route path='/basketball' component={basketball} />
      </BrowserRouter>
    </div >
  );
};

export default App;


