import './App.css';
import About from './Components/HomePage/About';
import ContectMe from './Components/HomePage/ContectMe';
import Footer from './Components/HomePage/Footer';
import HomePage from './Components/HomePage/HomePage';
import AllProject from './Components/Myproject/AllProject';
import Navbar from './Components/Navbar/Navbar';
import Background from 'E:/ALL PROGRAMME/React/MyPotfolio1/Fronted/src/Components/Background.jpg';

function App() {
  return (
    <div style={{
      backgroundImage: `url(${Background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
    }}>
      <Navbar />
      <HomePage />
    <About></About>
    <AllProject></AllProject>
    <ContectMe></ContectMe>
    <Footer></Footer>
    </div>
  );
}

export default App;
