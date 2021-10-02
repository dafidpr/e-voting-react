import Home from './pages/Home';
import Navbar from './partials/Navbar';
import Footer from './partials/Footer';
import {BrowserRouter, Route} from 'react-router-dom';
import Auth from './pages/Auth';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>

        <Route path="/" exact component={Home} />

      </BrowserRouter>
      <Footer/>
      {/* <Auth /> */}
    </div>
  );
}

export default App;
