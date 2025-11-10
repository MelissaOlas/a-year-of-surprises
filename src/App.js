import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Authent from "./pages/Authent";
import Landing from "./pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <div className="App">
          <header className="App-header">
            <h1 className="title">A YEAR OF SURPRISES</h1> */}
        <Route path="/" element={<Authent />} />
        <Route path="/home" element={<Landing />} />
        <Route path="*" element={<Navigate to="/" />} />
        {/* </header>
        </div> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
