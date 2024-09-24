import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spinner from "./components/user/common/spinner/Spinner";

const UserRouter = lazy(() => import("./routes/user/UserRouter"));
const AdminRouter = lazy(() => import("./routes/admin/AdminRouter"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/*" element={<UserRouter />} />
          <Route path="/admin/*" element={<AdminRouter />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
