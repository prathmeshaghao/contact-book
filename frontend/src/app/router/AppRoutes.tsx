import { Routes, Route } from "react-router-dom";

import ContactListPage from "../../pages/ContactListPage";
import ContactDetailPage from "../../pages/ContactDetailPage";
import ContactFormPage from "../../pages/ContactFormPage";
// import Login from "../../pages/Login";
import ProtectedRoute from "../../components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <ContactListPage />
          </ProtectedRoute>
        }
      /> */}
      <Route path="/" element={<ContactListPage />} />

      <Route
        path="/contact/:id"
        element={
          <ProtectedRoute>
            <ContactDetailPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/create"
        element={
          <ProtectedRoute>
            <ContactFormPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/edit/:id"
        element={
          <ProtectedRoute>
            <ContactFormPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
