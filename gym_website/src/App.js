import "./App.css";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Join from "./Components/Join/Join";
import Plans from "./Components/Plans/Plans";
import Program from "./Components/Programes/Program";
import Reason from "./Components/Reason/Reason";
import Testimonials from "./Components/Testimonials/Testimonials";
function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reason />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
