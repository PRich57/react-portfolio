import Particles from "./components/Particles";
import Navigation from "./components/Nav";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from 'react-router-dom';
import "./index.css";

function App() {
  return (
    <>
      <Particles />
      <header>
        <Header />
        <Navigation />
      </header>
      <main>
        <div className="main-container" >
          <div className="container">
            <div className="content">
              <Outlet />  
            </div>
          </div> 
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
