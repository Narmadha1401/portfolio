import "./App.css";
import About from "./Comp/About";
import Blog from "./Comp/Blog";
import Contact from "./Comp/Contact";
import Footer from "./Comp/Footer";
import Home from "./Comp/Home";
import Project from "./Comp/Project";
import Service from "./Comp/Service";
function App() {
  return (
    <div className="App">
       <Home/>
       <About/>
       <Service/>
       <Project/>
       <Blog/>
       <Contact/>
       <Footer/>
       
    </div>
  );
}

export default App;
