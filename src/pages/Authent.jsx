import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Authent() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const SECRET = "2411saintjean";

  const handleLogin = () => {
    if (password === SECRET) {
      localStorage.setItem("auth", "true");
      navigate("/home");
    } else {
      setError("Mot de passe incorrect... essaie encore ! 💭");
      setPassword("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#258963ff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: '"JetBrains Mono", monospace',
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "20px",
          padding: "48px 40px",
          maxWidth: "400px",
          width: "100%",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "48px", marginBottom: "16px" }}>🦦</div>

        <input
          type="password"
          placeholder="mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress}
          style={{
            width: "100%",
            padding: "16px",
            fontSize: "16px",
            border: "2px solid #e0e0e0",
            borderRadius: "12px",
            marginBottom: "16px",
            fontFamily: '"JetBrains Mono", monospace',
            boxSizing: "border-box",
            outline: "none",
          }}
          autoFocus
        />

        {error && (
          <p
            style={{
              color: "#ff6b6b",
              fontSize: "13px",
              marginBottom: "16px",
              fontWeight: "500",
            }}
          >
            {error}
          </p>
        )}

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "16px",
            background: "linear-gradient(135deg, #258963 0%, #2da876 100%)",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            fontFamily: '"JetBrains Mono", monospace',
            boxShadow: "0 4px 12px rgba(37, 137, 99, 0.3)",
          }}
        >
          Entrer ✨
        </button>
      </div>
    </div>
  );
}
