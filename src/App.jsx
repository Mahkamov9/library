import { Route, Routes } from "react-router-dom";
import Collector from "./Collector";
import SignIn from "./Pages/SignIn/SignIn";
import Home from "./Pages/Home/Home";



function App() {
  return (
    <>
      <div className="callector">

      <Routes>
        <Route path="/" element={<Collector/>} />
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/home" element={<Home/>} />
      </Routes>
      </div>
    </>
  );
}

export default App;
