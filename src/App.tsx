import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRouter from "./routes/UserRouter";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<UserRouter />} />
      </Routes>
    </Router>
  );
}
