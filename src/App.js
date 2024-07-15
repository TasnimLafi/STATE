import logo from './logo.svg';
import './App.css';
import Navbar from './componants/Navbar';
import Productlist from './componants/Productlist';
import Modal from './componants/Modal';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Productlist/>
    </div>
  );
}

export default App;
