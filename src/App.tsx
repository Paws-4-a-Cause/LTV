import { RouterProvider } from 'react-router-dom'
import router from './Router'
import Navbar from '../src/components/Navbar';

function App() {
  return(
  <>
  <Navbar />
  <h1>Love The Voiceless</h1>
 <RouterProvider router = {router} />;
  </>)
}

export default App;
