import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AuthContextPrivider from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <AuthContextPrivider>
      <App />
    </AuthContextPrivider>
  </BrowserRouter>
);
