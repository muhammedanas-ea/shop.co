import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRouter from "./routes/user/UserRouter";
import AdminRouter from "./routes/admin/AdminRouter";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<UserRouter />} />
        <Route path="/admin/*" element={<AdminRouter />} />
      </Routes>
    </Router>
  );
}
