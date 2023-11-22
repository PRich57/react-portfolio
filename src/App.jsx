import Particles from "./components/Particles";
import Navigation from "./components/Nav";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTopButton from "./components/ScrollToTop";
import { Outlet } from 'react-router-dom';
import "./styles/index.css";


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
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default App;
