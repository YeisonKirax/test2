import { HashRouter, Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';
import Nosotros from './components/Nosotros/Nosotros';
import Reservacion from './components/Reservacion/Reservacion';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HashRouter>

        <Routes>
          <Route
            path="/about-us"
            element={ <Nosotros /> }
          />
          <Route
            path="/menu"
            element={ <Menu /> }
          />
          <Route
            path="/reservations"
            element={ < Reservacion /> }
          />
          <Route
            path="/"
            element={ <Nosotros /> }
          />

        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
