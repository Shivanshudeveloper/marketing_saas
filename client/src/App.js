import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import EmailVerification from './pages/EmailVerification';

function App() {
  return (
    <Router>
      {/* Pages */}
      <Route path="/" exact component={Home} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/pricing" exact component={Pricing} />
      <Route path="/signin" exact component={Signin} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/emailverification" exact component={EmailVerification} />

    </Router>
  );
}

export default App;
