import React, {useState, useEffect} from 'react';
import Lottie from 'react-lottie';
import * as animationData from './lf30_editor_7eam6baw.json'
import Home from './pages/Home';
import Navbar from './partials/Navbar';
import Footer from './partials/Footer';
import {BrowserRouter, Route} from 'react-router-dom';
import Auth from './pages/Auth';
import ClipLoader from "react-spinners/ClipLoader";

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: animationData.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  
  return (
    <div>
        {loading ? (
          <Lottie options={defaultOptions}
          height={200}
          width={200}
          style={{alignItems: 'center', justifyContent: 'center', textAlign: 'center', display: 'flex'}}/>
        ) : (
          <BrowserRouter>
            <Route path="/voting" exact component={Home} />
            <Route path="/" exact component={Auth} />
          </BrowserRouter>
        )}
    </div>
  );
}

export default App;
