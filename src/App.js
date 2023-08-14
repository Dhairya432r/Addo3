import {  BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home';
function App() {
  return (
   <>
   <h1>bfubeab</h1>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Home/>} />
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;