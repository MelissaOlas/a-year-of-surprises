import "./App.scss";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedMonth from "./ProdectedMonth";
import Authent from "./pages/Authent";
import Landing from "./pages/Landing";
import March from "./components/01-mar/March";
import April from "./components/02-apr/April";
import May from "./components/03-may/May";
import June from "./components/04-june/June";
import July from "./components/05-july/July";
import August from "./components/06-aug/August";
import December from "./components/10-dec/December";
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
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
        <Route
          path="/march"
          element={
            <ProtectedMonth month="march">
              <March />
            </ProtectedMonth>
          }
        />
        <Route
          path="/april"
          element={
            <ProtectedMonth month="april">
              <April />
            </ProtectedMonth>
          }
        />
        <Route
          path="/may"
          element={
            <ProtectedMonth month="may">
              <May />
            </ProtectedMonth>
          }
        />
        <Route
          path="/june"
          element={
            <ProtectedMonth month="june">
              <June />
            </ProtectedMonth>
          }
        />
        <Route
          path="/july"
          element={
            <ProtectedMonth month="july">
              <July />
            </ProtectedMonth>
          }
        />
        <Route
          path="/august"
          element={
            <ProtectedMonth month="august">
              <August />
            </ProtectedMonth>
          }
        />
        <Route
          path="/september"
          element={
            <ProtectedMonth month="september">
              {/* <September /> */}
            </ProtectedMonth>
          }
        />
        <Route
          path="/october"
          element={
            <ProtectedMonth month="october">{/* <October /> */}</ProtectedMonth>
          }
        />
        <Route
          path="/november"
          element={
            <ProtectedMonth month="november">
              {/* <November /> */}
            </ProtectedMonth>
          }
        />
        <Route
          path="/december"
          element={
            <ProtectedMonth month="december">
              <December />
            </ProtectedMonth>
          }
        />
        <Route
          path="/january"
          element={
            <ProtectedMonth month="january">{/* <January /> */}</ProtectedMonth>
          }
        />
        <Route
          path="/february"
          element={
            <ProtectedMonth month="february">
              {/* <February /> */}
            </ProtectedMonth>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
