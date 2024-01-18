import { Route, Routes } from "react-router-dom";
import Collector from "./Collector";
import SignIn from "./Pages/SignIn/SignIn";



function App() {
  return (
    <>
      <div className="callector">

      <Routes>
        <Route path="/" element={<Collector/>} />
        <Route path="/signin" element={<SignIn/>}/>
      </Routes>
      </div>
    </>
  );
}

export default App;
