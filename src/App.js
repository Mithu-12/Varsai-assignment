import logo from './logo.svg';
import './App.css';
import Banner from './Component/Banner/Banner';
import Show from './Component/Show/Show';
import Header from './Component/Header/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Banner/>}></Route>
          <Route path='/bannerItems' element={<Show/>}></Route>
        </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <Header></Header>
    //   <Banner></Banner>
    //   <Show></Show>
    // </div>
  );
}

export default App;
