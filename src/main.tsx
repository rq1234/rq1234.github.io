import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(<App />);
}


createRoot(document.getElementById("root")!).render(<App />);