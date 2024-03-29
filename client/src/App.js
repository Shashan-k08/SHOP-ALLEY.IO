
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import List from "./pages/List.jsx"
import { Shop } from './pages/Shop';
import { Homepage } from './pages/Homepage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/"element={<Homepage/>}/>
       <Route path="/shops"element={<List/>}/>
       <Route path="/shop"element={<Shop/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
