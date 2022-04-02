import { Route, Routes } from 'react-router-dom';
import './App.css';
import Grand from './Components/Grand/Grand';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import OrderReview from './Components/OrderReview/OrderReview';

function App() {
  return (
    <div className="App">
     
      <Header></Header>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/home" element={<Home></Home>}></Route>
       <Route path="/orderreview" element={<OrderReview></OrderReview>}></Route>
      <Route path = "/grand" element={<Grand></Grand>}></Route>
     </Routes>
    </div>
  );
}

export default App;
