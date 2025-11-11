import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Authent from "./pages/Authent";
import Landing from "./pages/Landing";
import March from "./components/01-mar/March";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1 className="title">A YEAR OF SURPRISES</h1>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Authent />} />
        <Route path="/home" element={<Landing />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/march" element={<March />} />
        {/* <Route path="/april" element={<April />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
