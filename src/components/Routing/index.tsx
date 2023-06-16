import Auth from "components/Auth";
import Dashboard from "components/Dashboard";
import LoginPage from "components/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/*"
          element={
            <Auth>
              <Dashboard />
            </Auth>
          }
        />
      </Routes>
    </Router>
  );
};

export default Routing;
