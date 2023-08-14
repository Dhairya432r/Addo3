import {  HashRouter } from 'react-router-dom'

import Home from './Home';
function App() {
  return (
   <>
   
   <HashRouter>
   {/* <Routes> */}
   {/* <Route path="/" element={<Home/>} /> */}
<Home/>
   {/* </Routes> */}
   </HashRouter>
   </>
  );
}

export default App;