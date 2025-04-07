import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproducts from './components/Addproducts';
import Getproducts from './components/Getproducts';
import MakePayment from './components/MakePayments';

function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/Addproducts' element={<Addproducts />} />
          <Route path='/makepayment' element={<MakePayment />} />
          {/* This is the default component */}
          <Route path='/' element={<Getproducts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
