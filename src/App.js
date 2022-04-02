import "./App.css";
import Articles from "./components/Articles/Articles";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Services />
      <Articles />
    </div>
  );
}

export default App;
