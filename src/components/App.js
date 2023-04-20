import NavBar from "./NavBar/NavBar";
import Hero from "./Hero/Hero";
import Roadmap from "./Roadmap/Roadmap";
import Utility from "./Utility/Utility";
import Service from "./Service/Service";
import Feature from "./Feature/Feature";
import Draggable from "./Drag/Draggable";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Feature />
      <Roadmap />
      <Utility />
      <Service />
      <Draggable />
    </div>
  );
}

export default App;
