
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Count } from './pages/Shop-list';
import { Shop } from './pages/Shop';
import { Homepage } from './pages/Homepage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/"element={<Homepage/>}/>
       <Route path="/shops"element={<Count/>}/>
       <Route path="/shops/:id"element={<Shop/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
