import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Authent from "./pages/Authent";
import Landing from "./pages/Landing";
import March from "./components/01-mar/March";
import April from "./components/02-apr/April";
import May from "./components/03-may/May";
import June from "./components/04-june/June";
import July from "./components/05_july/July";
import December from "./components/10-dec/December";
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/home");
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1
            className="title"
            onClick={handleGoHome}
            style={{ cursor: "pointer" }}
          >
            A YEAR OF SURPRISES
          </h1>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Authent />} />
        <Route path="/home" element={<Landing />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/march" element={<March />} />
        <Route path="/april" element={<April />} />
        <Route path="/may" element={<May />} />
        <Route path="/june" element={<June />} />
        <Route path="/july" element={<July />} />
        <Route path="/december" element={<December />} />
      </Routes>
    </>
  );
}

export default App;
