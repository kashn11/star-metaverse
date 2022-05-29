import logo from './logo.svg';
import './App.css';
import RoadMap from './RoadMap/RoadMap';
import HeroSection from './Landing/HeroSection';
import StartMarketplace from './Landing/starMarketplace';
import Principles from './Landing/keyPrinciples';
import StarProperties from './Landing/starProperty';
import Footer from './Landing/Footer';
import Team from './Landing/team';
import Investors from './Landing/InvestorsPartners';


function App() {
  return (
    <div className="App">
      <HeroSection />
      {/* <RoadMap/> */}
      <StarProperties />
      <StartMarketplace />
      <Principles />
      <Team />
      <Investors />
      <Footer />
    </div>
  );
}

export default App;
