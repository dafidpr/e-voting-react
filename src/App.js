import Home from './pages/Home';
import Navbar from './partials/Navbar';
import Footer from './partials/Footer';
import {BrowserRouter, Route} from 'react-router-dom';
import Auth from './pages/Auth';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Route path="/voting" exact component={Home} />
        <Route path="/" exact component={Auth} />
      </BrowserRouter>

    </div>
  );
}

export default App;
