import Aboutus from "./components/Aboutus";
import Home from "./components/Home";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footers from "./components/Footers";
import Contact from "./components/Contact";
import Gallary from "./components/Gallary";
import NRICorner from "./components/NRICorner";
import Upcommingprojects from "./components/Upcommingprojects";

function App() {
  
  return (
    <>
      <Main>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/aboutus" element={<Aboutus />}></Route>
          <Route exact path="/contactus" element={<Contact />}></Route>
          <Route exact path="/gallery" element={<Gallary />}></Route>
          <Route exact path="/nricorner" element={<NRICorner />}></Route>
          <Route exact path="/upcomming" element={<Upcommingprojects />}></Route>
          <Route exact path="/footers" element={<Footers />}></Route>
        </Routes>
      </Main>
    </>
  );
}

export default App;
