import Home from "./pages/Home";
import Login from "./pages/Login";
import Test from "./pages/Test";
import { ThemeProvider } from "@mui/material";
import Signup from "./pages/Signup";
import Upcomming from "./pages/Upcomming";
import Mininav from "./components/home/Mininav";
import Singlevent from "./pages/Singlevent";
import Orgnaize from "./pages/Orgnaize";
import Attend from "./pages/Attend";
import Userhomepage from "./pages/Userhomepage";
import Settings from "./pages/Settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/*  
      
              
                 <Test/>
            <Home /><Login />
          
             <Mininav/>        <Signup />
             <Singlevent/>            <Upcomming/>
             <Orgnaize/>
               <Attend />
                 <Userhomepage/>
      */}

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/Upcomming" element={<Upcomming />} />
          <Route exact path="/Singlevent" element={<Singlevent />} />
          <Route exact path="/Attend" element={<Attend />} />
          <Route exact path="/Orgnaize" element={<Orgnaize />} />
          <Route exact path="/Userhomepage" element={<Userhomepage />} />
          <Route exact path="/Settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
