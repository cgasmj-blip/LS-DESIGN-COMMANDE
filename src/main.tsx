import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return <main className="shell"><section className="hero"><div className="eyebrow">LS DESIGN</div><h1>Gestion des commandes</h1><p>Le nouveau panel LS DESIGN est en cours de reconstruction.</p><div className="status"><span></span>Infrastructure connectée · GitHub Pages + Supabase</div></section></main>;
}

createRoot(document.getElementById("root")!).render(<React.StrictMode><App /></React.StrictMode>);
